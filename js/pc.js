//--------------------------------------------------
//
//  loading animation
//
//--------------------------------------------------

// $(window).on('load',function(){
$(function(){

    var gb = jp.co.ansatsu;

    var $koro = $('.koro'),
        $koro_o = $('.koro_o'),
        $koro_c = $('.koro_c'),
        $koro_o_top = $('.koro_o_top'),
        $koro_o_btm = $('.koro_o_btm'),

        $bg = $('#text .bg'),
        $bgBox = $('#text .bgBox'),
        $text = $('.loading #text'),
        $dust = $('.dust'),

        $loading = $('.loading');

    var pos_text = {
                    start: 0,
                    bottom: 0,
                  };

    var Timer = null;

    var isDustAnimeEnd = false,
        isDustAnimeStart = true;

    var callback = null;

    // パクパク
    var isSwitch = false;

    var textTL = [];

    var cnt = 0;

    function setPos() {

      var w = $('#text').width() + 80;
      var h = window.innerHeight;

      $bg.css({
        width: w,
        height: h,
        bottom: $('.koro_o_top').height() + $('.koro_o_btm').height() - 10
      });

      $bgBox.css({
        width: $('.koro_o').width(),
        height: $('.koro_o_top').height() + $('.koro_o_btm').height()
      });

      $bg.adjustW();
      $bgBox.adjustW();

      $text.each(function(index, el) {

        $(this).adjust();
        
      });

      $koro_o.add($koro_c).each(function(index, el) {

        $(this).adjustW();
        
      });

      $('body').css({
        opacity: 1,
      });     

    }

    function readyMotion() {

      var y = $koro.offset().top - $(window).scrollTop(),
          h = $koro_o_top.height() + $koro_o_btm.height();
      TweenMax.to($koro, 0, {
          y: -(y + h * 2),
          onComplete : function(){
          }
      });


      var y = $bgBox.offset().top - $(window).scrollTop(),
          h = $bgBox.height();

      TweenMax.to($bgBox, 0, {
          y: -(y + h * 2),
          onComplete : function(){
          }
      });

      pos_text.start = $text.offset().top;
      pos_text.bottom = pos_text.start + $text.height();

    }


    function koro() {

      var wh = window.innerHeight,
          y = $koro.offset().top,
          h = $koro_o_top.height() + $koro_o_btm.height();

      var tl = new TimelineMax();

      tl
        .to($koro, 3.5, {
            y: '+=' + (wh + h*2),
            delay: 1.0,
            ease: Power0.easeNone,
            onStart : function(){

              setTimeout(function(){

                isDustAnimeEnd = true;

              }, 2500);

            },
            onComplete: function() {

              pakupakuStop();
              bgOpen();
              $loading.find('*').hide();

              for (var i = 0; i < $loading.find('.text').length; i++) {
                textTL[i].pause();
              }

            }
        });

      pakupakuStart(1000/10);

      setTimeout(function(){

        dust($dust.eq(0),true);
        dust($dust.eq(1),true);
        dust($dust.eq(2),true);
        dust($dust.eq(3),false);
        dust($dust.eq(4),false);
        dust($dust.eq(5),false);

      },2300);

    }

    function pakupakuStart(FPS) {

      pakupakuStop();
      loop();

    }

    function pakupakuStop() {

      cancelAnimationFrame(Timer);

    }

    function loop() {

      if (cnt%6 == 0) {

      if (isSwitch) {

        $koro_o.css({opacity: 0});
        $koro_c.css({opacity: 1});

        isSwitch = false;

      } else {

        $koro_o.css({opacity: 1});
        $koro_c.css({opacity: 0});

        isSwitch = true;

      }

      }

      cnt++

      Timer = requestAnimationFrame(loop)

    }

    function bg() {

      var wh = window.innerHeight,
          h = $bgBox.height();

      var tl = new TimelineMax();

      tl
        .to($bgBox, 3.5, {
            y: '+=' + (wh + h*2),
            delay: 1.0,
            ease: Power0.easeNone,
        })

    }

    function text() {

      for (var i = 0; i < $loading.find('.text').length; i++) {
        
        textTL.push(new TimelineMax({
                        delay: 1 + 0.2 * i,
                        repeatDelay: 1,
                        repeat: -1
                      }));

        textTL[i]
          .to($loading.find('.text').eq(i),0.3, {
            scaleY:1.4,
            scaleX : 0.7,
            ease: Power2.easeOut
          })
         .to($loading.find('.text').eq(i),0.25, {
            scaleY:0.7,
            scaleX : 1.3,
            ease: Power2.easeOut
          })
         .to($loading.find('.text').eq(i),0.2, {
            scaleY:1.3,
            scaleX : 0.8,
            ease: Power2.easeOut
          })
         .to($loading.find('.text').eq(i),0.2, {
            scaleY:0.8,
            scaleX : 1.2,
            ease: Power2.easeOut
          })
         .to($loading.find('.text').eq(i),0.2, {
            scaleY:1.1,
            scaleX : 0.9,
            ease: Power2.easeOut
          })
         .to($loading.find('.text').eq(i),0.13, {
            scaleY:0.9,
            scaleX : 1.1,
            ease: Power2.easeOut
          })
         .to($loading.find('.text').eq(i),0.13, {
            scaleY: 1,
            scaleX : 1,
            ease: Power2.easeOut
          })


      };

    }

    function dust($obj,sign,end) {

      var h = $bgBox.height(),
          w = $bgBox.width();

      var tl = new TimelineMax();

      if (isDustAnimeStart) {
        TweenMax.to($obj, 0, {
              x: w/4*1.5 + (1 * Math.random()),
              y: h/4*2.8,
              rotationZ: 0,
              opacity: 1,
          })
      } else {
        TweenMax.to($obj, 0, {
              x: w/4*1.5 + (1 * Math.random()),
              y: h/4*3,
              rotationZ: 0,
              opacity: 1,
          })
      }

      if (sign) {

        TweenMax.to($obj, 0.9 + 0.3 * Math.random(), {
              x: '-=' + (20 + Math.random() * 80),
              y: '+=' + (10 + Math.random() * 30),
              rotationZ: 360 + 720 * Math.random(),
              opacity: 0,
              ease: Power1.easeIn,
              onComplete: function() {

                if (!isDustAnimeEnd) dust($obj,sign);
                isDustAnimeStart = false;

              }
          })

      } else {

        TweenMax.to($obj, 0.9 + 0.3 * Math.random(), {
              x: '+=' + (20 + Math.random() * 80),
              y: '+=' + (10 + Math.random() * 30),
              rotationZ: 360 + 720 * Math.random(),
              opacity: 0,
              ease: Power1.easeIn,
              onComplete: function() {

                if (!isDustAnimeEnd) dust($obj,sign);
                isDustAnimeStart = false;

              }
          })

        }

    }

    function bgOpen() {

      TweenMax.to($loading, 0.8, {
            y: - window.innerHeight,
            // ease: Power4.easeInOut,
            ease: Expo.easeInOut,
            onComplete: function() {

              $loading.hide();
              // setTimeout(function(){
                $(window).trigger('loadingEnd');  
              // },500);

              callback();

            }
        })

    }

    function update() {

      W = window.innerWidth;
      if (W < minW) W = minW;
      rate = W / defW;

    }

    function onResize() {

      $bg.adjustW();
      $bgBox.adjustW();

      $text.each(function(index, el) {

        $(this).adjust();
        
      });

      $koro_o.add($koro_c).each(function(index, el) {

        $(this).adjustW();
        
      });

    }

    function setEvents() {

      $(window).on('resize orientationchange', onResize);

    }

    function main(cb) {

      callback = cb || function(){};

      setEvents();
      setPos();
      readyMotion();
      koro();
      bg();
      text();

    }

    // main();

    // 公開api
    gb.func.loading = main;


});



