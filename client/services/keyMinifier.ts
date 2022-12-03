// Key minifier
// Transform public key into xxx..xxx
export default function keyMinifier(key: string) {
	let minifiedKey = `${key.substring(0, 4)}...${key.substring(key.length - 4)}`;
	return minifiedKey;
}
