const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 300;

// Draw a rectangle
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 50, 50);

// Draw a line
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.stroke();

// Draw a circle (using arc)
ctx.beginPath();
ctx.arc(250, 150, 50, 0, 2 * Math.PI); 
ctx.fillStyle = "green";
ctx.fill();

// Animate a moving square
let x = 10;
let y = 10;

function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the square
  ctx.fillStyle = "red";
  ctx.fillRect(x, y, 50, 50);

  // Update position
  x += 2;
  y += 2;

  // Check if the square reaches the edge and reverse direction
  if (x > canvas.width - 50 || x < 0) {
    x = x > canvas.width - 50 ? 0 : canvas.width - 50;
  }
  if (y > canvas.height - 50 || y < 0) {
    y = y > canvas.height - 50 ? 0 : canvas.height - 50;
  }

  // Request the next frame
  requestAnimationFrame(animate);
}

// Start the animation
animate();