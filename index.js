require('dotenv').config();
const messageHandler = require('./server/chat/chat-service');
const app = require('./server/app');
const PORT = process.env.PORT || 8000;

const http = require('http').createServer(app);
const io = require('socket.io')(http);
io.on('connection', messageHandler(io));

http.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
