
//--------------------------------------------------
//
//  parallax
//
//--------------------------------------------------    
(function() {

  var gb = jp.co.ansatsu;

  var $wrap = $('.c__wrap'),
      $target = null;

  var baseX = 0,
      baseY = 0,
      layers = null,
      easing = 0.3;

  function ready() {

    $target = $('.c__koro, .sakura');

    baseX = $wrap.width() / 2;
    baseY = $wrap.height() / 2;
    layers = $target.map(function(_, layer) {
      return {
          $: $(layer),
          factor:$(layer).data("z")/10000,
          baseX: $(layer).position().left,
          baseY: $(layer).position().top,
          x: $(layer).position().left,
          y: $(layer).position().top,
          gx: $(layer).position().left,
          gy: $(layer).position().top
      };
    })

  }

  function parallaxForPC(e) {

    var dx = e.pageX - baseX;
    var dy = e.pageY - baseY;

    $.each(layers, function(_, layer) {
        layer.$.css({
            left: layer.baseX + (dx*layer.factor) +"px",
            top:  layer.baseY + (dy*layer.factor) +"px" });
    });

  }

  function parallaxForSP(e) {

    $.each(layers, function(i, layer) {

        layer.gx = layer.baseX + e.gamma*10*layer.factor;
        layer.gy = layer.baseY + e.beta*10*layer.factor;

    });

  }

  function loop() {

    $.each(layers, function(_, layer) {

      layer.x += (layer.gx - layer.x) * easing;
      layer.y += (layer.gy - layer.y) * easing;

      layer.$.css({
          left: layer.x + "px",
          top: layer.y + "px",
        });

    });

    requestAnimationFrame(loop);

  }

  function setEvents() {

    $(window).on('load', onLoad);

    if (!gb.util.deviceSP) {
      $(document.body).on('mousemove', parallaxForPC);
    } else {
      window.addEventListener('deviceorientation', parallaxForSP);
      loop();
    }
    
  }

  function main() {

    ready();
    setEvents();

  }

  // 公開api
  gb.func.parallax = main;

})();