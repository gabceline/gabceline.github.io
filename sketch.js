function setup() {
  createCanvas(500, 500);
}

// Background
function draw() {
  background("ivory");
  var ctx = canvas.getContext("2d");
  // Move origin to center of canvas
  translate(width / 2, height / 2);
  
// Function to draw a star with 'n' sides
function drawStar(x, y, radius, sides, fillColor) {
  var points = sides || 5;
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  for (var i = 0; i < 2 * points + 1; i++) {
    var r = (i % 2 == 0) ? radius : radius / 2;
    var a = Math.PI * i / points;
    ctx.lineTo(x + r * Math.sin(a), y + r * Math.cos(a));
  }
  ctx.closePath();
  if (fillColor)
    ctx.fill();
}
  // Call the drawStar function with different parameters
  // Get the current second, minute, and hour
  let sc = second();
  let mn = minute();
  let hr = hour();
  
  // Get a rotation rate based on frame count for continuous rotation
  let rotationrate = frameCount * 0.008; // slow clockwise rotation
  
  // draw (hour)-sided star
  push();
  rotate(rotationrate);
  drawStar(0, 0, 250, hr, "darkseagreen");
  pop();

   // draw (minute)-sided star
  push();
  rotate(-rotationrate);
  drawStar(0, 0, 125, mn, "palevioletred");
  pop();
  
  // draw (second)-sided star
  push();
  drawStar(0, 0, 50, sc, "cornflowerblue");
  pop();

    // title!
  fill('ivory');
  textFont('Lucida Console');
  text('star', -15, -3);
  text('clock', -18, 12);
}
