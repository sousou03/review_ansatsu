//--------------------------------------------------
//
//  sakura
//
//--------------------------------------------------    

$(function(){

  var gb = jp.co.ansatsu;

  var $sakura = $('.sakura'),
      $wrap = $('.c__wrap');

  var sakuraList = [],
      len = $sakura.length,
      centerX = $wrap.width()/2 * Math.random(),
      cnt = 0;

  function setup() {

    noise.seed(Math.random());

    $sakura.each(function(index, el) {

        sakuraList.push(new Sakura($sakura.eq(index)));

    });

  }

  function update() {

    $sakura.each(function(index, el) {

        var s = sakuraList[index];

        s.update();

    });

  }

  function draw() {

    $sakura.each(function(index, el) {

        var s = sakuraList[index];

        s.draw();
        s.isEdge();

    });

  }

  function loop() {

    requestAnimationFrame(loop);

    update();
    draw();

    if (cnt%60 == 0) opacity();

    cnt++;
  }

  function opacity() {

    $sakura.each(function(index, el) {

      var s = sakuraList[index]; 

      if (s.visible) {

        if (Math.random() < 0.3) {

          TweenMax.to(s.$obj, 1, {
              opacity: 0,
              ease: Power2.easeInOut,
              onComplete: function() {

                s.visible = false;

              }
            });

        };

      } else {

        if (Math.random() < 0.7) {

          TweenMax.to(s.$obj, 1, {
              opacity: 1,
              ease: Power2.easeInOut,
              onComplete: function() {

                s.visible = true;

              }
            });

        }

      }

    });

  }

  function setEvents() {

    // $(document.body).on('mousemove', parallaxForPC);
    
  }

  function main() {

    setEvents();
    setup();
    loop();

  }

  // 公開api
  gb.func.sakura = main;

})