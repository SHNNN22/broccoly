let food = []
let pics = []
let emoji
let broccolo
let angle = 0
let wave



function windowResize() {
  resizeCanvas(windowWidth, windowHeight)
}
function preload() {
  broccolo = loadImage('imgs/broccolo.png')
  for(let i = 0; i < 8; i++) {
    pics[i] = loadImage('imgs/emoji' + i + '.png')
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0)

  for(let i = 0; i < 55; i++) {
    let x = random(width)
    let y = random(height)
    let w = random(100, 200)
    let h = w
    emoji = random(pics)
    let emo = new Food(x, y, w, h, emoji)
    food.push(emo)
function slide() {
    let offset = 0
    wave = map(sin(angle + offset), -1, 1, 0, 255)
    offset += 0.5
  }
  angle += 0.001
  }
}
function mousePressed() {
  for(let i = 0; i < food.length; i++) {
    food[i].clicked(mouseX, mouseY)
  }
}
function draw() {
  background(201,68,194);

  for(let f of food){
    f.show()
    f.move()
  }

}

class Food {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.emoji = random(pics)
  }
  show() {
    imageMode(CENTER)
    image(this.emoji, this.x, this.y, this.w, this.h)
  }
  move() {
    this.x = this.x + random(-3, 3)
    this.y = this.y + random(-4, 4)
    // this.y = this.y + random(wave)
  }
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y)
    if(d < this.w / 2) {
      this.emoji = broccolo
    }
  }
}
