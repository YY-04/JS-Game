


function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background("#f5f5f5");

  let locationX = mouseX - height / 2;
  let locationY = mouseY - width / 2;

  ambientLight(60, 60, 60);  //ぼんやり
  pointLight(255, 255, 255, locationX, locationY, 100);  //マウスポインターからライト

  drawTorus(-50, 0, 0);
}

function drawTorus (x, y, z) {
  translate(x, y, z);
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  //ambientMaterial(100);  //ぼんやりと光る
  specularMaterial(100);  //明るく光る
  torus(100, 50, 64, 64);
  pop();
}
