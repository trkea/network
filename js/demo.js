function makeNetwork() {
  const canvas = document.getElementById("map");
  const ctx = canvas.getContext('2d');
  canvas.style.opacity = 0.5;
  setCanvas(canvas);
  const network = new Network(canvas);
  const points = network.makeRandomPoints(ctx,10,true);
  for(var i = 1; i < points.length + 1;i++) {
    network.makeLine(ctx,points[i - 1],points[i]);
  }
}

function makeStar() {
  const canvas = document.getElementById("map");
  const ctx = canvas.getContext('2d');
  setCanvas(canvas);
  const network = new Network(canvas);
  const points = network.makeStartPoints();
  for(var i = 1; i < points.length + 1;i++) {
    network.makeLine(ctx,points[i-1],points[i]);
  }
}

function setCanvas(canvas) {
  canvas.style.opacity = 0.5;
  canvas.width = 300;
  canvas.height = 300;
}