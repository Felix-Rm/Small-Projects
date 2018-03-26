var font;
var elem = 0
var vehicles = [];
var displaySize
var displayText
var displayColor = '#fff'
var displayTimer
var displayRadius
var displayBackground
var displayResolution



function start() {

  reload()
  setTimeout(update, 7000)
}

function update() {
  elem >= displayText.length - 1 ? elem = 0 : elem++;
  reload()
  setTimeout(update, displayTimer)
}

function setup() {
  var c = createCanvas(800, 500)
  font = loadFont('AvenirNextLTPro-Demi.otf', start);
  loadValues()
  textAlign(CENTER)
}

function draw() {

  background(displayBackground);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }

}


function loadValues() {
  displayText = document.getElementsByName('text')[0].value.split(' ')
  displaySize = document.getElementsByName('size')[0].value
  displayRadius = document.getElementsByName('radius')[0].value
  displayResolution = document.getElementsByName('resolution')[0].value
  displayColor = document.getElementsByName('vcolor')[0].value
  displayBackground = document.getElementsByName('bgcolor')[0].value
  displayTimer = document.getElementsByName('change')[0].value * 1000
  displayMouse = document.getElementsByName('mouse')[0].value
  displayArrive = document.getElementsByName('arrive')[0].value
}


function reload() {
  loadValues()

  bound = font.textBounds(displayText[elem], width / 2, height / 2, displaySize)
  points = font.textToPoints(displayText[elem], bound.x - displayRadius * 2, height / 2 + bound.h / 2, displaySize, {
    sampleFactor: displayResolution
  });
  var sp = 0
  console.group("remaster")
  console.log(vehicles.length);
  console.log(sp = vehicles.length - points.length);
  console.groupEnd()

  if (points.length <= vehicles.length) {

    for (var i = 0; i < sp; i++) {
      var t = random(vehicles)
      vehicles.splice(vehicles.indexOf(t), 1)
    }

    for (var i = 0; i < vehicles.length; i++) {
      vehicles[i].r = displayRadius
      vehicles[i].target = createVector(points[i].x, points[i].y)
    }

  } else {
    console.log(points.length);

    for (var i = 0; i < abs(sp); i += 1) {
      var t = points[points.length - i - 1]
      if (vehicles.length > 0) {
        var v = random(vehicles).pos
      } else {
        var v = createVector(random(0, width), random(0, height))
      }
      vehicles.push(new Vehicle(t.x, t.y, displayRadius, createVector(v.x, v.y)))
    }

    for (var i = 0; i < vehicles.length; i++) {
      vehicles[i].r = displayRadius
      vehicles[i].target = createVector(points[i].x, points[i].y)
    }
  }
}