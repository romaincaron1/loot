// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Roulette {

    // Variables
    uint constant game_duration = 60; // 1 minute
    uint expiration_time;
    uint balance;
    uint initialBalance;
    address owner;

    // Enums
    enum coin { RED, GOLD, BLUE }
    enum game_state { INACTIVE, ACTIVE }

    // Structs
    struct Player {
        address payable player_address;
        coin betCoin;
        uint amount;
    }

    // Arrays
    Player[] public players;
    Player[] public winners;

    // Events
    event playerhasJoin(address _player, coin _betCoin, uint _amountBet);
    event playerHasWin(address _player, uint _amount);
    event gameHasEnded(uint _winnerCoin, uint _amountWon, uint _amountLost);

    // balance initialization
    // owner initialization
    constructor() payable {
        balance = msg.value;
        initialBalance = balance;
        owner = msg.sender;
    }

    // only owner can access the function
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    function getRemainingTime() external view returns(uint) {
        require(expiration_time != 0, "No game in progress");
        return expiration_time - block.timestamp;
    }
    
    // returns 0 for INACTIVE
    // returns 0 for ACTIVE
    function gameState() public view returns(game_state) {
        if (block.timestamp <= expiration_time) {
            return game_state.ACTIVE;
        } else {
            return game_state.INACTIVE;
        }
    }

    // expiration_time must be 0
    // or
    // expiration_time must be > current_timestamp
    // 20 players max
    // a player can't join 2 times
    function join(coin _betCoin) external payable {
        require(msg.value > 0, "You cannot join the game with no funds");
        require(expiration_time == 0 || expiration_time + game_duration > block.timestamp, "Game expired");
       
        uint players_len = players.length;
        require(players_len <= 20, "Too many players in this game (max 20)");

        // Verifying sender existence in players
        bool temp_user = false;
        for (uint i = 0; i < players_len; i++) {
            if (players[i].player_address == msg.sender) {
                temp_user = true;
            }
        }

        require(temp_user == false, "You cannot join your own game");

        // Player can join
        Player memory current_player = Player(payable(msg.sender), _betCoin, msg.value);
        players.push(current_player);
        emit playerhasJoin(msg.sender, _betCoin, msg.value);

        // first join
        if (expiration_time == 0) {
            expiration_time = block.timestamp + game_duration;
        }
    }

    // if game has ended
    // pick the winner coin
    // draw winners and send amount X2 or X14
    function drawWinners() external payable {
        require(expiration_time <= block.timestamp && expiration_time != 0, "The game is neither started or finished.");

        uint players_len = players.length;
        uint randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % 41;
        uint winnerCoin; // The coin that has won 0, 1 or 2
        uint8 multiplicator; // The amount multiplicator
        uint totalWon = 0;
        uint totalLoss = 0;

        // pick winner coin and set multiplicator
        if (randomNumber == 0) {
            winnerCoin = 1;
            multiplicator = 14;
        } else if (randomNumber >= 1 && randomNumber <= 20) {
            winnerCoin = 0;
            multiplicator = 2;
        } else if (randomNumber >= 21 && randomNumber <= 40) {
            winnerCoin = 2;
            multiplicator = 2;
        }

        for (uint i = 0; i < players_len; i++) {
            Player memory current_player = players[i];
            
            // Get all players that choosed the winner coin
            // Send the bet amount * multiplicator
            if (uint(current_player.betCoin) == winnerCoin) {
                uint amountWon = current_player.amount * multiplicator;
                totalWon += amountWon;
                winners.push(current_player);
                current_player.player_address.transfer(amountWon);
                emit playerHasWin(current_player.player_address, amountWon);
            } else {
                totalLoss += current_player.amount;
            }
        }

        emit gameHasEnded(winnerCoin, totalWon, totalLoss);

        // Reset game
        delete players;
        delete winners;
        delete expiration_time;
    }

    // if there is funds to withdraw
    // send funds to the owner
    function withdraw() external onlyOwner {
        require(balance > initialBalance, "Nothing to withdraw");
        payable(msg.sender).transfer(balance - initialBalance);
    }

    // add funds to the balance
    function addFunds() external payable onlyOwner {
        balance += msg.value;
    }

    // Destroy and send rest to the owner
    function destroy() external onlyOwner {
        selfdestruct(payable(owner));
    }

}