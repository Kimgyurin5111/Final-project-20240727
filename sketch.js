let m1;
let m2;

let now;
let amp;

let button1;
let button2;
let button3;
let button4;

let buttonJump1;
let buttonJump2;

let jumpV = 0;
let vol1;

let img1;
let img2;

function preload() {
  soundFormats("mp3", "ogg");
  m1 = loadSound("Gosan.mp3");
  m2 = loadSound("Andre99.mp3");
  img1 = loadImage("silicagel logo.png");
  img2 = loadImage("silicagel logo.png");
}

function setup() {
  createCanvas(640, 640);

  amp = new p5.Amplitude();
  vol1 = 0.5;

  button1 = createButton("PLAY1");
  button1.mousePressed(Playmusic1);

  button2 = createButton("PLAY2");
  button2.mousePressed(Playmusic2);

  buttonJump2 = createButton("<<");
  buttonJump2.mousePressed(jumpsong2);
  buttonJump1 = createButton(">>");
  buttonJump1.mousePressed(jumpsong1);

  slider = createSlider(0, 2, 0.5, 0.1);
  sliderRate = createSlider(0, 2, 1, 0.1);

  textSize(40);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  m1.setVolume(vol1);
  m2.setVolume(vol1);
  vol1 = slider.value();
  m1.rate(sliderRate.value());
  m2.rate(sliderRate.value());

  line(20, 320, 620, 320);
  line(320, 20, 320, 620);

  fill(0);
  text("Silicagel", width / 2, height / 2);
  
 if (m1.isPlaying()) {
    let rate = m1.rate();  
    let rotationSpeed = map(rate, 0, 2, 0.05, 0.5);
    let angle = rotationSpeed * frameCount;  
   
    push();
    translate(160, 160);  
    rotate(angle);  
    imageMode(CENTER);
    image(img1, 0, 0, 320, 320); 
    pop();
  } else {
    
    image(img1, 0, 0, 320, 320);
  }

  if (m2.isPlaying()) {
    
    let rate = m2.rate();  
    let rotationSpeed = map(rate, 0, 2, 0.05, 0.5);  
    let angle = rotationSpeed * frameCount;
  
    push();
    translate(480, 480);  
    rotate(angle);  
    imageMode(CENTER);
    image(img2, 0, 0, 320, 320);  
    pop();
  } else {
    image(img2, 320, 320, 320, 320);
  }
 
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

const maxdum1 = 191.40208616780046;
const maxdum2 = 203.61578231292518;
const jumpintm1 = maxdum1 / 5;
const jumpintm2 = maxdum2 / 5;

function jumpsong1() {
  if (m1.isPlaying()) {
    jumpV += jumpintm1;
    if (jumpV >= maxdum1) {
      jumpV = 0;
    }
    m1.jump(jumpV);
  } else if (m2.isPlaying()) {
    jumpV += jumpintm2;
    if (jumpV >= maxdum2) {
      jumpV = 0;
    }
    m2.jump(jumpV);
  } else {
    console.log("No song");
  }
}
function jumpsong2() {
  if (m1.isPlaying()) {
    jumpV -= jumpintm1;

    if (jumpV < 0) {
      jumpV = 0;
    }

    m1.jump(jumpV);
  } else if (m2.isPlaying()) {
    jumpV -= jumpintm2;

    if (jumpV < 0) {
      jumpV = 0;
    }
    m2.jump(jumpV);
  } else {
    console.log("No song");
  }
}
