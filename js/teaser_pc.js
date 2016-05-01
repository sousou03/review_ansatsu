//--------------------------------------------------
//
//  位置・サイズ調整
//
//--------------------------------------------------
$(window).on('load',function(){

  var gb = jp.co.ansatsu;

  var $header = $('#header'),
      $contents = $('#contents'),
      $footer = $('#footer');

  var defH = 600,
      minH = 400;

  var rate = 0;

  var $target = $('.flex'),
      $target_t = $('.flex_t'),
      $target_l = $('.flex_l');
      $target_lt = $('.flex_lt');

  function getDef() {

    $target.each(function(i) {

      var w = parseInt($(this).css('width'));
      var h = parseInt($(this).css('height'));
      var right = parseInt($(this).css('right'));
      var bottom = parseInt($(this).css('bottom'));

      $(this)
        .data('right',right)
        .data('bottom',bottom)
        .data('w',w)
        .data('h',h);

    });

    $target_t.each(function(i) {

      var w = parseInt($(this).css('width'));
      var h = parseInt($(this).css('height'));
      var right = parseInt($(this).css('right'));
      var top = parseInt($(this).css('top'));

      $(this)
        .data('right',right)
        .data('top',top)
        .data('w',w)
        .data('h',h);

    });

    $target_l.each(function(i) {

      var w = parseInt($(this).css('width'));
      var h = parseInt($(this).css('height'));
      var left = parseInt($(this).css('left'));
      var bottom = parseInt($(this).css('bottom'));

      $(this)
        .data('left',left)
        .data('bottom',bottom)
        .data('w',w)
        .data('h',h);

    });

    $target_lt.each(function(i) {

      var w = parseInt($(this).css('width'));
      var h = parseInt($(this).css('height'));
      var left = parseInt($(this).css('left'));
      var top = parseInt($(this).css('top'));

      $(this)
        .data('left',left)
        .data('top',top)
        .data('w',w)
        .data('h',h);

    });

    $('.c__inner')
      .data('w',parseInt($('.c__inner').css('width')))
      .data('ml',parseInt($('.c__inner').css('margin-left')));

    $('.drawWrap .shadow')
      .data('w',parseInt($('.drawWrap .shadow').css('width')))
      .data('h',parseInt($('.drawWrap .shadow').css('height')))
      .data('ml',parseInt($('.drawWrap .shadow').css('margin-left')));

    $('.arm img, .mocmoc img, .drawWrap .text img').each(function(index, el) {

      $(this)
        .data('w',parseInt($(this).css('width')))
        .data('h',parseInt($(this).css('height')))
      
    });
      

  }

  function setVal() {

    $target.each(function(i) {

      $(this).css({
        'width': $(this).data('w') * rate,
        'height': $(this).data('h') * rate,
        'bottom': $(this).data('bottom') * rate,
        'right': $(this).data('right') * rate,
      });

    });

    $target_t.each(function(i) {

      $(this).css({
        'width': $(this).data('w') * rate,
        'height': $(this).data('h') * rate,
        'top': $(this).data('top') * rate,
        'right': $(this).data('right') * rate,
      });

    });

    $target_l.each(function(i) {

      $(this).css({
        'width': $(this).data('w') * rate,
        'height': $(this).data('h') * rate,
        'bottom': $(this).data('bottom') * rate,
        'left': $(this).data('left') * rate,
      });

    });

    $target_lt.each(function(i) {

      $(this).css({
        'width': $(this).data('w') * rate,
        'height': $(this).data('h') * rate,
        'top': $(this).data('top') * rate,
        'left': $(this).data('left') * rate,
      });

    });


    $('.c__inner')
      .css({
        'width':$('.c__inner').data('w') * rate,
        'margin-left':$('.c__inner').data('ml') * rate,
      });

    $('.drawWrap .shadow')
      .css({
        'width':$('.drawWrap .shadow').data('w') * rate,
        'height':$('.drawWrap .shadow').data('h') * rate,
        'margin-left':$('.drawWrap .shadow').data('ml') * rate,
      });

    $('.arm img, .mocmoc img, .drawWrap .text img').each(function(index, el) {

      $(this).css({
        'width':$(this).data('w') * rate,
        'height':$(this).data('h') * rate,
      });

    });

  }

  function onResize() {

    var hh = $header.height(),
        fh = $('.f__share').innerHeight(),
        h = $(window).height();

    var H = h - hh - fh;

    if (H < minH) H = minH;
    rate = H / defH;

    // contentsの高さ
    $contents.height(H-16);
    $footer.height(fh);

    // 中のtext横位置
    $('.c__bg').css({'margin-left': -1 * $('.c__bg').width()/2});

    // 各imgの位置
    setVal();

  }

  function setEvents() {

    $(window).on('resize', onResize);

  }

  function getRate() {

    return rate;

  }

  function main() {

    getDef();
    setEvents();
    onResize();
    $('.loading').css({opacity: 1});

  }

  main();

  // 公開API
  gb.val.rate = getRate;

})


