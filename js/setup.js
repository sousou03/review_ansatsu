//--------------------------------------------------
//
//  globalオブジェクト
//
//--------------------------------------------------
if(jp === undefined) var jp = {};
jp.co = jp.co || {};
/**
 * description:<br>
 * globalオブジェクト
 *
 * @memberof setup
 */
jp.co.ansatsu = jp.co.ansatsu || {};
jp.co.ansatsu.val = {};
jp.co.ansatsu.func = {};
jp.co.ansatsu.util = {
  loadedCnt: 3,
};

//--------------------------------------------------
//
//  log
//
//--------------------------------------------------

// 行数が、log関数を定義した場所になる
// function log() {
//    if(window.console && console.log && console.log.apply) console.log.apply(console, arguments);
// };

// 行数は、logメソッドを読んだ場所
// var log = console.log.bind(console);

//--------------------------------------------------
//
//  Modernizr
//
//--------------------------------------------------

window.Modernizr=function(at,ae,aj){function ag(a){aw.cssText=a}function ai(b,a){return ag(B.join(b+";")+(a||""))}function ax(b,a){return typeof b===a}function ao(b,a){return !!~(""+b).indexOf(a)}function av(c,a){for(var b in c){var d=c[b];if(!ao(d,"-")&&aw[d]!==aj){return"pfx"==a?d:!0}}return !1}function af(d,b,c){for(var f in d){var a=b[d[f]];if(a!==aj){return c===!1?d[f]:ax(a,"function")?a.bind(c||b):a}}return !1}function ad(c,a,f){var b=c.charAt(0).toUpperCase()+c.slice(1),d=(c+" "+am.join(b+" ")+b).split(" ");return ax(a,"string")||ax(a,"undefined")?av(d,a):(d=(c+" "+q.join(b+" ")+b).split(" "),af(d,a,f))}function al(){ah.input=function(c){for(var a=0,b=c.length;b>a;a++){an[c[a]]=!!(c[a] in R)}return an.list&&(an.list=!(!ae.createElement("datalist")||!at.HTMLDataListElement)),an}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),ah.inputtypes=function(g){for(var f,h,b,d=0,j=g.length;j>d;d++){R.setAttribute("type",h=g[d]),f="text"!==R.type,f&&(R.value=aa,R.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(h)&&R.style.WebkitAppearance!==aj?(aq.appendChild(R),b=ae.defaultView,f=b.getComputedStyle&&"textfield"!==b.getComputedStyle(R,null).WebkitAppearance&&0!==R.offsetHeight,aq.removeChild(R)):/^(search|tel)$/.test(h)||(f=/^(url|email)$/.test(h)?R.checkValidity&&R.checkValidity()===!1:R.value!=aa)),G[g[d]]=!!f}return G}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var au,ar,ak="2.8.3",ah={},ap=!0,aq=ae.documentElement,ac="modernizr",Z=ae.createElement(ac),aw=Z.style,R=ae.createElement("input"),aa=":)",ab={}.toString,B=" -webkit- -moz- -o- -ms- ".split(" "),V="Webkit Moz O ms",am=V.split(" "),q=V.toLowerCase().split(" "),I={svg:"http://www.w3.org/2000/svg"},J={},G={},an={},X=[],U=X.slice,Q=function(k,g,b,f){var t,j,p,w,v=ae.createElement("div"),h=ae.body,m=h||ae.createElement("body");if(parseInt(b,10)){for(;b--;){p=ae.createElement("div"),p.id=f?f[b]:ac+(b+1),v.appendChild(p)}}return t=["",'<style id="s',ac,'">',k,"</style>"].join(""),v.id=ac,(h?v:m).innerHTML+=t,m.appendChild(v),h||(m.style.background="",m.style.overflow="hidden",w=aq.style.overflow,aq.style.overflow="hidden",aq.appendChild(m)),j=g(v,k),h?v.parentNode.removeChild(v):(m.parentNode.removeChild(m),aq.style.overflow=w),!!j},Y=function(a){var c=at.matchMedia||at.msMatchMedia;if(c){return c(a)&&c(a).matches||!1}var b;return Q("@media "+a+" { #"+ac+" { position: absolute; } }",function(d){b="absolute"==(at.getComputedStyle?getComputedStyle(d,null):d.currentStyle).position}),b},W=function(){function b(d,f){f=f||ae.createElement(a[d]||"div"),d="on"+d;var c=d in f;return c||(f.setAttribute||(f=ae.createElement("div")),f.setAttribute&&f.removeAttribute&&(f.setAttribute(d,""),c=ax(f[d],"function"),ax(f[d],"undefined")||(f[d]=aj),f.removeAttribute(d))),f=null,c}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return b}(),K={}.hasOwnProperty;ar=ax(K,"undefined")||ax(K.call,"undefined")?function(b,a){return a in b&&ax(b.constructor.prototype[a],"undefined")}:function(b,a){return K.call(b,a)},Function.prototype.bind||(Function.prototype.bind=function(c){var a=this;if("function"!=typeof a){throw new TypeError}var d=U.call(arguments,1),b=function(){if(this instanceof b){var g=function(){};g.prototype=a.prototype;var e=new g,f=a.apply(e,d.concat(U.call(arguments)));return Object(f)===f?f:e}return a.apply(c,d.concat(U.call(arguments)))};return b}),J.flexbox=function(){return ad("flexWrap")},J.flexboxlegacy=function(){return ad("boxDirection")},J.canvas=function(){var a=ae.createElement("canvas");return !(!a.getContext||!a.getContext("2d"))},J.canvastext=function(){return !(!ah.canvas||!ax(ae.createElement("canvas").getContext("2d").fillText,"function"))},J.webgl=function(){return !!at.WebGLRenderingContext},J.touch=function(){var a;return"ontouchstart" in at||at.DocumentTouch&&ae instanceof DocumentTouch?a=!0:Q(["@media (",B.join("touch-enabled),("),ac,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(b){a=9===b.offsetTop}),a},J.geolocation=function(){return"geolocation" in navigator},J.postmessage=function(){return !!at.postMessage},J.websqldatabase=function(){return !!at.openDatabase},J.indexedDB=function(){return !!ad("indexedDB",at)},J.hashchange=function(){return W("hashchange",at)&&(ae.documentMode===aj||ae.documentMode>7)},J.history=function(){return !(!at.history||!history.pushState)},J.draganddrop=function(){var a=ae.createElement("div");return"draggable" in a||"ondragstart" in a&&"ondrop" in a},J.websockets=function(){return"WebSocket" in at||"MozWebSocket" in at},J.rgba=function(){return ag("background-color:rgba(150,255,150,.5)"),ao(aw.backgroundColor,"rgba")},J.hsla=function(){return ag("background-color:hsla(120,40%,100%,.5)"),ao(aw.backgroundColor,"rgba")||ao(aw.backgroundColor,"hsla")},J.multiplebgs=function(){return ag("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(aw.background)},J.backgroundsize=function(){return ad("backgroundSize")},J.borderimage=function(){return ad("borderImage")},J.borderradius=function(){return ad("borderRadius")},J.boxshadow=function(){return ad("boxShadow")},J.textshadow=function(){return""===ae.createElement("div").style.textShadow},J.opacity=function(){return ai("opacity:.55"),/^0.55$/.test(aw.opacity)},J.cssanimations=function(){return ad("animationName")},J.csscolumns=function(){return ad("columnCount")},J.cssgradients=function(){var b="background-image:",a="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return ag((b+"-webkit- ".split(" ").join(a+b)+B.join(c+b)).slice(0,-b.length)),ao(aw.backgroundImage,"gradient")},J.cssreflections=function(){return ad("boxReflect")},J.csstransforms=function(){return !!ad("transform")},J.csstransforms3d=function(){var a=!!ad("perspective");return a&&"webkitPerspective" in aq.style&&Q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},J.csstransitions=function(){return ad("transition")},J.fontface=function(){var a;return Q('@font-face {font-family:"font";src:url("https://")}',function(f,d){var e=ae.getElementById("smodernizr"),b=e.sheet||e.styleSheet,c=b?b.cssRules&&b.cssRules[0]?b.cssRules[0].cssText:b.cssText||"":"";a=/src/i.test(c)&&0===c.indexOf(d.split(" ")[0])}),a},J.generatedcontent=function(){var a;return Q(["#",ac,"{font:0/0 a}#",ac,':after{content:"',aa,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},J.video=function(){var b=ae.createElement("video"),c=!1;try{(c=!!b.canPlayType)&&(c=new Boolean(c),c.ogg=b.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=b.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(a){}return c},J.audio=function(){var b=ae.createElement("audio"),c=!1;try{(c=!!b.canPlayType)&&(c=new Boolean(c),c.ogg=b.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=b.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=b.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(b.canPlayType("audio/x-m4a;")||b.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(a){}return c},J.localstorage=function(){try{return localStorage.setItem(ac,ac),localStorage.removeItem(ac),!0}catch(a){return !1}},J.sessionstorage=function(){try{return sessionStorage.setItem(ac,ac),sessionStorage.removeItem(ac),!0}catch(a){return !1}},J.webworkers=function(){return !!at.Worker},J.applicationcache=function(){return !!at.applicationCache},J.svg=function(){return !!ae.createElementNS&&!!ae.createElementNS(I.svg,"svg").createSVGRect},J.inlinesvg=function(){var a=ae.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==I.svg},J.smil=function(){return !!ae.createElementNS&&/SVGAnimate/.test(ab.call(ae.createElementNS(I.svg,"animate")))},J.svgclippaths=function(){return !!ae.createElementNS&&/SVGClipPath/.test(ab.call(ae.createElementNS(I.svg,"clipPath")))};for(var O in J){ar(J,O)&&(au=O.toLowerCase(),ah[au]=J[O](),X.push((ah[au]?"":"no-")+au))}return ah.input||al(),ah.addTest=function(c,a){if("object"==typeof c){for(var b in c){ar(c,b)&&ah.addTest(b,c[b])}}else{if(c=c.toLowerCase(),ah[c]!==aj){return ah}a="function"==typeof a?a():a,"undefined"!=typeof ap&&ap&&(aq.className+=" "+(a?"":"no-")+c),ah[c]=a}return ah},ag(""),Z=R=null,function(P,w){function D(d,a){var f=d.createElement("p"),c=d.getElementsByTagName("head")[0]||d.documentElement;return f.innerHTML="x<style>"+a+"</style>",c.insertBefore(f.lastChild,c.firstChild)}function z(){var a=b.elements;return"string"==typeof a?a.split(" "):a}function C(c){var a=j[c[L]];return a||(a={},M++,c[L]=M,j[M]=a),a}function ay(f,g,d){if(g||(g=w),F){return g.createElement(f)}d||(d=C(g));var c;return c=d.cache[f]?d.cache[f].cloneNode():A.test(f)?(d.cache[f]=d.createElem(f)).cloneNode():d.createElem(f),!c.canHaveChildren||E.test(f)||c.tagUrn?c:d.frag.appendChild(c)}function H(h,m){if(h||(h=w),F){return h.createDocumentFragment()}m=m||C(h);for(var d=m.frag.cloneNode(),f=0,l=z(),g=l.length;g>f;f++){d.createElement(l[f])}return d}function T(c,a){a.cache||(a.cache={},a.createElem=c.createElement,a.createFrag=c.createDocumentFragment,a.frag=a.createFrag()),c.createElement=function(d){return b.shivMethods?ay(d,c,a):a.createElem(d)},c.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+z().join().replace(/[\w\-]+/g,function(d){return a.createElem(d),a.frag.createElement(d),'c("'+d+'")'})+");return n}")(b,a.frag)}function x(c){c||(c=w);var a=C(c);return !b.shivCSS||k||a.hasCSS||(a.hasCSS=!!D(c,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),F||T(c,a),c}var k,F,S="3.7.0",N=P.html5||{},E=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,A=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,L="_html5shiv",M=0,j={};!function(){try{var a=w.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden" in a,F=1==a.childNodes.length||function(){w.createElement("a");var d=w.createDocumentFragment();return"undefined"==typeof d.cloneNode||"undefined"==typeof d.createDocumentFragment||"undefined"==typeof d.createElement}()}catch(c){k=!0,F=!0}}();var b={elements:N.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:S,shivCSS:N.shivCSS!==!1,supportsUnknownElements:F,shivMethods:N.shivMethods!==!1,type:"default",shivDocument:x,createElement:ay,createDocumentFragment:H};P.html5=b,x(w)}(this,ae),ah._version=ak,ah._prefixes=B,ah._domPrefixes=q,ah._cssomPrefixes=am,ah.mq=Y,ah.hasEvent=W,ah.testProp=function(a){return av([a])},ah.testAllProps=ad,ah.testStyles=Q,ah.prefixed=function(b,a,c){return a?ad(b,a,c):ad(b,"pfx")},aq.className=aq.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(ap?" js "+X.join(" "):""),ah}(this,this.document);

//--------------------------------------------------
//
//  util domクラス
//
//--------------------------------------------------
$(function(){

  /**
   * description:<br>
   * .blankで別タブで開くなど
   * <br>
   * event：jquery ready
   * 
   * @memberof setup
   */
  var addDomClass = function(){

	 $('.blank').attr('target', '_blank');

  }

  addDomClass();

});

//--------------------------------------------------
//
//  便利関数
//
//--------------------------------------------------
$(function(){

  /**
   * description:<br>
   * 画像ホバー切り替え
   * <br>
   * event：jquery ready
   * 
   * @memberof setup
   */
  var setSmartRollover = function(){

    var $target = $('.imgChange')

    function smartRollover() {  
            
      for(var i=0; i < $target.length; i++) {  
          if($target.find('img').eq(i).get(0).getAttribute("src").match("_off."))  
          {  
              $target.eq(i).on('mouseenter', function(event) {
                $(this).find('img').attr("src", $(this).find('img').get(0).getAttribute("src").replace("_off.", "_on."));  
              });
              $target.eq(i).on('mouseleave', function(event) {
                  $(this).find('img').attr("src", $(this).find('img').get(0).getAttribute("src").replace("_on.", "_off."));  
              });
          }  
      }  
      
    }  

    function setEvents(arg) {
        

        if(window.addEventListener) {  
            window.addEventListener("load", smartRollover, false);  
        }  
        else if(window.attachEvent) {  
            window.attachEvent("onload", smartRollover);  
        }

    } 

    setEvents();

  }

  setSmartRollover();

  /**
   * description:<br>
   * ページ内スクロール
   * <br>
   * event：jquery ready
   * 
   * @memberof setup
   */
  var pageScroll = function() {

    function toScroll(boolean) {

        var isHashInUrl = boolean,

            href,
            target,
            position,
            dif = 0,
            
            dur = 600,
            ease = 'easeOutExpo';

        // 差分取得
        if ($(this).data('diff')) dif = $(this).data('diff');

        href = $(this).attr("href");
        target = $(href == "#" || href == "" ? 'html' : href);

        position = target.offset().top;
        position = position - dif;

        $('body,html').stop().animate({scrollTop:position}, dur, ease,function(){jp.co.cafe.pagetop.setOn(true);});
        jp.co.cafe.pagetop.setOn(false);
        $('#pagetop').removeClass('pagetop_show');

        return false;

    }

    function setEvents() {

        // click
        
        // hrefが#で始まっている、aタグをクリックした際
        $('a[href^=#]').not('.notScroll').on('click',toScroll);
        // hrefが#で始まっている、toScrollというクラスが付加されたタグをクリックした際
        // $('[href^=#].toScroll').not('.notScroll').on('click',toScroll);

    }

    setEvents();

  }

  pageScroll();

    /**
   * description:<br>
   * ページトップへ戻る 実装
   * <br>
   * event：jquery_ready
   * 
   * @memberof setup
   */
  var pagetop = function(){ 

    var $window = $(window),
        $pagetop = $('#pagetop'),
        curST = $window.scrollTop();

    var minST = 300;

    var isOn = true;

    function bottomMax() {

      var btm = 153,
          scrollArea,
          bottomST,

          mt;

          scrollArea = $('html').height() - $window.height();
          bottomST = scrollArea - btm;

          mt = bottomST - curST;

      if (curST > bottomST) {
        $pagetop.css('margin-bottom', -mt);
      } else {
        $pagetop.css('margin-bottom', 0);
      }

    }

    function setOn(blen) {
      isOn = blen;
    }


    function scrollHandler() {

      if (!isOn) return;

      curST = $window.scrollTop();

      if (curST > minST) {
        $pagetop.addClass('pagetop_show');
      } else {
        $pagetop.removeClass('pagetop_show');
      }

      bottomMax();

    }

    function setEvents() {

      $(window).load(function() {
    
        $window.on('scroll', scrollHandler);    

      });

    }

    setEvents();

    // 公開api
    // jp.co.cafe.pagetop = {};
    // jp.co.cafe.pagetop.setOn = setOn;

  }

  pagetop();

  var setupRequestAnimationFrame = function () {

    var FPS = 1000/60;

    window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
                                   window.mozRequestAnimationFrame || // 古いfirefox用
                                   window.webkitRequestAnimationFrame ||  // safari6以前、iOS6 safari用
                                   function( callback ) {
                                     var timer = window.setTimeout(callback, FPS);
                                     return timer;
                                   };

    window.cancelAnimationFrame = window.cancelAnimationFrame ||
                                  window.mozCancelAnimationFrame ||
                                  window.webkitCancelAnimationFrame ||
                                  function( timer ) {
                                    window.clearTimeout(timer);
                                  };      
  }

  setupRequestAnimationFrame();

});


//--------------------------------------------------
//
//  jQuery拡張
//
//--------------------------------------------------
(function(){

  /**
   * jQuery拡張<br>
   * event：即時実行
   * 
   * @memberof setup
   */
  var jqueryExpand = function(){

    jQuery.fn.extend({
      adjust: function(){
        var w = $(this).innerWidth(),
            h = $(this).innerHeight();
        $(this).css({
          'position':'absolute',
          'left':'50%',
          'top':'50%',
          'margin-left':'-' + (w / 2) + 'px',
          'margin-top':'-' + (h / 2) + 'px'
        });
      },
      adjustW: function(){
        var w = $(this).innerWidth(),
            h = $(this).innerHeight();
        $(this).css({
          'position':'absolute',
          'left':'50%',
          'margin-left':'-' + (w / 2) + 'px'
        });
      },
      adjustH: function(){
        var w = $(this).innerWidth(),
            h = $(this).innerHeight();
        $(this).css({
          'position':'absolute',
          'top':'50%',
          'margin-top':'-' + (h / 2) + 'px'
        });
      }
    });

  }

  jqueryExpand();

})();

//--------------------------------------------------
//
//  デバイス、ブラウザ、バージョン判定
//
//--------------------------------------------------
(function(){

  /**
   * description:<br>
   * デバイス、ブラウザ、バージョン判定
   * <br>
   * event：即時実行
   * 
   * @memberof setup
   */
  var setClientEnvi = function(){

    var gb = jp.co.ansatsu;

    var ua = {};
    var userAgent = window.navigator.userAgent.toLowerCase();
    var appVersion = window.navigator.appVersion.toLowerCase();

    //--------------------------------------------------
    //
    //  デバイス判定
    //
    //--------------------------------------------------

    ua.deviceSP = (function(){
      var media = ["iphone","ipod","ipad","android","dream","cupcake","blackberry9500","blackberry9530","blackberry9520","blackberry9550","blackberry9800","webos","incognito","webmate"];
      var pattern = new RegExp(media.join("|"),"i");
      return pattern.test(userAgent);
    })();

    ua.deviceTab = (function(){
      var u = userAgent;

      return (u.indexOf("windows") != -1 && u.indexOf("touch") != -1)
        || u.indexOf("ipad") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
        || u.indexOf("kindle") != -1
        || u.indexOf("silk") != -1
        || u.indexOf("playbook") != -1;
    })();

    ua.deviceMB = (function(){
      var u = userAgent;

      return (u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
        || u.indexOf("iphone") != -1
        || u.indexOf("ipod") != -1
        || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
        || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
        || u.indexOf("blackberry") != -1;
    })();

    if (ua.deviceSP) $('body').addClass('deviceSP');
    if (ua.deviceTAB) $('body').addClass('deviceTAB');
    if (ua.deviceMB) $('body').addClass('deviceMB');

    ua.isiPad = (function(){
      var pattern = new RegExp("ipad","i");
      return pattern.test(userAgent);
    })();

    ua.isiPhone = (function(){
      var pattern = new RegExp("iphone","i");
      return pattern.test(userAgent);
    })();

    ua.isiOS = (function(){
      return (ua.isiPad || ua.isiPhone);
    })();

    ua.isWin = (function(){
      if (navigator.platform.indexOf("Win") > -1) return true;
      else return false;
    })();

    //--------------------------------------------------
    //
    // ブラウザ・バージョン判定
    //
    //--------------------------------------------------

    ua.isIE = (function(){
        var pattern = new RegExp("msie","i");
        var pattern2 = new RegExp("trident","i");
        return pattern.test(userAgent) || pattern2.test(userAgent);
    })();

    ua.isIEVersion = (function(){
        
        if (appVersion.indexOf("msie 10.") != -1) return 'ie10';
        else if (appVersion.indexOf("msie 9.") != -1) return 'ie9';
        else if (appVersion.indexOf("msie 8.") != -1) return 'ie8';
        else if (appVersion.indexOf("msie 7.") != -1) return 'ie7';
        else if (appVersion.indexOf("msie 6.") != -1) return 'ie6';
        else if (appVersion.indexOf("trident") != -1) return 'ie11';
        else return 'notIE';

    })();

    if (ua.isIE) $('body').addClass('ie');
    if (ua.isIEVersion == 'ie9') $('body').addClass('ie9');
    if (ua.isIEVersion == 'ie10') $('body').addClass('ie10');
    if (ua.isIEVersion == 'ie11') $('body').addClass('ie11');

    ua.isSafari = (function(){
        if(userAgent.indexOf("chrome") != -1) return false;
        if(userAgent.indexOf("lunascape") != -1) return false;
        var pattern = new RegExp("safari","i");
        return pattern.test(userAgent);
    })();

    ua.isChrome = (function(){
        var pattern = new RegExp("chrome","i");
        return pattern.test(userAgent);
    })();

    ua.isFirefox = (function(){
        var pattern = new RegExp("firefox","i");
        return pattern.test(userAgent);
    })();

    ua.isOpera = (function(){
        var pattern = new RegExp("opera","i");
        return pattern.test(userAgent);
    })();

    if (ua.isSafari) $('body').addClass('safari');

    //--------------------------------------------------
    //
    // レスポンシブ判定,ランドスケープ判定
    //
    //--------------------------------------------------
    
    var responsive = (function(){

      var W = window.innerWidth,
          H = window.innerHeight,

          isSP = false,

          bp = 850;

      function getSize() {
        W = window.innerWidth;
        H = window.innerHeight;   
      }

      function update() {

        getSize();

        if (W > bp) {
          isSP = false;
          $('body').removeClass('isSP')
        } else {
          isSP = true;
          $('body').addClass('isSP');
        }

        if (H > W) {
          $("body").addClass("portrait");
          $("body").removeClass("landscape");
        }else{
          $("body").addClass("landscape");
          $("body").removeClass("portrait");
        }

      }

      function getW() {
        return W;
      }
      function getH() {
        return H;
      }
      function getIsSP() {
        return isSP;
      }

      $(window).on('resize orientationchange', update);
      $(window).trigger('resize');


      // 公開APIを返す
      gb.util.isSP = getIsSP;
      gb.val.W = getW;
      gb.val.H = getH;
      $.extend(gb.util,ua);

    })();

    function jump() {

      var url = location.href;      

      // タブレット対応
      if (ua.deviceTab && url.indexOf('pc') != -1) {

        location.href = url.replace( /pc\//g , "" );
      
      // スマホ → PC対応
      } else if (ua.deviceSP && url.indexOf('pc') != -1) {

        location.href = url.replace( /pc\//g , "" );

      // PC　→　スマホ対応
      } if (!ua.deviceSP && !ua.deviceTAB && url.indexOf('pc') == -1) {

        // var dt1 = new Date();
        // var dt2 = new Date(2016, 3 - 1, 19);

        // if(dt1.getTime() > dt2.getTime()) {
        location.href = '/pc'  
        // } else {
        //     location.href = '/teaser/pc';
        // }

      };

    }

    function jumpToError() {

      var url = location.href;      

      if (androidVersion() < 4.2 && url.indexOf('error') == -1) {
        location.href = '/error.html';
      } 
      if (iphoneVersion() < 7 && url.indexOf('error') == -1) {
        location.href = '/error.html';
      } 

    }

    function androidVersion() {
      var uat = navigator.userAgent;
      if( uat.indexOf("Android") > 0 ) {

          var version = parseFloat(uat.slice(uat.indexOf("Android")+8));
          return version;
          
      }
    }
    function iphoneVersion() {
      var uat = navigator.userAgent;
      if( uat.indexOf("iPhone OS") > 0 ) {

          var version = parseFloat(uat.slice(uat.indexOf("iPhone OS")+10));
          return version;

      }
    }

    function main() {

      jump();
      jumpToError();
      
    }

    main();

  }

  setClientEnvi();

}());