//--------------------------------------------------
//
//  responsive_W
//
//--------------------------------------------------
(function(){

  /**
   * description:<br>
   * ウィンドウ幅によって、要素の位置・サイズを調整
   * <br>
   * event：セット jquery_ready
   *
   * @memberof common
   */


  var gb = jp.co.ansatsu;

  var responsive = function($obj,list,win,notObj){

    var $target = $obj.not(notObj);

    var len = list.length;

    var W = window.innerWidth,
        defW = win.max,
        minW = win.min,

        rate;

        rate = W / defW;

    function getDef() {

      $target.each(function(index) {

        for (var i = 0; i < len; i++) {

          var val = parseInt($(this).css(list[i]));
          $(this).data(list[i],val);

        };

      });

    }

    function setVal() {

      $target.each(function(index) {

        for (var i = 0; i < len; i++) {

          var str = list[i];

          $(this).css(list[i],$(this).data(list[i]) * rate);

        };

      });

    }

    function update() {

      W = window.innerWidth;
      // if (W > defW) W = defW;
      if (W < minW) W = minW;
      rate = W / defW;

    }

    function setEvents() {

      $(window).on('resize orientationchange', function(event) {

        update();
        setVal();

      });

    }

    function main() {

      update();
      setVal();

    }

    main();

  }


  // 公開api
  gb.func.responsiveW = responsive;

}());

