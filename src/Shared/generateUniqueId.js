function generateUniqueId(inputString) {
  let hash = 0;
  if (inputString.length === 0) return hash.toString(16).padStart(24, "0");

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }

  // Convert to a hexadecimal string
  let hashHex = hash.toString(16);

  // Ensure the hash is 24 characters long
  while (hashHex.length < 24) {
    hashHex = "0" + hashHex;
  }

  // Truncate to 24 characters if necessary
  return hashHex.substring(0, 24);
}
export default generateUniqueId;
