var app;
exports.processInit = function () {
    if(!app){    
        app = require('http').createServer();
        var sio = require('socket.io').listen(app);

        app.listen(3010);

        sio.set('log level', 1);

        sio.sockets.on('connection', function(socket){
            
            socket.on('message', function(data){
                var route = data.route;
                socket.broadcast.emit(route, data);
            
            });
        
        });
    }
}

