// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("./src/swagger/swagger.json"); // Correct path

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(bodyParser.json());
const apiRoutes = require("./src/routes");

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('sendMessage', (data) => {
    io.emit('receiveMessage', data);
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.use("/api", apiRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));





