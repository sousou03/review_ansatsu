//--------------------------------------------------
//
//  cnavas shadow
//
//--------------------------------------------------

(function(){

  var gb = jp.co.ansatsu;

  var $wrap = $('.shadowWrap');

  var canvas,ctx,
      FPS = 1000/30,
      Timer = null,

      img,src = '/assets/img/teaser/pc/c__shadow.png',
      
      defW = 1280,
      defH = 800,

      random = 0,
      noiseX = 0,
      nvX = 0.05,
      easing = 0.08,

      rate,l,t = 0,
      radius = 0,
      range = 100000000,
      count = 0,
      isStatus = 'show',
      isOver = false,
      alpha = 0,
      disappearVal = 0;

  function setup() {

    // canvas要素追加
    var dom = '<canvas id="cv"></canvas>';
    $wrap.append(dom);

    // canvas api取得
    canvas = document.getElementById("cv");
    ctx = canvas.getContext("2d");   

    setCanvasSize();


    noise.seed(Math.random());

  }

  function setImg() {

      img = new Image();
      img.onload = function() {

        onResize();

      }
      img.src = src;

  }

  function setStyle() {

      var $target = $('#cv');

      $target.css({
          position: 'absolute',
          left: '0',
          top: '0',
      });

  }

  function setCanvasSize() {
    canvas.width = $(window).width();
    canvas.height = $(window).height();
  }

  function update() {

    if (isStatus == 'change') {

      if (!isOver) range += (800 - range) * 0.1;
      if (isOver) range += (30 - range) * 0.1;

      if (range > 600) {
        isOver = true;
      };
    };

    if (isStatus == 'show') {

      nvX = 0.01
      range += (10 - range) * 0.15;
      ctx.globalAlpha = alpha;

      alpha += 0.008;
      if (alpha > 1) {
        alpha = 1;
        isStatus = 'change';

      }

    };

    if (isStatus == 'disappear') {

      nvX = 0.05
      range += (disappearVal * disappearVal * disappearVal * disappearVal - range) * 0.1;
      ctx.globalAlpha = alpha;

      disappearVal += 0.15;

      alpha -= 0.014;
      if (alpha < 0) {

        stopLoop(Timer);
        $('canvas').remove();
        $(window).trigger('openingEnd');

      };

    };

  }

  function draw() {

      clear();

      if (!$('body').hasClass('safari') && !$('body').hasClass('ie9') && !$('body').hasClass('ie10') && !$('body').hasClass('ie11')) {

        var step = 1
        // 1pxずつずらして描画
        ctx.save();

          ctx.scale(rate,rate);

        for (var i = 0; i < canvas.height/rate; i+=step) {

            random = noise.perlin2(noiseX, 0) * range;
            ctx.drawImage(img, 0, i, canvas.width, step, l/rate + random, t/rate+i, canvas.width, step);
            // ctx.drawImage(img, 0, 0);

            noiseX += nvX;
        }

        ctx.restore();

      } else {

        clear();

        ctx.save();
        ctx.scale(rate,rate);
        ctx.drawImage(img, l/rate, t/rate);
        ctx.restore();

      }             

  }

  function clear() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

  }

  function loop() {

    Timer = requestAnimationFrame(loop);

    update();
    draw();

  }

  function stopLoop(id) {

    cancelAnimationFrame(id);

  }

  function onResize() {

    setCanvasSize();

    clear();

    rate = canvas.height / defH;

    l = (canvas.width - img.width*rate)/2
    t = 100 * rate;

  }

  function setEvents() {

    $(window).on('resize', onResize);

  }

  function setStatus(status) {

    isStatus = status;

  }

  function main() {

     // ready
     setup();
     setImg();
     setStyle();

     setEvents();


  }

  main();

  // 公開API
  gb.func.shadow = loop;
  gb.func.setStatus = setStatus;

})();