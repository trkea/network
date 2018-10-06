function makeNetwork() {
  const canvas = document.getElementById("map");
  const ctx = canvas.getContext('2d');
  setCanvas(canvas);
  const network = new Network(canvas);
  const points = network.makeRandomCircle(ctx,10);
  for(var i = 1; i < points.length + 1;i++) {
      var bPoint = { 
        x: points[i -1][0],
        y: points[i - 1][1]
      };
    var ePoint = {
      x: points[i][0],
      y: points[i][1]
    };
    network.makeLine(ctx,bPoint,ePoint);
  }
}

function setCanvas(canvas) {
  canvas.style.opacity = 0.5;
  canvas.width = 500;
  canvas.height = 500;
}