/* global fabric, $ */
// var c = document.getElementById('canvas');

var canvasObjects = {
  redCircle: function () {
    var redCircle = new fabric.Circle({
      top: 100,
      left: 100,
      radius: 30,
      fill: 'crimson',
      stroke: 'black',
      strokeWidth: 5
    });
    canvas.add(redCircle);
  }
};

$(document).ready(function () {
  var buttons = [];
  for (var object in canvasObjects) {
    var button = '<button onclick="addObject(\'' + object + '\')">' + object + '</button>';
    buttons.push(button);
  }
  $('#canvas-objects').append(buttons);
});

var canvas = new fabric.Canvas('canvas');

$('#draw-mode').on('click', function () {
  console.log(this);
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) { $(this).html('Draw Mode: On'); }
  if (!canvas.isDrawingMode) { $(this).html('Draw Mode: Off'); }
});

function addObject (obj) {
  canvasObjects[obj]();
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

canvas.add(canvasObjects.redCircle);
