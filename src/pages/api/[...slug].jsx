export default function handler(req, res) {
  // Assuming you are using catch-all routes

  // Redirect to the new URL
  res.writeHead(410);
  res.end();
}