//--------------------------------------------------
//
//  loading animation
//
//--------------------------------------------------

$(window).on('load',function(){


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

      var y = $koro.offset().top,
          h = $koro_o_top.height() + $koro_o_btm.height();

      TweenMax.to($koro, 0, {
          y: -(y + h),
          onComplete : function(){
          }
      });


      var y = $bgBox.offset().top,
          h = $bgBox.height();

      TweenMax.to($bgBox, 0, {
          y: -(y + h),
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
            y: '+=' + (wh + h),
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

      },1500);

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
            y: '+=' + (wh + h),
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



      // tl.staggerTo($loading.find('.text'),0.4, {
      //   scale:1.4,
      //   repeat : -1,
      //   repeatDelay : 4,
      //   yoyo: true,
      //   ease: Elastic.easeOut.config(1.5, 1)
      // }, 0.15)

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

    function main() {

      setEvents();
      setPos();
      readyMotion();
      koro();
      bg();
      text();

    }

    main();

});

//--------------------------------------------------
//
//  draw演出
//
//--------------------------------------------------
$(window).on('load',function(){
// $(function(){

var gb = jp.co.ansatsu;

var $wrap = $('.drawWrap'),
  $text01 = $wrap.find('.text01'),
  $text02 = $wrap.find('.text02'),
  $text03 = $wrap.find('.text03'),
  $moc = $wrap.find('.mocmoc'),
  $arm = $wrap.find('.arm'),
  $bg = $wrap.find('.bg__line'),
  $blackboardText = $('.c__bg'),
  $contentsWrap = $('.contentsWrap'),

  $koroText = $('.koro__textWrap'),
  $koroImg = $('.koro__imgWrap'),
  $koroText01 = $('.koro__text01Wrap'),
  $koroText02 = $('.koro__text02Wrap');

  $koroTalk = $('.c__koroTalk');

var isText01 = true,
  isText02 = true,
  isText03 = true,
  isMoc = true,
  isArm = true,
  isBg = true;

var isResize = true;

var koro = {};

var Timer = null;

function ready() {

$text01.find('img').css({opacity: 0});
$text02.find('img').css({opacity: 0});
$text03.find('img').css({opacity: 0});
$moc.find('img').css({opacity: 0});
$arm.find('img').css({opacity: 0});
$bg.css({opacity: 0});
$blackboardText.css({opacity: 0});

koro = {
  text : {
    w : $koroText.width(),
  },
  text01: {
    h : $koroText01.height()
  },
  text02: {
    h : $koroText02.height()
  }
}

TweenMax.to($koroText, 0, {
      x: koro.text.w/2,
      width: 0,
  })
TweenMax.to($koroText01, 0, {
      height: 0,
  })
TweenMax.to($koroText02, 0, {
      height: 0,
  })
if (!$('body').hasClass('ie9')) {
TweenMax.to($koroImg, 0, {
      scale: 0,
  })
TweenMax.to($koroTalk.find('img'), 0, {
      scale: 0,
  })
} else {
  $koroImg.css({opacity: 0});
  $koroTalk.css({opacity: 0});
}

TweenMax
  .to($contentsWrap, 0, {
      opacity: 0,            
      scale: 1,
      rotationZ: 4,
  })

}

function texts() {

text03_boost(0)
text01_boost(1)
text02_boost(1.8)
// text02_boost(2.7)
// text03_boost(3.0)

setTimeout(function(){

text01();
text02();
text03();

},1800);

}

function text01() {

var $target = $text01.find('img').eq(0);
var len = $text01.find('img').length;

var signX = 1;
var signY = 1;
var x = ($(window).width() - $target.width())/2 + signX * (Math.random()*0.3) * ($(window).width()/2/4*3);
var y = ($(window).height() - $target.height())/2 + signY * (Math.random()*0.1+0.9) * ($(window).height()/2/4*3);

var dur = 0.2 * Math.random();

$text01.find('img').each(function(index, el) {

  var tl = new TimelineMax();

  tl
    .to($(this), 0, {
        x: x,
        y: y,
        scale: 0,
        delay: 0.3 + 0.05 * index
    })
    .to($(this), 0.26, {
    // .to($(this), 0.4 + dur, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut.config(2, 0.3),
    })
    .to($(this), 0.1, {
        scale: 0,
        opacity: 0,
        onComplete : function() {

          if (isText01) {
            if (len - 1 == index) text01();
          };

        }
    },'-=' + 0.1 * index);
  
});

}

function text02() {

var $target = $text02.find('img').eq(0);
var len = $text02.find('img').length;

var signX = 1;
var signY = -1;
var x = ($(window).width() - $target.width())/2 + signX * (Math.random()*0.6+0.4) * ($(window).width()/2/4*3);
var y = ($(window).height() - $target.height())/2 + signY * (Math.random()*0.5+0.1) * ($(window).height()/2/4*3);

var dur = 0.2 * Math.random();

$text02.find('img').each(function(index, el) {

  var tl = new TimelineMax();

  tl
    .to($(this), 0, {
        x: x,
        y: y,
        scale: 0,
        delay: 0.1 + 0.05 * index
    })
    .to($(this), 0.26, {
    // .to($(this), 0.3 + dur, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut.config(2, 0.3),
    })
    .to($(this), 0.1, {
        scale: 0,
        opacity: 0,
        onComplete : function() {

          if (isText02) {
            if (len - 1 == index) text02();
          }

        }
    },'-=' + 0.1 * index);
  
});


}

function text03() {

var $target = $text03.find('img').eq(0);
var len = $text03.find('img').length;

var signX = -1;
var signY = -1;
var x = ($(window).width() - $target.width())/2 + signX * (Math.random()*0.6+0.4) * ($(window).width()/2/4*3);
var y = ($(window).height() - $target.height())/2 + signY * (Math.random()*0.1+0.6) * ($(window).height()/2/4*3);

var dur = 0.2 * Math.random();

var tl = new TimelineMax();

$text03.find('img').each(function(index, el) {

  var tl = new TimelineMax();

  tl
    .to($(this), 0, {
        x: x,
        y: y,
        scale: 0,
        delay: 0.3 + 0.05 * index
    })
    .to($(this), 0.26, {
    // .to($(this), 0.3 + dur, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut.config(2, 0.3),
    })
    .to($(this), 0.1, {
        scale: 0,
        opacity: 0,
        onComplete : function() {

          if (isText03) {
            if (len - 1 == index) text03();
          }

        }
    },'-=' + 0.1 * index);
  
});

}

function text01_boost(delay) {

var $target = $text01.find('img').eq(0);
var len = $text01.find('img').length;

var signX = 1;
var signY = 1;
var x = ($(window).width() - $target.width())/2 + signX * (Math.random()*0.3) * ($(window).width()/2/4*3);
var y = ($(window).height() - $target.height())/2 + signY * (Math.random()*0.1+0.9) * ($(window).height()/2/4*3);

var dur = 0.2 * Math.random();

$text01.find('img').each(function(index, el) {

  var tl = new TimelineMax();

  tl
    .to($(this), 0, {
        x: x,
        y: y,
        scale: 0,
        delay: delay
    })
    .to($(this), 0.4 + dur, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut.config(2, 0.3),
    })
    .to($(this), 0.2, {
        scale: 0,
        opacity: 0,
        onComplete : function() {

        }
    },'-=' + 0.1 * index);
  
});

}


function text02_boost(delay) {

var $target = $text02.find('img').eq(0);
var len = $text02.find('img').length;

var signX = 1;
var signY = -1;
var x = ($(window).width() - $target.width())/2 + signX * (Math.random()*0.6+0.4) * ($(window).width()/2/4*3);
var y = ($(window).height() - $target.height())/2 + signY * (Math.random()*0.5+0.1) * ($(window).height()/2/4*3);

var dur = 0.2 * Math.random();

$text02.find('img').each(function(index, el) {

  var tl = new TimelineMax();

  tl
    .to($(this), 0, {
        x: x,
        y: y,
        scale: 0,
        delay: delay
    })
    .to($(this), 0.3 + dur, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut.config(2, 0.3),
    })
    .to($(this), 0.2, {
        scale: 0,
        opacity: 0,
        onComplete : function() {

        }
    },'-=' + 0.1 * index);
  
});


}