//--------------------------------------------------
//
//  responsive_H
//
//--------------------------------------------------
(function(){

  /**
   * description:<br>
   * ウィンドウ幅によって、要素の位置・サイズを調整
   * <br>
   * event：セット jquery_ready
   *
   * @memberof common
   */

  var gb = jp.co.ansatsu;
   
  var responsive = function($obj,list,win,notObj){

    var $target = $obj.not(notObj);

    var len = list.length;

    var H = window.innerHeight,
        defH = win.max,
        minH = win.min,

        rate;

        rate = H / defH;

    function getDef() {

      $target.each(function(index) {

        for (var i = 0; i < len; i++) {

          var val = parseInt($(this).css(list[i]));
          $(this).data(list[i],val);

        };

      });

    }

    function setVal() {

      $target.each(function(index) {

        for (var i = 0; i < len; i++) {

          var str = list[i];

          $(this).css(list[i],$(this).data(list[i]) * rate);

        };

      });

    }

    function update() {

      H = window.innerHeight;
      // if (W > defW) W = defW;
      if (H < minH) H = minH;
      rate = H / defH;

    }

    function setEvents() {

      $(window).on('resize orientationchange', function(event) {

        update();
        setVal();

      });

    }

    function main() {

      update();
      setVal();

    }

    main();

  }


  // // 公開api
  // gb.func.getDef = getDef
  gb.func.responsiveH = responsive;

}());

//--------------------------------------------------
//
//  responsive_getdef
//
//--------------------------------------------------
(function(){

  /**
   * description:<br>
   * ウィンドウ幅によって、要素の位置・サイズを調整
   * <br>
   * event：セット jquery_ready
   *
   * @memberof common
   */

  var gb = jp.co.ansatsu;
   
  var def = function($obj,list,win,notObj){

    var $target = $obj.not(notObj);

    var len = list.length;

    var H = window.innerHeight,
        defH = win.max,
        minH = win.min,

        rate;

        rate = H / defH;

    function getDef() {

      $target.each(function(index) {

        for (var i = 0; i < len; i++) {

          var val = parseInt($(this).css(list[i]));
          $(this).data(list[i],val);

        };

      });

    }

    function main() {

      getDef();

    }

    main();

  }

  // // 公開api
  gb.func.getDef = def;

}());

