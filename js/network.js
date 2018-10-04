function makeMap() {
  var canvas = document.getElementById("map");
  canvas.style.opacity = 0.5;
  var ctx = canvas.getContext("2d");
  var total = 5;
  canvas.width = 500;
  canvas.height = 500;
  let points = makeRandomCircle(ctx,10,canvas);
  for(var i = 1; i < points.length + 1;i++) {
  let bPoint = [points[i -1][0],points[i - 1][1]];
  let ePoint = [points[i][0],points[i][1]];
  makeLine(ctx,bPoint,ePoint);
  }
}

function makeRandomCircle(ctx,total,canvas) {
  var points = new Array();
  let splitX = canvas.width / total;
  let splitY = canvas.height / total;
  for(var i = 0;i < total;i++) {
    ctx.beginPath();
    canvas.style.opacity += 1/ total;
    var x = canvas.width  * Math.random();
    var y = canvas.height / total * (i + 1);
    if(x >= canvas.width - 10) {
      x -= 10;
    }else if(x <= 10) {
      x += 10;
    }
    if(y >= canvas.height - 10) {
      y -= 10;
    }else if(y <= 10) {
      y += 10;
    }
    ctx.arc(x ,y ,10 ,0 ,Math.PI * 2 ,false);
    let point = [x,y];
    points.push(point);
    ctx.fill();
  }
    return points;
}

function makeLine(ctx,bPoint,ePoint) {
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