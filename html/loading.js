//--------------------------------------------------
//
//  loading animation
//
//--------------------------------------------------

(function(){

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
                },
      Timer = null,
      callback = null;
      isDustAnimeEnd = false,
      isDustAnimeStart = true;

  function setPos() {

    var w = $('#text').width() + 80;
    var h = $(window).height();

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

    var wh = $(window).height(),
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

    // パクパク
    var isSwitch = false;

    pakupakuStop();
    Timer = setInterval(function(){

      if (isSwitch) {

        $koro_o.css({opacity: 0});
        $koro_c.css({opacity: 1});

        isSwitch = false;

      } else {

        $koro_o.css({opacity: 1});
        $koro_c.css({opacity: 0});

        isSwitch = true;

      }

    },FPS);

  }

  function pakupakuStop() {

    clearInterval(Timer);

  }

  function bg() {

    var wh = $(window).height(),
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
      
      var tl = new TimelineMax({
                      delay: 1 + 0.2 * i,
                      repeatDelay: 1,
                      repeat: -1
                    });

      tl
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
          y: - $(window).height(),
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

    W = $(window).width();
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

  // 公開api
  gb.loading = main;

})();