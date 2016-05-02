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