function text03_boost(delay) {

var $target = $text03.find('img').eq(0);
var len = $text03.find('img').length;

var signX = -1;
var signY = -1;
var x = ($(window).width() - $target.width())/2 + signX * (Math.random()*0.6+0.4) * ($(window).width()/2/4*3);
var y = ($(window).height() - $target.height())/2 + signY * (Math.random()*0.1+0.6) * ($(window).height()/2/4*3);

var dur = 0.2 * Math.random();

var tl = new TimelineMax();

$text03.find('img').each(function(index, el) {

  var tl = new TimelineMax();

  tl
    .to($(this), 0, {
        x: x,
        y: y,
        scale: 0,
        delay: delay
    })
    .to($(this), 0.3 + dur, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut.config(2, 0.3),
    })
    .to($(this), 0.2, {
        scale: 0,
        opacity: 0,
        onComplete : function() {

        }
    },'-=' + 0.1 * index);
  
});

}


function mocs() {

setTimeout(function(){

for (var i = 0; i < $moc.find('img').length; i++) {
  moc(i);
}

},3400);


}

function moc(i) {

var $target = $moc.find('img').eq(i);

var signX = (Math.random() < 0.5)? 1: -1;
var signY = (Math.random() < 0.5)? 1: -1;
var x = ($(window).width() - $target.width())/2 + signX * Math.random() * ($(window).width()/2/4*3);
var y = ($(window).height() - $target.height())/2 + signY * Math.random() * ($(window).height()/2/4*3);

var dur = 0.2 + 0.3 * Math.random();

var tl = new TimelineMax();

tl
  .to($target, 0, {
      x: x,
      y: y,
      delay: dur,
      scale: 0,
      ease: Elastic.easeOut.config(1, 0.3),
  })
  .to($target, 0.4 + dur, {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeOut.config(1.5, 0.4),
  })
  .to($target, 0.1, {
      scale: 0,
      opacity: 0,
      onComplete : function() {

        if (isMoc) {
          moc(i);
        }

      }
  });

}

