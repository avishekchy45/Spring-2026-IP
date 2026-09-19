const WebSocket = require("ws");

const server = new WebSocket.Server({
  port: 8080,
});

server.on("connection", (socket) => {
  console.log("Client connected");

  socket.send("Welcome to the WebSocket server!");

  socket.on("message", (message) => {
    console.log("Received:", message.toString());

    socket.send(`Server received: ${message.toString()}`);
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});