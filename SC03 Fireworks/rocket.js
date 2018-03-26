function rocket(x, y, w, c) {
  this.x = x
  this.y = y
  this.angle = w ? random(-20, 20) : random(0, 360)
  this.speed = w ? random(19, 24) : random(5, 10)
  this.w = w
  this.s = []
  this.a = 255
  this.c = c
  this.explode = random(100, height / 2)


  this.update = function() {

    this.x += cos(this.angle + 90) * -this.speed
    this.y += sin(this.angle + 90) * -this.speed

    if (this.w && this.a > 0) {
      this.speed -= 0.1
    } else {
      this.a -= random(10, 15)
      this.speed -= 0.1
      if (this.angle < 180) {
        this.angle += (180 - this.angle) * random(0.01, 0.3) * sign(this.speed)
      } else {
        this.angle -= (this.angle - 180) * random(0.01, 0.3) * sign(this.speed)
      }
    }

    if ((this.y <= this.explode || this.speed < 12) && this.w && this.s.length == 0 && this.a > 0) {
      this.a = 0
      for (var i = 0; i < 70; i++) {
        this.s.push(new rocket(this.x, this.y, false, this.c))
      }
    }

    if (this.w && this.s.length >= 0) {
      for (var i = 0; i < this.s.length; i++) {
        if (this.s[i].a < 0) {
          this.s.splice(i, 1)
        }
      }
    }

  }

  this.show = function() {

    if (this.w) {

      fill(255, 155, 0, this.a)
      ellipse(this.x, this.y, 5)
    } else {
      fill(this.c, this.a + random(-100, 100))
      ellipse(this.x, this.y, 4)
    }
    for (var i = 0; i < this.s.length; i++) {
      this.s[i].show()
      this.s[i].update()
    }
  }
}

function sign(x) {
  return x > 0 ? 1 : -1
}