function arms() {

ar(0,0);
ar(3,1);
ar(1,1.8);
// ar(2,2.7);
// ar(3,3.0);
// ar(1,3.3);
// ar(2,3.4);
ar(0,1.8,function(){

  for (var i = 0; i < $arm.find('img').length; i++) {
    arm(i);
  };

});


}

function arm(i) {

var $target = $arm.find('img').eq(i);

var signX = (Math.random() < 0.5)? 1: -1;
var signY = (Math.random() < 0.5)? 1: -1;
var x = ($(window).width() - $target.width())/2 + signX * Math.random() * ($(window).width()/2/4*1.6);
var y = ($(window).height() - $target.height())/2 + signY * Math.random() * ($(window).height()/2/4*1.6);

var dur = 0.3 * Math.random();

var tl = new TimelineMax();

switch (i){
  // case 0:
  //   targetX = x + 30 + 30 * Math.random();
  //   targetY = y + 30 + 30 * Math.random();
  //   break;
  // case 1:
  //   targetX = x + 30 + 30 * Math.random();
  //   targetY = y - (30 + 30 * Math.random());
  //   break;
  // case 2:
  //   targetX = x - (30 + 30 * Math.random());
  //   targetY = y + (30 + 30 * Math.random());
  //   break;
  // case 3:
  //   targetX = x + 30 + 30 * Math.random();
  //   targetY = y - (5 + 5 * Math.random());
  //   break;
  // case 4:
  //   targetX = x - (30 + 30 * Math.random());
  //   targetY = y + (30 + 30 * Math.random());
  //   break;
  // case 5:
  //   targetX = x - (30 + 30 * Math.random());
  //   targetY = y + (30 + 30 * Math.random());
  //   break;
  // case 6:
  //   targetX = x + 30 + 30 * Math.random();
  //   targetY = y + (30 + 30 * Math.random());
  //   break;
  case 0:
    targetX = x + 50 + 30 * Math.random();
    targetY = y - (50 + 30 * Math.random());
    break;
  case 1:
    targetX = x - (50 + 30 * Math.random());
    targetY = y - (50 + 30 * Math.random());
    break;
  case 2:
    targetX = x + 50 + 30 * Math.random();
    targetY = y - (5 + 5 * Math.random());
    break;
  case 3:
    targetX = x - (50 + 30 * Math.random());
    targetY = y + (50 + 30 * Math.random());
    break;
}

tl
  .to($target, 0, {
      x: x,
      y: y,
      delay: dur,
      scale: 0.7 + Math.random() * 0.3,
  })
  .to($target, 0.1 + dur, {
      opacity: 1,
      x: targetX,
      y: targetY,
      ease :Back.easeOut.config(2)
  })
  .to($target, 0.1 + dur, {
      opacity: 0,
      onComplete : function() {

        if (isArm) {
          arm(i);
        }

      }
  },'-=0.1');

}