//--------------------------------------------------
//
//  位置・サイズ調整
//
//--------------------------------------------------
$(function(){

  var gb = jp.co.ansatsu;

  var w = 1280,
      h = 800;

  function getDef() {

    // 画像に対して
    gb.func.getDef($('.body__bg'),['width','height'],w);
    gb.func.getDef($('img, .c__koroWrap'),['width','height','left','top'],w,'.loading img');
    gb.func.getDef($('.fzLiquid'),['font-size'],w);
    gb.func.getDef($('.f__duration'),['padding','background-size'],w);
    gb.func.getDef($('.f__shareWrap, .f__durationWrap'),['left','bottom'],w);
    gb.func.getDef($('.f__durationWrap'),['height','bottom'],w);
    if ($('body').hasClass('ie')) {
      var wi = $('.f__duration').innerWidth();
      $('.f__durationInner').width(wi+30);
    }
    gb.func.getDef($('.f__duration, .f__durationInner ,.f__shareWrap'),['width'],w);
    gb.func.getDef($('.c__text01Wrap, .c__text02Wrap'),['left','top'],w);
    gb.func.getDef($('.c__curling'),['right','bottom'],w);
    gb.func.getDef($('.c__hand'),['margin-left','margin-top'],w);
    gb.func.getDef($('#footer .f__shareWrap h3'),['margin-bottom'],w);
    gb.func.getDef($('#footer .f__shareWrap .item img'),['margin-right'],w);
    // loading

  }

  function adjustToW() {

    var w = {};
        w.max = 1280;
        w.min = 1000;

    // 画像に対して
    gb.func.responsiveW($('.body__bg'),['width','height'],w);
    gb.func.responsiveW($('img, .c__koroWrap'),['width','height','left','top'],w,'.loading img');
    gb.func.responsiveW($('.fzLiquid'),['font-size'],w);
    gb.func.responsiveW($('.f__duration'),['padding','background-size'],w);
    gb.func.responsiveW($('.f__shareWrap, .f__durationWrap'),['left','bottom'],w);
    gb.func.responsiveW($('.f__durationWrap'),['height','bottom'],w);
    gb.func.responsiveW($('.f__duration, .f__durationInner ,.f__shareWrap'),['width'],w);
    gb.func.responsiveW($('.c__text01Wrap, .c__text02Wrap'),['left','top'],w);
    gb.func.responsiveW($('.c__curling'),['right','bottom'],w);
    gb.func.responsiveW($('.c__hand'),['margin-left','margin-top'],w);
    gb.func.responsiveW($('#footer .f__shareWrap h3'),['margin-bottom'],w);
    gb.func.responsiveW($('#footer .f__shareWrap .item img'),['margin-right'],w);


  }

  function adjustToH() {

    var w = {};
        w.max = 800;
        w.min = 625;

    // 画像に対して
    gb.func.responsiveH($('.body__bg'),['width','height'],w);
    gb.func.responsiveH($('img, .c__koroWrap'),['width','height','left','top'],w,'.loading img');
    gb.func.responsiveH($('.fzLiquid'),['font-size'],w);
    gb.func.responsiveH($('.f__duration'),['padding','background-size'],w);
    gb.func.responsiveH($('.f__shareWrap, .f__durationWrap'),['left','bottom'],w);
    gb.func.responsiveH($('.f__durationWrap'),['height','bottom'],w);
    gb.func.responsiveH($('.f__duration, .f__durationInner ,.f__shareWrap'),['width'],w);
    gb.func.responsiveH($('.c__text01Wrap, .c__text02Wrap'),['left','top'],w);
    gb.func.responsiveH($('.c__curling'),['right','bottom'],w);
    gb.func.responsiveH($('.c__hand'),['margin-left','margin-top'],w);
    gb.func.responsiveH($('#footer .f__shareWrap h3'),['margin-bottom'],w);
    gb.func.responsiveH($('#footer .f__shareWrap .item img'),['margin-right'],w);

  }

  function onResize() {

    var W = window.innerWidth;
        H = window.innerHeight;

    var ratioW = H / W;
    var ratio = h / w;

    if (ratioW > ratio) {

        // $('body').removeClass('ohx');
        adjustToH();

    } else if ( ratioW <= ratio) {

        
        adjustToW();

    }

    gb.func.dark();

  }

  function setEvents() {

    $(window).on('resize', onResize);

  }


  function main() {

    setEvents();
    getDef();
    onResize(); 

  }

  // main();

  // 公開api
  gb.func.adjust = main;

})

//--------------------------------------------------
//
//  main_motion
//
//--------------------------------------------------

