// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Coinflip is Ownable {
    using Strings for string;

    event gameCreated(address _gameOwner, uint _amountBet, uint launchedTime);
    event gamePlayed(address _gameOwner, address _playerThatJoined, uint _winnableAmount, address _winner);

    enum game_state { WAITING_FOR_OPPONENT, BEING_PLAYED, ENDED }

    struct Game {
        uint amount;
        uint launchedTime;
        game_state gameState;
    }

    // Total current games
    uint totalCurrentAmountBet;

    // Queue of games
    mapping (address => Game) queue;

    function pickWinner (address player1, address player2) internal view returns(address){
        uint random = uint(keccak256(abi.encodePacked(block.timestamp, block.difficulty, player2))) % 2;
        if (random == 0) {
            return player1;
        } else if (random == 1) {
            return player2;
        }
        return address(0);
    }

    function getBalance() external view returns(uint) {
        return address(this).balance - totalCurrentAmountBet;
    }

    function widthdrawComission() external onlyOwner {
        require(address(this).balance - totalCurrentAmountBet > 0, "There is no funds to withdraw");
        payable(msg.sender).transfer(address(this).balance - totalCurrentAmountBet);
    }

    // Create a game
    function createGame () external payable {
        require(msg.value >= 1000, string.concat(
                "The amount provided must be at least 1000 wei, ",
                Strings.toString(msg.value),
                " provided"
            )); 
        require(queue[msg.sender].launchedTime == 0, "You can only start one game at a time");

        queue[msg.sender].amount = msg.value;
        queue[msg.sender].launchedTime = block.timestamp;
        queue[msg.sender].gameState = game_state.WAITING_FOR_OPPONENT;
        totalCurrentAmountBet += msg.value;
        emit gameCreated(msg.sender, msg.value, block.timestamp);
    }

    function getGameInfos (address _gameOwner) external view returns(Game memory) {
        return queue[_gameOwner];
    }

    // Join a game
    function play (address payable _gameOwner) external payable {
        require(_gameOwner != msg.sender, "You cannot join your own game");
        require(queue[_gameOwner].launchedTime != 0, "This game doesn't exist");
        require(msg.value == queue[_gameOwner].amount, "The amount you provided is not equal to the amount required for this game");

        totalCurrentAmountBet += msg.value;
        queue[_gameOwner].amount += msg.value;
        queue[_gameOwner].gameState = game_state.BEING_PLAYED;
        address winner = pickWinner(_gameOwner, msg.sender);
        if (winner == _gameOwner) {
            _gameOwner.transfer(SafeMath.mul(SafeMath.div(queue[_gameOwner].amount, 100), 99)); // 99% of the amount goes to the winner
        } else if (winner == msg.sender) {
            payable(msg.sender).transfer(SafeMath.mul(SafeMath.div(queue[_gameOwner].amount, 100), 99)); // 99% of the amount goes to the winner
        }
        queue[_gameOwner].gameState = game_state.ENDED;
        totalCurrentAmountBet -= queue[_gameOwner].amount;
        emit gamePlayed(_gameOwner, msg.sender, queue[_gameOwner].amount, winner);
        delete queue[_gameOwner];
    }

}