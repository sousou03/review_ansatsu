// ------------------------------------------------------------
//
//  Sakura
//
// ------------------------------------------------------------

function Sakura($obj) {

  this.$obj = $obj
  this.x = $wrap.width()/2 * Math.random();
  this.y = $wrap.height() * Math.random();
  this.z = $(this).data('z')/10000;
  this.vx = 2;
  this.vy = 1;
  this.vz = 5;
  this.noiseX = 1000 * Math.random();
  this.nvX = 0.01 * Math.random();
  this.noiseY = 1000 * Math.random();
  this.nvY = 0.1 * Math.random();
  this.visible = true;              

}

Sakura.prototype.update = function() {

  this.x += this.vx * noise.perlin2(this.noiseX, 0);
  this.y += this.vy;
  // this.y += this.vy * Math.abs(noise.perlin2(this.noiseY, 0));

  this.noiseX += this.nvX;
  this.noiseY += this.nvY;

}

Sakura.prototype.draw = function() {

  TweenMax.set(this.$obj, {
    x: this.x,y: this.y,
    rotationZ: 360 * noise.perlin2(this.noiseX, 0),
    // rotationY: 120 * noise.perlin2(this.noiseX, 0),
  });

}

Sakura.prototype.isEdge = function() {

  var h = $wrap.height();
      w = $wrap.width();

  if (this.y < -this.$obj.height()*3 || this.y > h || this.x < 0 || this.x > w) {

    this.x = $wrap.width() * Math.random();
    this.y = -this.$obj.height()*3;

  };

}