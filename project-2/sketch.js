
//なぜかいくつかのボールは地面に当たるとバウンドせずに埋まってしまうという、バグがあります。

//変数を配列化
var vecLocation = [];
var vecVelocity = [];
var vecAcceleration = [];
//var topSpeed;
var color = [];
var radius = [];

function setup() {
  createCanvas(1000, 500);
  colorMode(HSL, 360, 100, 100, 100);
  noStroke();

  for (var i = 0; i < 50; i++) {  //loop 50回
    vecLocation[i] = createVector(width / 2, height / 2);  //初期位置
    vecVelocity[i] = createVector(random(1, 8), random(-8, -1));  //速度(x, y)
    vecAcceleration[i] = createVector(0, 9.8 / 60);  //加速度(x, y), 9.8 / 60 = 重力加速度 / fps(60)
    color[i] = color(random(360), 100, 50, random(50, 100));  //ランダムな色
    radius[i] = random(10, 50);  //ランダムな大きさ
  }
}

function draw() {
  background("#f5f5f5");

  for (var i = 0; i < 50; i++) {

    addVector(i);  //look l:36

    if (vecLocation[i].x + 20 > width || vecLocation[i].x - 20 < 1) {  //反転(x)
      vecVelocity[i].x = vecVelocity[i].x * -1;
    }

    if (vecLocation[i].y + 20 > height || vecLocation[i].y - 20 < 1) {  //反転(y)
      vecVelocity[i].y = vecVelocity[i].y * -1;
    }
  }
}

function addVector(i) {  //各種データ更新&描画
  vecVelocity[i].add(vecAcceleration[i]);
  vecLocation[i].add(vecVelocity[i]);

  fill(color[i]);
  ellipse(vecLocation[i].x, vecLocation[i].y, radius[i]);
}
