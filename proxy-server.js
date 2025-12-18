const http = require("http");
const httpProxy = require("http-proxy");

// Create a proxy server
const proxy = httpProxy.createProxyServer();

// Define the server
const server = http.createServer((req, res) => {
  const target = "https://now.gg"; // Target site that the proxy will forward requests to

  // Log the request
  console.log(`Proxying request to: ${target}${req.url}`);

  // Forward the request to the target
  proxy.web(req, res, { target }, (err) => {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Something went wrong.");
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});