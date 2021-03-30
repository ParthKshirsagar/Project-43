function setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw(){
  background(0);

  translate(650, 300);
  rotate(-90);

  var hr = hour();
  var mn = minute();
  var sc = second();

  strokeWeight(7);
  noFill();
  stroke(255, 0, 0);

  var scAng = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, scAng);

  stroke(0, 0, 255);
  var mnAng = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mnAng);

  stroke(0, 200, 0);
  var hrAng = map(hr%12, 0, 12, 0, 360);
  var ar = arc(0, 0, 260, 260, 0, hrAng);

  push();
  rotate(hrAng);
  stroke(0, 200, 0);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(mnAng);
  stroke(0, 0, 255);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(scAng);
  stroke(255, 0, 0);
  line(0, 0, 100, 0);
  pop();

  rotate(90)
  fill(255);
  textSize(75);
  stroke(255, 0, 0);
  text(`${hr} : ${mn} : ${sc}`, -175, 250);

  stroke(0);
  point(0,0);
}