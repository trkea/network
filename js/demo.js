function makeNetwork() {
  const canvas = document.getElementById("map");
  const ctx = canvas.getContext('2d');
  canvas.style.opacity = 0.5;
  setCanvas(canvas);
  const network = new Network(canvas);
  const points = network.makeRandomPoints(10);
  for(let i = 1; i < points.length + 1;i++) {
  ctx.beginPath();
  ctx.arc(points[i-1].x ,points[i-1].y ,10 ,0 ,Math.PI * 2 ,false);
  ctx.fill();
  network.makeLine(ctx,points[i - 1],points[i]);
  }
}

function makeStar() {
  const canvas = document.getElementById("map");
  const ctx = canvas.getContext('2d');
  setCanvas(canvas);
  const network = new Network(canvas);
  const points = network.makeStartPoints();
  for(let i = 1; i < points.length + 1;i++) {
    network.makeLine(ctx,points[i-1],points[i]);
  }
}

function setCanvas(canvas) {
  canvas.style.opacity = 0.5;
  canvas.width = 400;
  canvas.height = 400;
}