$(function(){

    var gb = jp.co.ansatsu;

    var canvas,
        img = null,
        imgSrc = '/assets/img/pc/c__bg_dark.png';

    var h = 0, w = 0;

    var rate = 0;

    var step = {
      x: 200,
      y: 200
    };

    function isCanvas () {
      return Modernizr.canvas;
    }
    
    function setup() {

      // canvas機能を搭載しているかどうか
      if (!isCanvas()) {return;}

      // canvas要素追加
      var dom = '<canvas id="cv">';
      $('body').append(dom);

      // canvas api取得
      canvas = document.getElementById("cv");
      ctx = canvas.getContext("2d");   

      ctx.lineWidth = 10;

      setCanvasSize();

    }

    function setImg() {

      img = new Image();
      img.onload = function() {

        h = img.height;
        w = img.width;

        onResize();

        loop();
      }
      img.src = imgSrc;

    }

    function setCanvasSize() {
      canvas.width = $('.body__bg').width();
      canvas.height = $('.body__bg').height();
    }

    function update() {


        
    }

    function draw() {

      clear();

      ctx.save();
      ctx.scale(rate,rate);

      ctx.save();
      ctx.beginPath();
      // var w = 400 / rate;
      // var h = 400 / rate;
      // var l = (canvas.width - w)/rate;
      // var t = (canvas.height - h)/rate;

      var w = canvas.width * 2 * rate / rate;
      var h = canvas.height * 2 * rate / rate;
      var centerX = canvas.width * 2 / 2 * rate / rate;
      var centerY = canvas.height * 2 / 2 * rate / rate;

      var l = (canvas.width)/rate;
      var t = (canvas.height)/rate;
      // var l = 10/rate;
      // var t = 10/rate;

      // ctx.translate(0, 0);
      ctx.translate(l, t);
      ctx.rotate( -51 * Math.PI / 180 );
      ctx.fillStyle = 'rgb(255, 255, 255)';
      // ctx.fillRect(0, 0, w, h); //塗あり
      // ctx.fillRect( -step.x*rate/rate, -step.y*rate/rate, w, h);
      ctx.rect( -step.x*rate/rate, -step.y*rate/rate, w, h);
      // ctx.stroke();
      ctx.restore();

      ctx.clip();
      ctx.drawImage(img, 0, 0);
      ctx.restore();

    }

    function loop() {

      requestAnimationFrame(loop);

      update();
      draw();

    }

    function clear() {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

    }

    function motion() {

      var $curling = $('.c__curling'),
          $hand = $('.c__hand');

      // マスク
      TweenMax.to(step, 1.2, {
          x: 770,
          y: 770,
          ease: Power4.easeInOut,
          delay: 1.1
        });

      // 所定の位置に移動
      TweenMax.set($curling, {
          right: -539 * rate,
          bottom: -645 * rate,
        });

      // めくり
      TweenMax.to($curling, 1.2, {
          right: -1 * rate,
          bottom: -430 * rate,
          ease: Power4.easeInOut,
          delay: 1.1,
          onComplete: function() {

            // gb.func.getDef($('.c__curling'),['right','bottom'],w);

          }
        });

      // 腕

      var tl = new TimelineMax();

      // 所定の位置に移動
      TweenMax.set($hand, {
          'margin-top': 201 * rate,
          'margin-left': 439 * rate,
        });


      tl.to($hand, 0.5, {
          rotationZ: 0,
          opacity: 1,
          delay: 0.5,
          ease: Power4.easeInOut,
          onComplete: function() {
          },
        })
        .to($hand, 1.2, {
          'margin-top': 50 * rate,
          'margin-left': -154 * rate,
          ease: Power4.easeInOut,
          delay: 0.1,
          onComplete: function() {

            // gb.func.getDef($('.c__hand'),['margin-left','margin-top'],w);
            if ($('body').hasClass('ie')) {
                $(window).trigger('resize');
            } 

          }
        });


    }

    function onResize(e) {

      setCanvasSize();

      var W = window.innerWidth;
          H = window.innerHeight;

      if (W < 1000) W = 1000;
      if (H < 625) H = 625;

      var ratioW = H / W;
      var ratio = h / w;

      if (ratioW > ratio) {

          rate = H / h

      } else if ( ratioW <= ratio) {

          rate = W / w;

      }
     
    };

    function setEvents() {

      $(window).on('resize orientationchange', onResize);

    }

    function main() {

       // setEvents();
       // ready
       setup();
       // onResize();

    }

    main();

    // 公開api
    gb.func.dark = setImg;
    gb.func.darkMotion = motion;

});


//--------------------------------------------------
//
//  sakura
//
//--------------------------------------------------    

