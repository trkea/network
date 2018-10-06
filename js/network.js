class Network {

  constructor(canvas) {
    this.canvas = canvas;
  }

  makeRandomPoints(ctx,total) {
  let points = new Array();
  const splitX = this.canvas.width / total;
  const splitY = this.canvas.height / total;
  for(var i = 0;i < total;i++) {
    ctx.beginPath();
    this.canvas.style.opacity += 1/ total;
    var x = this.canvas.width  * Math.random();
    var y = this.canvas.height / total * (i + 1);
    if(x >= this.canvas.width - 10) {
      x -= 10;
    }else if(x <= 10) {
      x += 10;
    }
    if(y >= this.canvas.height - 10) {
      y -= 10;
    }else if(y <= 10) {
      y += 10;
    }
      ctx.arc(x ,y ,10 ,0 ,Math.PI * 2 ,false);
      const point = [x,y];
      points.push(point);
      ctx.fill();
    }
  return points;
  }

    makeStartPoints(ctx) {
      return [[this.canvas.width / 2 , 0],
              [this.canvas.width / 7 , this.canvas.height],
              [this.canvas.width , this.canvas.height / 20 * 7],
              [0, this.canvas.height / 20 * 7],
              [this.canvas.width / 7 * 6, this.canvas.height],
              [this.canvas.width / 2 , 0]];
    }

   makeLine(ctx,bPoint,ePoint) {
      var drawSlantLineAnim = function() {
      var movePoint = { 
        x: bPoint.x,
        y: bPoint.y
      },
      moveLength = 0,
      addLength = 10, 
      side = {
        x: ePoint.x - bPoint.x,
        y: ePoint.y - bPoint.y
      },
      hypotenuse = Math.sqrt(Math.pow(side.x, 2) + Math.pow(side.y, 2)),
      radian = Math.atan2(side.y, side.x),
      isAnim = function() {
        return moveLength < hypotenuse;
      };
    var render = function() {
      ctx.beginPath();
      ctx.moveTo(bPoint.x, bPoint.y);
      ctx.lineTo(movePoint.x, movePoint.y);
      ctx.closePath();
      ctx.stroke();

    if (isAnim() === true) {
      moveLength += addLength;
      movePoint.x += Math.cos(radian) * addLength;
      movePoint.y += Math.sin(radian) * addLength;
      movePoint.x = (isAnim() === false) ? ePoint.x : movePoint.x;
      movePoint.y = (isAnim() === false) ? ePoint.y : movePoint.y;
      requestAnimationFrame(render);
    }
};
  render();
};
drawSlantLineAnim();
}
}
