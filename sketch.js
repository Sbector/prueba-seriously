var video;

function setup() {
  canvas = createCanvas(640, 480, WEBGL);
  canvas.id('p5canvas');
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.id('p5video');

  var seriously = new Seriously();

  var src = seriously.source('#p5video');
  var target = seriously.target('#p5canvas');

  //var blur = seriously.effect('blur');
  //blur.amount = '#blur-range';
  //blur.source = src;
  //target.source = blur;

  var vignette = seriously.effect('vignette');
  vignette.source = src;
  target.source = vignetteM


  seriosly.go();

}