function ar(i,delay,cb) {

var $target = $arm.find('img').eq(i);

var signX = (Math.random() < 0.5)? 1: -1;
var signY = (Math.random() < 0.5)? 1: -1;
var x = ($(window).width() - $target.width())/2 + signX * Math.random() * ($(window).width()/2/4*1);
var y = ($(window).height() - $target.height())/2 + signY * Math.random() * ($(window).height()/2/4*1);

var dur = 0.3 * Math.random();

var tl = new TimelineMax();

switch (i){
  case 0:
    targetX = x + 50 + 30 * Math.random();
    targetY = y - (50 + 30 * Math.random());
    break;
  case 1:
    targetX = x - (50 + 30 * Math.random());
    targetY = y - (50 + 30 * Math.random());
    break;
  case 2:
    targetX = x + 50 + 30 * Math.random();
    targetY = y - (5 + 5 * Math.random());
    break;
  case 3:
    targetX = x - (50 + 30 * Math.random());
    targetY = y + (50 + 30 * Math.random());
    break;
}

tl
  .to($target, 0, {
      x: x,
      y: y,
      delay: delay,
      scale: 0.7 + Math.random() * 0.3,
  })
  .to($target, 0.1 + dur, {
      opacity: 1,
      x: targetX,
      y: targetY,
      ease :Back.easeOut.config(2)
  })
  .to($target, 0.1 + dur, {
      opacity: 0,
      onComplete : function() {

        if (cb) cb();

      }
  });

}

function bg() {

setTimeout(function(){


var FPS = 1000/15;

TweenMax.to($bg, 0, {
      scale: 1.5,
      onComplete: function() {

      }
  })
TweenMax.to($bg, 4, {
      scale: 1,
      ease: Power3.easeOut,
      onComplete: function() {

      }
  })

var isSwitch = false;

Timer = setInterval(function(){

  if (isSwitch) {

    $bg.css({opacity: 0});

    isSwitch = false;

  } else {

    $bg.css({opacity: 1});

    isSwitch = true;

  }

},FPS);

},3400);

}

function stopLoop() {

clearInterval(Timer);

}

function shadow() {

gb.func.shadow();

}

function blackboard_koro_text() {

TweenMax.to($blackboardText, 2.5, {
      opacity: 1,
      ease: Expo.easeIn,
      delay: 2,
      onComplete: function() {

        setTimeout(function(){

          isText01 = false;
          isText02 = false;
          isText03 = false;
          isMoc = false;
          isArm = false;
          ar(3,0.2);
          text03_boost(0.2);
          $bg.css({opacity: 0});
          stopLoop();

          onShadowEnd();

        },1000);

        setTimeout(function(){
          gb.func.setStatus('disappear');
        },5000);
        

      }
  })

}

function blackboard_koro() {

var $koroImg = $('.koro__imgWrap');

var tll = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();

isResize = false;

tll
  .to($koroImg, 0, {
      scale: 0,
  })
  .to($koroImg, 1.2, {
      scale: 1,
      delay: 0.5,
      ease : Elastic.easeOut.config(1, 0.27),
      // ease : Elastic.easeOut.config(1, 3),
      // ease : SteppedEase.config(12),
  })

tl2
  .to($koroText, 0, {
      opacity: 1,
  })
  .to($koroText, 0.9, {
      x: 0,
      delay: 1.1,
      ease : Expo.easeOut,
  })
  .to($koroText, 0.9, {
      width: koro.text.w,
      ease : Expo.easeOut,
  },'-=0.85')

tl3
  .to($koroText01, 1.3, {
      height: koro.text01.h,
      ease : Expo.easeOut,
      delay: 1.5,
      onComplete : function() {

      }
  })
  .to($koroText02, 1.0, {
      height: koro.text02.h,
      ease : Expo.easeOut,
      onComplete : function() {

        repeateKoroTalk();

      }
  },'-=1.0');

}

