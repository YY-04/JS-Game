


function setup() {
  createCanvas(1000, 500);
  colorMode(HSL, 360, 100, 100, 100);  //HSL = 色相(Hue: 0~360) 彩度(Saturation: 0~100%) 明度(Lightness: 0~ 100%) 透過度(0~100%)
  background("#ffffff");
}

function draw() {
  noStroke();
  fill(random(0, 300), 100, 50, 30);
  circle(random(width), random(height), random(40, 80));
}
