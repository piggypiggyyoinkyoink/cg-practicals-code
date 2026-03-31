const express = require("express");
const app = express ();
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 8080;
app.use(express.static("."));
app.use(express.json());
server.listen(port, () => console.log('Server running on port', port));