let m1;
let m2;

let now;

let button1;
let button2;
let button3;
let button4;

let up;
let down;

function preload() {
  soundFormats("mp3", "ogg");
  m1 = loadSound("Gosan.mp3");
  m2 = loadSound("Andre99.mp3");
}

function setup() {
  createCanvas(640, 640);

  amp = new p5.Amplitude();
  vol1 = 0.5;

  button1 = createButton("PLAY1");
  button1.mousePressed(Playmusic1);

  button2 = createButton("PLAY2");
  button2.mousePressed(Playmusic2);


  up = createButton("+");
  up.mousePressed(plusVol);
  down = createButton("-");
  down.mousePressed(minusVol);
}

function draw() {
  background(220);
}

function Playmusic1() {
  if (!m1.isPlaying() && !m2.isPlaying()) {
    // m1.setVolume(0.5);
    m1.play();
    button1.html("STOP1");
  } else {
    m1.stop();
    button1.html("PLAY1");
  }
}
function Playmusic2() {
  if (!m1.isPlaying() && !m2.isPlaying()) {
    // m2.setVolume(0.5);
    m2.play();
    button2.html("STOP2");
  } else {
    m2.stop();
    button2.html("PLAY2");
  }
}


function minusVol() {
  vol1 -= 0.1;
}
function plusVol() {
  vol1 += 0.1;
}