function blackboard_koro_forIE() {

isResize = false;

$koroImg
  .delay(500)
  .animate({'opacity':'1'}, 1200);

$koroText
  .delay(1100)
  .css({'transform':'translateX(0px)'});
$koroText
  .delay(1300)
  .animate({
  width:koro.text.w}, 900);

$koroText01
  .delay(1500)
  .animate({
  height:koro.text01.h}, 1300);
$koroText02
  .delay(1700)
  .animate({
  height:koro.text01.h}, 1100,function(){

    repeateKoroTalkForIE();

  });

$(window).trigger('openingEnd');

}

function repeateKoroTalk() {

var tl4 = new TimelineMax();

tl4.staggerTo($koroTalk.find('img'),0.4, {
  scale:1.2,
  repeat : -1,
  repeatDelay : 4,
  yoyo: true,
  ease: Back.easeOut.config(3),
}, 0.1)

}

function repeateKoroTalkForIE() {

$koroTalk.animate({'opacity':'1'}, 400);

}

function onResize() {

  if (isResize) {

    koro = {
      text : {
        w : $koroText.width(),
      },
      text01: {
        h : $koroText01.height()
      },
      text02: {
        h : $koroText02.height()
      }
    }


    TweenMax.set($koroText, {
          x: koro.text.w/2,
          width: 0,
      })
    TweenMax.set($koroText01, {
          height: 0,
      })
    TweenMax.set($koroText02, {
          height: 0,
      })

  };


}

function onLoadingEnd() {


// 中のtext横位置
$('.c__bg').css({'margin-left': -1 * $('.c__bg').width()/2});
$('.drawWrap').css({'opacity': 1});

var tl = new TimelineMax({});

tl
  .to($contentsWrap, 0, {
      opacity: 1,
      delay: 0.2,
  })
  .to($contentsWrap, 0.2, {
      scale: 1,
      rotationZ: -2,
      ease :Power3.easeIn
      // ease : Elastic.easeOut.config(1.5, 1)
  },'-=0.05')
  .to($contentsWrap, 0.2, {
      scale: 1,
      rotationZ: 0,
      ease :Power3.easeOut
      // ease : Elastic.easeOut.config(1.5, 1)
  })

shadow();

setTimeout(function(){

  bg();
  mocs();
  arms();
  texts();
  blackboard_koro_text();

},2500);

}

function onShadowEnd() {

if (!$('body').hasClass('ie9')) {
  blackboard_koro();  
} else {
  blackboard_koro_forIE(); 
}

}

function onOpeningEnd() {

$('html').css({
  'overflow-x': 'auto',
});

$('.body__inner').css({
  'overflow-y': 'auto',
});

$('.drawWrap').hide();

}

function setEvents() {

$(window).on('resize', onResize);
$(window).on('loadingEnd', onLoadingEnd);
$(window).on('shadowEnd', onShadowEnd);
$(window).on('openingEnd', onOpeningEnd);

}


function main() {

setEvents();
ready();
// blackboard_koro();
// shadow();
// arms();
// texts();
// mocs();

}

main();

})

//--------------------------------------------------
//
//  cnavas shadow
//
//--------------------------------------------------

$(function(){

var gb = jp.co.ansatsu;

var canvas,
    ctx,

    radius = 0,

    FPS = 1000/30,
    Timer = null;

var easing = 0.08;

var img;

var $wrap = $('.shadowWrap');

var src = '/assets/img/teaser/pc/c__shadow.png';

var defW = 1280;
    defH = 800;

var random = 0,
    noiseX = 0,
    nvX = 0.05;

var rate,l,t = 0;

var range = 100000000;

var count = 0;

var isStatus = 'show';

var alpha = 0;

var disappearVal = 0;

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

var isOver = false;
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

});