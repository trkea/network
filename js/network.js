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
      let x = this.canvas.width  * Math.random();
      let y = this.canvas.height / total * (i + 1);
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
      const point = {x: x,y: y};
      points.push(point);
    }
    return points;
  }

    makeStartPoints() {
      return [
      {x: this.canvas.width / 2    , y: 0},
      {x: this.canvas.width / 7    , y: this.canvas.height},
      {x: this.canvas.width        , y: this.canvas.height / 20 * 7},
      {x: 0                        , y: this.canvas.height / 20 * 7},
      {x: this.canvas.width / 7 * 6, y: this.canvas.height},
      {x: this.canvas.width / 2    , y: 0}
      ];
    }

   makeLine(ctx,bPoint,ePoint) {
    let drawSlantLineAnim = function() {
    let movePoint = { 
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
    let render = function() {
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
