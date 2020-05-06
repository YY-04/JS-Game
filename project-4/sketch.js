
//一部の図形は、l:25のTWO_PIの係数を多くしないと描画しきれない（でも重くなる）

let d, n;
let sliderN, sliderD;

function setup() {
  createCanvas(1000, 500);
  sliderD = createSlider(1, 10, 1, 0.1);
  sliderN = createSlider(1, 10, 5, 0.1);
}

function draw() {
  d = sliderD.value();
  n = sliderN.value();
  let k = n / d;

  background("#545454");
  translate(width / 2, height / 2);

  for (var a = 0; a < TWO_PI * 10; a += 0.01) {
    let r = 200 * cos(k * a);  // r = 大きさ
    let x = r * cos(a);
    let y = r * sin(a);

    stroke("#ffffff");
    strokeWeight(5);
    point(x, y);
  }
}
