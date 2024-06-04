async function generateUniqueId(inputString) {
  // Encode the input string as a Uint8Array
  const msgUint8 = new TextEncoder().encode(inputString);

  // Hash the message using SHA-256
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);

  // Convert the hash to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const truncatedHash = hashHex.substring(0, 24);
  // Return the hash as the unique ID
  return truncatedHash;
}
export default generateUniqueId;