$(function(){

  var $sakura = $('.sakura');

  var vec = [],
      len = $sakura.length;

  var centerX = window.innerWidth/2 * Math.random();

  var baseX = window.innerWidth/2,
      baseY = $('.body__bg').height()/2;

  function ready() {

    $sakura.each(function(index, el) {

        centerX = window.innerWidth/2 * Math.random();
        TweenMax.set($(this), {
            x:centerX,
            y: 50 + Math.random() * 1000
          });
        var obj = {
                x: centerX, 
                y: 50 + Math.random() * 1000,
                z: $(this).data('z')/10000,
                visible: true,
                noiseX: 1000 * Math.random(),
                nvX: 0.1 * Math.random(),
                vy: 75 + 100 * Math.random(),
                noiseY: 1000 * Math.random(),
                nvY: 0.1 * Math.random(),
              }
        vec.push(obj);

    });

    noise.seed(Math.random());

  }

  function sakura($obj,index) {

    var $target = $obj;

    var sign = (Math.random()<0.5)?1:-1,
        dur = 1.5;

    var x = 100 * noise.perlin2(vec[index].noiseX, 0);
    vec[index].x += x;
    vec[index].y += vec[index].vy + 50 * Math.abs(noise.perlin2(vec[index].noiseY, 0));

    vec[index].noiseX += vec[index].nvX;
    vec[index].noiseY += vec[index].nvY;

    TweenMax.to($target, dur, {
        x: '+=' + x,
        y: vec[index].y,
        rotationZ: 360 * noise.perlin2(vec[index].noiseX, 0),
        rotationY: 135 * noise.perlin2(vec[index].noiseY, 0),
        // ease: Power2.easeInOut,
        ease: Power0.easeNone,
        onComplete: function() {

          isEdge($target,index);
          sakura($target,index); 

        }
      });


    if (vec[index].visible) {

      if (Math.random() < 0.3) {

        TweenMax.to($target, dur, {
            opacity: 0,
            ease: Power2.easeInOut,
            onComplete: function() {

              vec[index].visible = false;

            }
          });

      };

    } else {

      if (Math.random() < 0.7) {

        TweenMax.to($target, dur, {
            opacity: 1,
            ease: Power2.easeInOut,
            onComplete: function() {

              vec[index].visible = true;

            }
          });

      }

    }

  }

  function isEdge($obj,index) {

    var x = vec[index].x,
        y = vec[index].y,
        h = $('.body__bg').height();
        w = window.innerWidth;

    if (y < 0 || y > h || x < 0 || x > w) {

      centerX = window.innerWidth/2 * Math.random();
      vec[index].y = -$obj.height();
      vec[index].x = centerX;
      TweenMax.to($obj, 0, {x:centerX, y: vec[index].y});

    };


  }

  function parallaxForPC(e) {

      var dx = e.pageX - baseX;
      var dy = e.pageY - baseY;

      $sakura.each(function(index, el) {

        var curL = parseInt($(this).offset().left),
            curT = parseInt($(this).offset().top);

        $(this).css({
            left: curL + (dx*vec[index].z) +"px",
            top:  curT + (dy*vec[index].z) +"px" 
          });                        

      });

  }


  function onClick() {

    
  }

  function onLoad() {


  }


  function setEvents() {

    $(window).on('load', onLoad);
    // $(document.body).on('mousemove', parallaxForPC);
    
  }

  function main() {

    setEvents();
    ready();

    $sakura.each(function(index, el) {
      
      sakura($(this),index);

    });

  }

  main();

})

