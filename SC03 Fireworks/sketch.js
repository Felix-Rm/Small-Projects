var r = []


function setup() {
  //frameRate(5)
  createCanvas(window.innerWidth, window.innerHeight)
  background(0)
  noStroke()
  angleMode(DEGREES)
}




function draw() {

  background(0, 70)

  for (var i = 0; i < r.length; i++) {
    r[i].show()
    r[i].update()
    if (r[i].s.length == 0 && r[i].a <= 0) {
      r.splice(i, 1)
    }
  }

  if (floor(random(0, 1000)) % 30 == 0 && r.length < 3) {
    colorMode(HSB);
    r.push(new rocket(random(width - 200) + 100, height, true, color(random(255), 255, 255)))
    colorMode(RGB)
  }
}