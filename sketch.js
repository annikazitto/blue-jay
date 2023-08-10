let sound, amplitude;

function preload() {
  sound = loadSound("bluejayisolated.wav");
}

function setup() {
  
  let cnv = createCanvas(600,600);
  cnv.mouseClicked(togglePlay);

  amplitude = new p5.Amplitude();

}

function draw() {
  
  background('#0D67B6');
  noStroke();

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 600);
  fill('#000000')  
  ellipse(width/2, height/2, size*240, size*240);
    
  fill('#50C8FF')  
  ellipse(width/2, height/2, size*220, size*220);
  fill('#000000')  
  ellipse(width/2, height/2, size*200, size*200);
    
  fill('#FFFFFF')  
  ellipse(width/2, height/2, size*180, size*180);
  fill('#000000')  
  ellipse(width/2, height/2, size*120, size*120);
  fill('#50C8FF')  
  ellipse(width/2, height/2, size*100, size*100);
 
  fill('#000000')  
  ellipse(width/2, height/2, size*40, size*40);
  
 noFill();
  strokeWeight(2);
  stroke('black') ;
  ellipse(width/2, height/2, size*150, size*150);
   
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}