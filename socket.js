module.exports = function (io) {
  io.on('connection', function (socket) {
    console.log('A user joined');
    socket.on('disconnect', function (data) {
      // Stuff
    });

    // CANVAS EVENTS =========================================================

    // Remove Obj
    socket.on('remove', function (data) {
      socket.broadcast.emit('remove', data);
    });

    // Add Obj
    socket.on('add', function (data) {
      socket.broadcast.emit('add', data);
    });

    // Refresh All
    socket.on('refresh', function (data) {
      console.log('refreshed');
      socket.broadcast.emit('refresh', data);
    });

      //  ReSync All
    socket.on('resync', function (data) {
      socket.broadcast.emit('resync', data);
    });
  });
};