//--------------------------------------------------
//
//  parallax
//
//--------------------------------------------------    
$(function() {

  var gb = jp.co.ansatsu;

  var $target = null;

  var baseX = 0;
  var baseY = 0;
  var layers = null;

  var easing = 0.15;
  var gx = 0, gy = 0;

  var mx = 0,my = 0;

  function ready() {

    $target = $('.c__koroWrap');

    baseX = window.innerWidth/2;
    baseY = window.innerHeight/2;
    mx = baseX;
    my = baseY;
    layers = $target.map(function(_, layer) {
        return {
            $: $(layer),
            factor:$(layer).data("z")/10000,
            baseX: $(layer).position().left,
            baseY: $(layer).position().top,
            x: $(layer).position().left,
            y: $(layer).position().top
        };
    })

  }

  function parallaxForPC(e) {

      mx = e.pageX || baseX;
      my = e.pageY || baseY;

      var dx = mx - baseX;
      var dy = my - baseY;

      $.each(layers, function(_, layer) {

        gx = layer.baseX + (dx*layer.factor)
        gy = layer.baseY + (dy*layer.factor)

      });

  }

  function loop() {

    $.each(layers, function(_, layer) {

      layer.x += (gx - layer.x) * easing;
      layer.y += (gy - layer.y) * easing;

      layer.$.css({
          left: layer.x + "px",
          top:  layer.y + "px" });

    });


  }

  function onClick() {

    
  }

  function onLoad() {


  }


  function setEvents() {

    $(window).on('load', onLoad);
    $(document.body).on('mousemove', parallaxForPC);
    setInterval(loop,1000/30);
    
  }

  function main() {

    setEvents();
    ready();
    $(document.body).trigger('mousemove');

  }

  // main();

  // 公開api
  gb.func.parallax = main;

});


//--------------------------------------------------
//
//  opening
//
//--------------------------------------------------
$(function(){

  var gb = jp.co.ansatsu;

  // var $target = $('.c__tit, .c__text01, .c__text02'),
  var $target = null,
      $box = null;

  var l,r,t,b,w,h,W,H;

  var dur = 0,delay = 0;

  var id = 0;

  var dis = 0;

  function getStyle() {

    W = window.innerWidth;
    H = window.innerHeight;

    if ($target.hasClass('c__tit')) w = $target.innerWidth() + $('.balloon').innerWidth();
    else w = $target.innerWidth();

    if ($target.hasClass('f__duration')) {
      $('.f__durationInner').width(w+30);
      $('.f__durationWrap').height($('.f__duration').height());
      $('.f__duration').css({position: 'absolute'});
    }
    if ($target.hasClass('f__shareWrap')) {
      $('.f__share').width(w+30);
    }


    h = $target.innerHeight();

    l = $target.offset().left;
    t = $target.offset().top;

    r = W - (l + w);
    b = H - (t + h);

  }

  function ready() {

    var tl = new TimelineMax();

    tl.set($target, {
        'overflow': 'hidden',
        width: 0,
        // right: r - 50,
        left: l + dis,
      })

  }

  function motion() {

    var tl = new TimelineMax();

    tl.to($target, dur, {
        left: l,
        ease: Expo.easeOut,
        delay: 6.15 + delay,
        onComplete: function() {
        }
      })
      .to($target, dur, {
        width: w,
        ease: Expo.easeOut,
        onComplete: function() {

          $(this.target).css({'overflow': 'visible'});

        }
      },'-=1.1');

  }

  function onClick() {

    
  }

  function onLoad() {


  }

  function onResize() {
    
    $('.f__share').width($('.f__shareWrap').width()+30);

  }


  function setEvents() {

    $(window).on('load', onLoad);
    $(window).on('resize', onResize);
    
  }

  function main($obj,time,del,cnt,lDis) {

    $target = $obj;
    dur = time;
    delay = del;
    id = cnt;
    dis = lDis || 200;

    setEvents();
    getStyle();
    ready();
    motion();

  }

  // main();

  // 公開api
  gb.func.rectMotion = main;

})

//--------------------------------------------------
//
//  page show
//
//--------------------------------------------------    

$(function(){

  var gb = jp.co.ansatsu;

  function show() {

    gb.func.adjust();
    $('.loading').css({opacity: 1});
    $('body').css({opacity: 1});
    gb.func.loading();
    // if ($('body').hasClass('ie')) {

    //   setTimeout(function(){
    //     gb.func.darkMotion();
    //   },1000);

    // } else {

      setTimeout(function(){
        gb.func.darkMotion();
      },4200);

      gb.func.rectMotion($('.c__tit'),1.3,0.1,0);
      gb.func.rectMotion($('.c__text01Wrap'),1.3,0,1,75);
      gb.func.rectMotion($('.c__text02Wrap'),1.3,0.1,2);
      gb.func.rectMotion($('.f__duration'),1.3,0.2,3);
      gb.func.rectMotion($('.f__shareWrap'),1.3,0.2,4);


    // }

  }

  function main() {

    $(window).on('load', show);

  }

  main();

})