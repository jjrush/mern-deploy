const express = require('express');
const cors = require('cors');
const app = express();
const socket = require('socket.io');
require('./config/mongoose.config');               
app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));   
require('./routes/pirate.routes')(app);
const server = app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

// to initialize the socket, we need to invoke a new instance
//     of socket.io and pass it our express server instance
// We must also include a configuration settings object to prevent CORS errors
const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    console.log('socket id: ' + socket.id);

    // a client has registered a new message to the server
    socket.on("new_pirate", data => {
        // send a message with "data" to ALL clients EXCEPT for the one that emitted the
    	//     "new_message" event
        socket.broadcast.emit("inform_other_ships", data);
    });
});
