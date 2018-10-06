class Network {

  constructor(canvas) {
    this.canvas = canvas;
  }

  makeRandomCircle(ctx,total) {
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

   makeLine(ctx,bPoint,ePoint) {
      var drawSlantLineAnim = function() {
      var beginPos = {
        x: bPoint[0],
        y: bPoint[1]
      },
      movePos = { 
        x: beginPos.x,
        y: beginPos.y
      },
      endPos = { 
        x: ePoint[0],
        y: ePoint[1]
      },
      moveLength = 0,
      addLength = 10, 
      side = {
        x: endPos.x - beginPos.x,
        y: endPos.y - beginPos.y
      },
      hypotenuse = Math.sqrt(Math.pow(side.x, 2) + Math.pow(side.y, 2)),
      radian = Math.atan2(side.y, side.x),
      isAnim = function() {
        return moveLength < hypotenuse;
      };
    var render = function() {
      ctx.beginPath();
      ctx.moveTo(beginPos.x, beginPos.y);
      ctx.lineTo(movePos.x, movePos.y);
      ctx.closePath();
      ctx.stroke();

    if (isAnim() === true) {
      moveLength += addLength;
      movePos.x += Math.cos(radian) * addLength;
      movePos.y += Math.sin(radian) * addLength;
      movePos.x = (isAnim() === false) ? endPos.x : movePos.x;
      movePos.y = (isAnim() === false) ? endPos.y : movePos.y;
      requestAnimationFrame(render);
    }
};
  render();
};
drawSlantLineAnim();
}
}
