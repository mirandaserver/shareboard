/* global fabric */
// var c = document.getElementById('canvas');

var canvas = new fabric.Canvas('canvas');
var io = io.connect();
redCircle();

// Socket Events
canvas.on('object:moving', function () {
  var data = JSON.stringify(canvas);
  console.log('emit moving');
  io.emit('refresh', data);
});

// Socket Listeners
io.on('refresh', function (data) {
  canvas.loadFromJSON(data, canvas.renderAll.bind(canvas));
});

// Add Object
function redCircle () {
  console.log('make circle');
  var circRed = new fabric.Circle({
    top: 100,
    left: 100,
    radius: 30,
    fill: 'crimson',
    stroke: 'black',
    strokeWidth: 3
  });
  canvas.add(circRed);
}

// Delete Button
window.deleteObject = function () {
  canvas.getActiveObject().remove();
};

document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.keyCode === 8 || event.keyCode === 46) {
    event.preventDefault();
    canvas.getActiveObject().remove();
  }
}, false);

var canvasObjects = {
  redCircle: new fabric.Circle({
    top: 100,
    left: 100,
    radius: 30,
    fill: 'crimson',
    stroke: 'black',
    strokeWidth: 5
  })
};
