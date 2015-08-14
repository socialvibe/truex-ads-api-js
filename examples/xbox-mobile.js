TXM.dispatcher.addEventListener('ENGAGEMENT_STARTED', function(){
    $('head').append('<style>\
  html, body {\
    height: 100%;\
    width: 100%;\
    padding: 0;\
    margin: 0; }\
  \
  .mobile_container {\
    display: inline-block;\
    position: absolute;\
    height: 540px;\
    width: 360px;\
    top: 0;\
    bottom: 0;\
    left: 0;\
    right: 0;\
    background-image: url("http://media.truex.com/m/activties/xboxMobile/shared_bg.jpg");\
    overflow: hidden; }\
  \
  .frame {\
    position: absolute;\
    height: 540px;\
    width: 360px; }\
  \
  #frame1_img {\
    position: absolute;\
    left: 0 !important;\
    top: 82px; }\
    #frame1_text1 {\
      position: absolute;\
      display: none;\
      left: 18px !important;\
      top: 173px; }\
    #frame1_text2 {\
    position: absolute;\
    display: none;\
    left: 18px !important;\
    top: 249px; }\
    #frame1_text3 {\
    position: absolute;\
    display: none;\
    left: 18px !important;\
    top: 285px; }\
  \
  #frame2 {\
    display: none; }\
  \
  #carousel_slide1_top {\
    position: absolute !important;\
    left: 0 !important;}\
  \
  #carousel_slide1_bottom {\
    position: absolute !important;\
    left: 0 !important;\
    top: 285px !important; }\
  \
  #carousel_slide2_top {\
    position: absolute !important;\
    left: 360px !important;\
    top: 7px !important; }\
  \
  #carousel_slide2_bottom {\
    position: absolute !important;\
    left: 360px !important;\
    top: 285px !important; }\
  \
  #carousel_slide3_top {\
    position: absolute !important;\
    left: 720px !important;\
    top: 52px !important; }\
  \
  #carousel_slide3_bottom {\
    position: absolute !important;\
    left: 720px !important;\
    top: 287px !important; }\
  \
  #carousel_slide4_top {\
    position: absolute !important;\
    left: 1080px !important;\
    top: 6px !important; }\
  \
  #carousel_slide4_bottom {\
    position: absolute !important;\
    left: 1080px !important;\
    top: 285px !important; }\
  \
  .arrow-right {\
    position: absolute !important;\
    top: 380px !important;\
    z-index: 100 !important;\
    width: 39px !important;\
    height: 39px !important;\
    cursor: pointer !important; }\
  \
  #swiper-slide1 .arrow-right {\
    left: 275px !important; }\
  \
  #swiper-slide2 .arrow-right {\
    left: 635px !important; }\
  \
  #swiper-slide3 .arrow-right {\
    left: 995px !important; }\
  \
  #swiper-slide4 .arrow-right {\
    left: 1355px !important; }\
  \
  .pagination {\
    position: absolute;\
    top: 522px;\
    left: 147px;\
    width: 75px;\
    height: 13px;\
    z-index: 100 !important; }\
    .pagination span {\
      margin-right: 5px; }\
  \
  #frame3 {\
    display: none;\
    background-image: url("http://media.truex.com/m/activties/xboxMobile/frame3.jpg"); }\
  \
  .swiper-container {\
    margin: 0 auto;\
    position: relative;\
    overflow: hidden;\
    -webkit-backface-visibility: hidden;\
    -ms-backface-visibility: hidden;\
    backface-visibility: hidden;\
    z-index: 1; }\
  \
  .swiper-wrapper {\
    position: relative;\
    width: 100%;\
    -webkit-transition-property: -webkit-transform, left, top;\
    -webkit-transition-duration: 0s;\
    -webkit-transform: translate3d(0px, 0, 0);\
    -webkit-transition-timing-function: ease;\
    -moz-transition-duration: 0s;\
    -moz-transform: translate3d(0px, 0, 0);\
    -moz-transition-timing-function: ease;\
    -o-transition-duration: 0s;\
    -o-transform: translate3d(0px, 0, 0);\
    -o-transition-timing-function: ease;\
    -o-transform: translate(0px, 0px);\
    -ms-transition-property: -ms-transform, left, top;\
    -ms-transition-duration: 0s;\
    -ms-transform: translate3d(0px, 0, 0);\
    -ms-transition-timing-function: ease;\
    -webkit-transition-property: -webkit-transform, left, top;\
            transition-property: transform, left, top;\
    -webkit-transition-duration: 0s;\
            transition-duration: 0s;\
    -webkit-transform: translate3d(0px, 0, 0);\
            transform: translate3d(0px, 0, 0);\
    -webkit-transition-timing-function: ease;\
            transition-timing-function: ease;\
    -moz-box-sizing: content-box;\
    box-sizing: content-box; }\
  \
  .swiper-free-mode > .swiper-wrapper {\
    -webkit-transition-timing-function: ease-out;\
    transition-timing-function: ease-out;\
    margin: 0 auto; }\
  \
  .swiper-slide {\
    float: left;\
    -moz-box-sizing: content-box;\
    box-sizing: content-box; }\
  \
  .swiper-wp8-horizontal {\
    -ms-touch-action: pan-y; }\
  \
  .swiper-wp8-vertical {\
    -ms-touch-action: pan-x; }\
  \
  .swiper-container {\
    top: 82px;\
    left: 14px;\
    height: 430px; }\
  \
  .swiper-pagination-switch {\
    background-image: url("http://media.truex.com/m/activties/xboxMobile/carousel_pagination_inactive.png");\
    display: inline-block;\
    width: 10px !important;\
    height: 10px  !important; }\
  \
  .swiper-active-switch {\
    background-image: url("http://media.truex.com/m/activties/xboxMobile/carousel_pagination_active.png");\
    display: inline-block;\
    width: 10px;\
    height: 10px; }\
    \
  .slideIn{\
    animation-name: slideIn;\
    -webkit-animation-name: slideIn;\
  \
    animation-duration: .3s;\
    -webkit-animation-duration: .3s;\
  \
    animation-timing-function: ease-in-out;\
    -webkit-animation-timing-function: ease-in-out;\
  \
    animation-fill-mode: forwards;\
    -webkit-animation-fill-mode: forwards;\
  \
    visibility: visible !important;\
  }\
  \
  @keyframes slideIn {\
    0% {\
      transform: translateX(150%);\
    }\
    100% {\
      transform: translateX(0%);\
    }\
  }\
  \
  @-webkit-keyframes slideIn {\
    0% {\
      -webkit-transform: translateX(150%);\
    }\
    100% {\
      -webkit-transform: translateX(0%);\
    }\
  }\
  \
    .slideOut{\
    animation-name: slideOut;\
    -webkit-animation-name: slideOut;\
  \
    animation-duration: .3s;\
    -webkit-animation-duration: .3s;\
  \
    animation-timing-function: ease-in-out;\
    -webkit-animation-timing-function: ease-in-out;\
  \
    animation-fill-mode: forwards;\
    -webkit-animation-fill-mode: forwards;\
  \
    visibility: visible !important;\
  }\
  \
  @keyframes slideOut {\
    0% {\
      transform: translateX(0%);\
    }\
    100% {\
      transform: translateX(-150%);\
    }\
  }\
  \
  @-webkit-keyframes slideOut {\
    0% {\
      -webkit-transform: translateX(0%);\
    }\
    100% {\
      -webkit-transform: translateX(-150%);\
    }\
  }\
  </style>');








  $('body').append('\
  <div class="mobile_container">\
  \
  <div class="frame" id="frame1">\
        <img src="http://media.truex.com/m/activties/xboxMobile/frame1.jpg" id="frame1_img">\
        <img src="http://media.truex.com/m/activties/xboxMobile/frame1_text1.png" id="frame1_text1">\
        <img src="http://media.truex.com/m/activties/xboxMobile/frame1_text2.png" id="frame1_text2">\
        <img src="http://media.truex.com/m/activties/xboxMobile/frame1_text3.png" id="frame1_text3">\
      </div>\
  \
  <div class="frame" id="frame2">\
  \
  <div class="swiper-container">\
  <div class="swiper-wrapper">\
  \
   <div class="swiper-slide" id="swiper-slide1">\
                <img src="http://media.truex.com/m/activties/xboxMobile/carousel_slide1_top.png" id="carousel_slide1_top">\
                <img src="http://media.truex.com/m/activties/xboxMobile/carousel_slide1_bottom.png" id="carousel_slide1_bottom">\
                <img src="http://media.truex.com/m/activties/xboxMobile/right_arrow1.png" id="arrow-right1" class="arrow-right">\
            </div>\
  \
  <div class="swiper-slide" id="swiper-slide2" >\
  <img src="http://media.truex.com/m/activties/xboxMobile/carousel_slide2_top.png" id="carousel_slide2_top">\
  <img src="http://media.truex.com/m/activties/xboxMobile/carousel_slide2_bottom.png" id="carousel_slide2_bottom">\
  <img src="http://media.truex.com/m/activties/xboxMobile/right_arrow1.png" id="arrow-right2" class="arrow-right">\
  </div>\
  \
  <div class="swiper-slide" id="swiper-slide3" >\
  <img src="http://media.truex.com/m/activties/xboxMobile/carousel_slide3_top.png" id="carousel_slide3_top">\
  <img src="http://media.truex.com/m/activties/xboxMobile/carousel_slide3_bottom.png" id="carousel_slide3_bottom">\
  <img src="http://media.truex.com/m/activties/xboxMobile/right_arrow1.png" id="arrow-right3" class="arrow-right">\
  </div>\
  \
  <div class="swiper-slide" id="swiper-slide4" >\
  <img src="http://media.truex.com/m/activties/xboxMobile/carousel_slide4_top.png" id="carousel_slide4_top">\
  <img src="http://media.truex.com/m/activties/xboxMobile/carousel_slide4_bottom.png" id="carousel_slide4_bottom">\
  <img src="http://media.truex.com/m/activties/xboxMobile/right_arrow1.png" id="arrow-right4" class="arrow-right">\
  </div>\
  \
  </div> \
  </div> \
  \
  <div class="pagination">\
  </div>\
  \
  </div> \
  \
  <div class="frame" id="frame3">\
  </div> \
  \
  </div>');






  $(document).ready(function() {
  /*
   * Swiper 2.7.0
   * Mobile touch slider and framework with hardware accelerated transitions
   *
   * http://www.idangero.us/sliders/swiper/
   *
   * Copyright 2010-2014, Vladimir Kharlampidi
   * The iDangero.us
   * http://www.idangero.us/
   *
   * Licensed under GPL & MIT
   *
   * Released on: August 30, 2014
  */
  var Swiper=function(e,t){"use strict";function r(e,t){if(document.querySelectorAll)return(t||document).querySelectorAll(e);else return jQuery(e,t)}function b(e){if(Object.prototype.toString.apply(e)==="[object Array]")return true;return false}function x(){var e=u-l;if(t.freeMode){e=u-l}if(t.slidesPerView>i.slides.length&&!t.centeredSlides){e=0}if(e<0)e=0;return e}function T(){function o(e){var n=new Image;n.onload=function(){if(typeof i==="undefined"||i===null)return;if(i.imagesLoaded!==undefined)i.imagesLoaded++;if(i.imagesLoaded===i.imagesToLoad.length){i.reInit();if(t.onImagesReady)i.fireCallback(t.onImagesReady,i)}};n.src=e}var e=i.h.addEventListener;var n=t.eventTarget==="wrapper"?i.wrapper:i.container;if(!(i.browser.ie10||i.browser.ie11)){if(i.support.touch){e(n,"touchstart",I);e(n,"touchmove",U);e(n,"touchend",z)}if(t.simulateTouch){e(n,"mousedown",I);e(document,"mousemove",U);e(document,"mouseup",z)}}else{e(n,i.touchEvents.touchStart,I);e(document,i.touchEvents.touchMove,U);e(document,i.touchEvents.touchEnd,z)}if(t.autoResize){e(window,"resize",i.resizeFix)}N();i._wheelEvent=false;if(t.mousewheelControl){if(document.onmousewheel!==undefined){i._wheelEvent="mousewheel"}if(!i._wheelEvent){try{new WheelEvent("wheel");i._wheelEvent="wheel"}catch(s){}}if(!i._wheelEvent){i._wheelEvent="DOMMouseScroll"}if(i._wheelEvent){e(i.container,i._wheelEvent,A)}}if(t.keyboardControl){e(document,"keydown",k)}if(t.updateOnImagesReady){i.imagesToLoad=r("img",i.container);for(var u=0;u<i.imagesToLoad.length;u++){o(i.imagesToLoad[u].getAttribute("src"))}}}function N(){var e=i.h.addEventListener,n;if(t.preventLinks){var s=r("a",i.container);for(n=0;n<s.length;n++){e(s[n],"click",P)}}if(t.releaseFormElements){var o=r("input, textarea, select",i.container);for(n=0;n<o.length;n++){e(o[n],i.touchEvents.touchStart,H,true)}}if(t.onSlideClick){for(n=0;n<i.slides.length;n++){e(i.slides[n],"click",M)}}if(t.onSlideTouch){for(n=0;n<i.slides.length;n++){e(i.slides[n],i.touchEvents.touchStart,_)}}}function C(){var e=i.h.removeEventListener,n;if(t.onSlideClick){for(n=0;n<i.slides.length;n++){e(i.slides[n],"click",M)}}if(t.onSlideTouch){for(n=0;n<i.slides.length;n++){e(i.slides[n],i.touchEvents.touchStart,_)}}if(t.releaseFormElements){var s=r("input, textarea, select",i.container);for(n=0;n<s.length;n++){e(s[n],i.touchEvents.touchStart,H,true)}}if(t.preventLinks){var o=r("a",i.container);for(n=0;n<o.length;n++){e(o[n],"click",P)}}}function k(e){var t=e.keyCode||e.charCode;if(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey)return;if(t===37||t===39||t===38||t===40){var n=false;var r=i.h.getOffset(i.container);var s=i.h.windowScroll().left;var o=i.h.windowScroll().top;var u=i.h.windowWidth();var a=i.h.windowHeight();var f=[[r.left,r.top],[r.left+i.width,r.top],[r.left,r.top+i.height],[r.left+i.width,r.top+i.height]];for(var l=0;l<f.length;l++){var c=f[l];if(c[0]>=s&&c[0]<=s+u&&c[1]>=o&&c[1]<=o+a){n=true}}if(!n)return}if(d){if(t===37||t===39){if(e.preventDefault)e.preventDefault();else e.returnValue=false}if(t===39)i.swipeNext();if(t===37)i.swipePrev()}else{if(t===38||t===40){if(e.preventDefault)e.preventDefault();else e.returnValue=false}if(t===40)i.swipeNext();if(t===38)i.swipePrev()}}function A(e){var n=i._wheelEvent;var r=0;if(e.detail)r=-e.detail;else if(n==="mousewheel"){if(t.mousewheelControlForceToAxis){if(d){if(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY))r=e.wheelDeltaX;else return}else{if(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX))r=e.wheelDeltaY;else return}}else{r=e.wheelDelta}}else if(n==="DOMMouseScroll")r=-e.detail;else if(n==="wheel"){if(t.mousewheelControlForceToAxis){if(d){if(Math.abs(e.deltaX)>Math.abs(e.deltaY))r=-e.deltaX;else return}else{if(Math.abs(e.deltaY)>Math.abs(e.deltaX))r=-e.deltaY;else return}}else{r=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX:-e.deltaY}}if(!t.freeMode){if((new Date).getTime()-L>60){if(r<0)i.swipeNext();else i.swipePrev()}L=(new Date).getTime()}else{var s=i.getWrapperTranslate()+r;if(s>0)s=0;if(s<-x())s=-x();i.setWrapperTransition(0);i.setWrapperTranslate(s);i.updateActiveSlide(s);if(s===0||s===-x())return}if(t.autoplay)i.stopAutoplay(true);if(e.preventDefault)e.preventDefault();else e.returnValue=false;return false}function M(e){if(i.allowSlideClick){D(e);i.fireCallback(t.onSlideClick,i,e)}}function _(e){D(e);i.fireCallback(t.onSlideTouch,i,e)}function D(e){if(!e.currentTarget){var n=e.srcElement;do{if(n.className.indexOf(t.slideClass)>-1){break}n=n.parentNode}while(n);i.clickedSlide=n}else{i.clickedSlide=e.currentTarget}i.clickedSlideIndex=i.slides.indexOf(i.clickedSlide);i.clickedSlideLoopIndex=i.clickedSlideIndex-(i.loopedSlides||0)}function P(e){if(!i.allowLinks){if(e.preventDefault)e.preventDefault();else e.returnValue=false;if(t.preventLinksPropagation&&"stopPropagation"in e){e.stopPropagation()}return false}}function H(e){if(e.stopPropagation)e.stopPropagation();else e.returnValue=false;return false}function I(e){if(t.preventLinks)i.allowLinks=true;if(i.isTouched||t.onlyExternal){return false}var n=e.target||e.srcElement;if(document.activeElement){if(document.activeElement!==n)document.activeElement.blur()}var r="input select textarea".split(" ");if(t.noSwiping&&n&&W(n))return false;F=false;i.isTouched=true;B=e.type==="touchstart";if(!B&&"which"in e&&e.which===3)return false;if(!B||e.targetTouches.length===1){i.callPlugins("onTouchStartBegin");if(!B&&!i.isAndroid&&r.indexOf(n.tagName.toLowerCase())<0){if(e.preventDefault)e.preventDefault();else e.returnValue=false}var s=B?e.targetTouches[0].pageX:e.pageX||e.clientX;var o=B?e.targetTouches[0].pageY:e.pageY||e.clientY;i.touches.startX=i.touches.currentX=s;i.touches.startY=i.touches.currentY=o;i.touches.start=i.touches.current=d?s:o;i.setWrapperTransition(0);i.positions.start=i.positions.current=i.getWrapperTranslate();i.setWrapperTranslate(i.positions.start);i.times.start=(new Date).getTime();f=undefined;if(t.moveStartThreshold>0){j=false}if(t.onTouchStart)i.fireCallback(t.onTouchStart,i,e);i.callPlugins("onTouchStartEnd")}}function U(e){if(!i.isTouched||t.onlyExternal)return;if(B&&e.type==="mousemove")return;var n=B?e.targetTouches[0].pageX:e.pageX||e.clientX;var r=B?e.targetTouches[0].pageY:e.pageY||e.clientY;if(typeof f==="undefined"&&d){f=!!(f||Math.abs(r-i.touches.startY)>Math.abs(n-i.touches.startX))}if(typeof f==="undefined"&&!d){f=!!(f||Math.abs(r-i.touches.startY)<Math.abs(n-i.touches.startX))}if(f){i.isTouched=false;return}if(d){if(!t.swipeToNext&&n<i.touches.startX||!t.swipeToPrev&&n>i.touches.startX){return}}else{if(!t.swipeToNext&&r<i.touches.startY||!t.swipeToPrev&&r>i.touches.startY){return}}if(e.assignedToSwiper){i.isTouched=false;return}e.assignedToSwiper=true;if(t.preventLinks){i.allowLinks=false}if(t.onSlideClick){i.allowSlideClick=false}if(t.autoplay){i.stopAutoplay(true)}if(!B||e.touches.length===1){if(!i.isMoved){i.callPlugins("onTouchMoveStart");if(t.loop){i.fixLoop();i.positions.start=i.getWrapperTranslate()}if(t.onTouchMoveStart)i.fireCallback(t.onTouchMoveStart,i)}i.isMoved=true;if(e.preventDefault)e.preventDefault();else e.returnValue=false;i.touches.current=d?n:r;i.positions.current=(i.touches.current-i.touches.start)*t.touchRatio+i.positions.start;if(i.positions.current>0&&t.onResistanceBefore){i.fireCallback(t.onResistanceBefore,i,i.positions.current)}if(i.positions.current<-x()&&t.onResistanceAfter){i.fireCallback(t.onResistanceAfter,i,Math.abs(i.positions.current+x()))}if(t.resistance&&t.resistance!=="100%"){var s;if(i.positions.current>0){s=1-i.positions.current/l/2;if(s<.5)i.positions.current=l/2;else i.positions.current=i.positions.current*s}if(i.positions.current<-x()){var o=(i.touches.current-i.touches.start)*t.touchRatio+(x()+i.positions.start);s=(l+o)/l;var u=i.positions.current-o*(1-s)/2;var a=-x()-l/2;if(u<a||s<=0)i.positions.current=a;else i.positions.current=u}}if(t.resistance&&t.resistance==="100%"){if(i.positions.current>0&&!(t.freeMode&&!t.freeModeFluid)){i.positions.current=0}if(i.positions.current<-x()&&!(t.freeMode&&!t.freeModeFluid)){i.positions.current=-x()}}if(!t.followFinger)return;if(!t.moveStartThreshold){i.setWrapperTranslate(i.positions.current)}else{if(Math.abs(i.touches.current-i.touches.start)>t.moveStartThreshold||j){if(!j){j=true;i.touches.start=i.touches.current;return}i.setWrapperTranslate(i.positions.current)}else{i.positions.current=i.positions.start}}if(t.freeMode||t.watchActiveIndex){i.updateActiveSlide(i.positions.current)}if(t.grabCursor){i.container.style.cursor="move";i.container.style.cursor="grabbing";i.container.style.cursor="-moz-grabbin";i.container.style.cursor="-webkit-grabbing"}if(!q)q=i.touches.current;if(!R)R=(new Date).getTime();i.velocity=(i.touches.current-q)/((new Date).getTime()-R)/2;if(Math.abs(i.touches.current-q)<2)i.velocity=0;q=i.touches.current;R=(new Date).getTime();i.callPlugins("onTouchMoveEnd");if(t.onTouchMove)i.fireCallback(t.onTouchMove,i,e);return false}}function z(e){if(f){i.swipeReset()}if(t.onlyExternal||!i.isTouched)return;i.isTouched=false;if(t.grabCursor){i.container.style.cursor="move";i.container.style.cursor="grab";i.container.style.cursor="-moz-grab";i.container.style.cursor="-webkit-grab"}if(!i.positions.current&&i.positions.current!==0){i.positions.current=i.positions.start}if(t.followFinger){i.setWrapperTranslate(i.positions.current)}i.times.end=(new Date).getTime();i.touches.diff=i.touches.current-i.touches.start;i.touches.abs=Math.abs(i.touches.diff);i.positions.diff=i.positions.current-i.positions.start;i.positions.abs=Math.abs(i.positions.diff);var n=i.positions.diff;var r=i.positions.abs;var s=i.times.end-i.times.start;if(r<5&&s<300&&i.allowLinks===false){if(!t.freeMode&&r!==0)i.swipeReset();if(t.preventLinks){i.allowLinks=true}if(t.onSlideClick){i.allowSlideClick=true}}setTimeout(function(){if(typeof i==="undefined"||i===null)return;if(t.preventLinks){i.allowLinks=true}if(t.onSlideClick){i.allowSlideClick=true}},100);var u=x();if(!i.isMoved&&t.freeMode){i.isMoved=false;if(t.onTouchEnd)i.fireCallback(t.onTouchEnd,i,e);i.callPlugins("onTouchEnd");return}if(!i.isMoved||i.positions.current>0||i.positions.current<-u){i.swipeReset();if(t.onTouchEnd)i.fireCallback(t.onTouchEnd,i,e);i.callPlugins("onTouchEnd");return}i.isMoved=false;if(t.freeMode){if(t.freeModeFluid){var c=1e3*t.momentumRatio;var h=i.velocity*c;var p=i.positions.current+h;var v=false;var m;var g=Math.abs(i.velocity)*20*t.momentumBounceRatio;if(p<-u){if(t.momentumBounce&&i.support.transitions){if(p+u<-g)p=-u-g;m=-u;v=true;F=true}else p=-u}if(p>0){if(t.momentumBounce&&i.support.transitions){if(p>g)p=g;m=0;v=true;F=true}else p=0}if(i.velocity!==0)c=Math.abs((p-i.positions.current)/i.velocity);i.setWrapperTranslate(p);i.setWrapperTransition(c);if(t.momentumBounce&&v){i.wrapperTransitionEnd(function(){if(!F)return;if(t.onMomentumBounce)i.fireCallback(t.onMomentumBounce,i);i.callPlugins("onMomentumBounce");i.setWrapperTranslate(m);i.setWrapperTransition(300)})}i.updateActiveSlide(p)}if(!t.freeModeFluid||s>=300)i.updateActiveSlide(i.positions.current);if(t.onTouchEnd)i.fireCallback(t.onTouchEnd,i,e);i.callPlugins("onTouchEnd");return}a=n<0?"toNext":"toPrev";if(a==="toNext"&&s<=300){if(r<30||!t.shortSwipes)i.swipeReset();else i.swipeNext(true)}if(a==="toPrev"&&s<=300){if(r<30||!t.shortSwipes)i.swipeReset();else i.swipePrev(true)}var y=0;if(t.slidesPerView==="auto"){var b=Math.abs(i.getWrapperTranslate());var w=0;var E;for(var S=0;S<i.slides.length;S++){E=d?i.slides[S].getWidth(true,t.roundLengths):i.slides[S].getHeight(true,t.roundLengths);w+=E;if(w>b){y=E;break}}if(y>l)y=l}else{y=o*t.slidesPerView}if(a==="toNext"&&s>300){if(r>=y*t.longSwipesRatio){i.swipeNext(true)}else{i.swipeReset()}}if(a==="toPrev"&&s>300){if(r>=y*t.longSwipesRatio){i.swipePrev(true)}else{i.swipeReset()}}if(t.onTouchEnd)i.fireCallback(t.onTouchEnd,i,e);i.callPlugins("onTouchEnd")}function W(e){var n=false;do{if(e.className.indexOf(t.noSwipingClass)>-1){n=true}e=e.parentElement}while(!n&&e.parentElement&&e.className.indexOf(t.wrapperClass)===-1);if(!n&&e.className.indexOf(t.wrapperClass)>-1&&e.className.indexOf(t.noSwipingClass)>-1)n=true;return n}function X(e,t){var n=document.createElement("div");var r;n.innerHTML=t;r=n.firstChild;r.className+=" "+e;return r.outerHTML}function V(e,n,r){function u(){var s=+(new Date);var h=s-o;a+=f*h/(1e3/60);c=l==="toNext"?a>e:a<e;if(c){i.setWrapperTranslate(Math.ceil(a));i._DOMAnimating=true;window.setTimeout(function(){u()},1e3/60)}else{if(t.onSlideChangeEnd){if(n==="to"){if(r.runCallbacks===true)i.fireCallback(t.onSlideChangeEnd,i,l)}else{i.fireCallback(t.onSlideChangeEnd,i,l)}}i.setWrapperTranslate(e);i._DOMAnimating=false}}var s=n==="to"&&r.speed>=0?r.speed:t.speed;var o=+(new Date);if(i.support.transitions||!t.DOMAnimation){i.setWrapperTranslate(e);i.setWrapperTransition(s)}else{var a=i.getWrapperTranslate();var f=Math.ceil((e-a)/s*(1e3/60));var l=a>e?"toNext":"toPrev";var c=l==="toNext"?a>e:a<e;if(i._DOMAnimating)return;u()}i.updateActiveSlide(e);if(t.onSlideNext&&n==="next"){i.fireCallback(t.onSlideNext,i,e)}if(t.onSlidePrev&&n==="prev"){i.fireCallback(t.onSlidePrev,i,e)}if(t.onSlideReset&&n==="reset"){i.fireCallback(t.onSlideReset,i,e)}if(n==="next"||n==="prev"||n==="to"&&r.runCallbacks===true)$(n)}function $(e){i.callPlugins("onSlideChangeStart");if(t.onSlideChangeStart){if(t.queueStartCallbacks&&i.support.transitions){if(i._queueStartCallbacks)return;i._queueStartCallbacks=true;i.fireCallback(t.onSlideChangeStart,i,e);i.wrapperTransitionEnd(function(){i._queueStartCallbacks=false})}else i.fireCallback(t.onSlideChangeStart,i,e)}if(t.onSlideChangeEnd){if(i.support.transitions){if(t.queueEndCallbacks){if(i._queueEndCallbacks)return;i._queueEndCallbacks=true;i.wrapperTransitionEnd(function(n){i.fireCallback(t.onSlideChangeEnd,n,e)})}else{i.wrapperTransitionEnd(function(n){i.fireCallback(t.onSlideChangeEnd,n,e)})}}else{if(!t.DOMAnimation){setTimeout(function(){i.fireCallback(t.onSlideChangeEnd,i,e)},10)}}}}function J(){var e=i.paginationButtons;if(e){for(var t=0;t<e.length;t++){i.h.removeEventListener(e[t],"click",Q)}}}function K(){var e=i.paginationButtons;if(e){for(var t=0;t<e.length;t++){i.h.addEventListener(e[t],"click",Q)}}}function Q(e){var n;var r=e.target||e.srcElement;var s=i.paginationButtons;for(var o=0;o<s.length;o++){if(r===s[o])n=o}if(t.autoplay)i.stopAutoplay(true);i.swipeTo(n)}function Z(){G=setTimeout(function(){if(t.loop){i.fixLoop();i.swipeNext(true)}else if(!i.swipeNext(true)){if(!t.autoplayStopOnLast)i.swipeTo(0);else{clearTimeout(G);G=undefined}}i.wrapperTransitionEnd(function(){if(typeof G!=="undefined")Z()})},t.autoplay)}function et(){i.calcSlides();if(t.loader.slides.length>0&&i.slides.length===0){i.loadSlides()}if(t.loop){i.createLoop()}i.init();T();if(t.pagination){i.createPagination(true)}if(t.loop||t.initialSlide>0){i.swipeTo(t.initialSlide,0,false)}else{i.updateActiveSlide(0)}if(t.autoplay){i.startAutoplay()}i.centerIndex=i.activeIndex;if(t.onSwiperCreated)i.fireCallback(t.onSwiperCreated,i);i.callPlugins("onSwiperCreated")}if(!document.body.outerHTML&&document.body.__defineGetter__){if(HTMLElement){var n=HTMLElement.prototype;if(n.__defineGetter__){n.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}}}if(!window.getComputedStyle){window.getComputedStyle=function(e,t){this.el=e;this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;if(t==="float")t="styleFloat";if(n.test(t)){t=t.replace(n,function(){return arguments[2].toUpperCase()})}return e.currentStyle[t]?e.currentStyle[t]:null};return this}}if(!Array.prototype.indexOf){Array.prototype.indexOf=function(e,t){for(var n=t||0,r=this.length;n<r;n++){if(this[n]===e){return n}}return-1}}if(!document.querySelectorAll){if(!window.jQuery)return}if(typeof e==="undefined")return;if(!e.nodeType){if(r(e).length===0)return}var i=this;i.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0};i.positions={start:0,abs:0,diff:0,current:0};i.times={start:0,end:0};i.id=(new Date).getTime();i.container=e.nodeType?e:r(e)[0];i.isTouched=false;i.isMoved=false;i.activeIndex=0;i.centerIndex=0;i.activeLoaderIndex=0;i.activeLoopIndex=0;i.previousIndex=null;i.velocity=0;i.snapGrid=[];i.slidesGrid=[];i.imagesToLoad=[];i.imagesLoaded=0;i.wrapperLeft=0;i.wrapperRight=0;i.wrapperTop=0;i.wrapperBottom=0;i.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>=0;var s,o,u,a,f,l;var c={eventTarget:"wrapper",mode:"horizontal",touchRatio:1,speed:300,freeMode:false,freeModeFluid:false,momentumRatio:1,momentumBounce:true,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,slidesPerViewFit:true,simulateTouch:true,followFinger:true,shortSwipes:true,longSwipesRatio:.5,moveStartThreshold:false,onlyExternal:false,createPagination:true,pagination:false,paginationElement:"span",paginationClickable:false,paginationAsRange:true,resistance:true,scrollContainer:false,preventLinks:true,preventLinksPropagation:false,noSwiping:false,noSwipingClass:"swiper-no-swiping",initialSlide:0,keyboardControl:false,mousewheelControl:false,mousewheelControlForceToAxis:false,useCSS3Transforms:true,autoplay:false,autoplayDisableOnInteraction:true,autoplayStopOnLast:false,loop:false,loopAdditionalSlides:0,roundLengths:false,calculateHeight:false,cssWidthAndHeight:false,updateOnImagesReady:true,releaseFormElements:true,watchActiveIndex:false,visibilityFullFit:false,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:false,queueStartCallbacks:false,queueEndCallbacks:false,autoResize:true,resizeReInit:false,DOMAnimation:true,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:false},swipeToPrev:true,swipeToNext:true,slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};t=t||{};for(var h in c){if(h in t&&typeof t[h]==="object"){for(var p in c[h]){if(!(p in t[h])){t[h][p]=c[h][p]}}}else if(!(h in t)){t[h]=c[h]}}i.params=t;if(t.scrollContainer){t.freeMode=true;t.freeModeFluid=true}if(t.loop){t.resistance="100%"}var d=t.mode==="horizontal";var v=["mousedown","mousemove","mouseup"];if(i.browser.ie10)v=["MSPointerDown","MSPointerMove","MSPointerUp"];if(i.browser.ie11)v=["pointerdown","pointermove","pointerup"];i.touchEvents={touchStart:i.support.touch||!t.simulateTouch?"touchstart":v[0],touchMove:i.support.touch||!t.simulateTouch?"touchmove":v[1],touchEnd:i.support.touch||!t.simulateTouch?"touchend":v[2]};for(var m=i.container.childNodes.length-1;m>=0;m--){if(i.container.childNodes[m].className){var g=i.container.childNodes[m].className.split(/\s+/);for(var y=0;y<g.length;y++){if(g[y]===t.wrapperClass){s=i.container.childNodes[m]}}}}i.wrapper=s;i._extendSwiperSlide=function(e){e.append=function(){if(t.loop){e.insertAfter(i.slides.length-i.loopedSlides)}else{i.wrapper.appendChild(e);i.reInit()}return e};e.prepend=function(){if(t.loop){i.wrapper.insertBefore(e,i.slides[i.loopedSlides]);i.removeLoopedSlides();i.calcSlides();i.createLoop()}else{i.wrapper.insertBefore(e,i.wrapper.firstChild)}i.reInit();return e};e.insertAfter=function(n){if(typeof n==="undefined")return false;var r;if(t.loop){r=i.slides[n+1+i.loopedSlides];if(r){i.wrapper.insertBefore(e,r)}else{i.wrapper.appendChild(e)}i.removeLoopedSlides();i.calcSlides();i.createLoop()}else{r=i.slides[n+1];i.wrapper.insertBefore(e,r)}i.reInit();return e};e.clone=function(){return i._extendSwiperSlide(e.cloneNode(true))};e.remove=function(){i.wrapper.removeChild(e);i.reInit()};e.html=function(t){if(typeof t==="undefined"){return e.innerHTML}else{e.innerHTML=t;return e}};e.index=function(){var t;for(var n=i.slides.length-1;n>=0;n--){if(e===i.slides[n])t=n}return t};e.isActive=function(){if(e.index()===i.activeIndex)return true;else return false};if(!e.swiperSlideDataStorage)e.swiperSlideDataStorage={};e.getData=function(t){return e.swiperSlideDataStorage[t]};e.setData=function(t,n){e.swiperSlideDataStorage[t]=n;return e};e.data=function(t,n){if(typeof n==="undefined"){return e.getAttribute("data-"+t)}else{e.setAttribute("data-"+t,n);return e}};e.getWidth=function(t,n){return i.h.getWidth(e,t,n)};e.getHeight=function(t,n){return i.h.getHeight(e,t,n)};e.getOffset=function(){return i.h.getOffset(e)};return e};i.calcSlides=function(e){var n=i.slides?i.slides.length:false;i.slides=[];i.displaySlides=[];for(var r=0;r<i.wrapper.childNodes.length;r++){if(i.wrapper.childNodes[r].className){var s=i.wrapper.childNodes[r].className;var o=s.split(/\s+/);for(var u=0;u<o.length;u++){if(o[u]===t.slideClass){i.slides.push(i.wrapper.childNodes[r])}}}}for(r=i.slides.length-1;r>=0;r--){i._extendSwiperSlide(i.slides[r])}if(n===false)return;if(n!==i.slides.length||e){C();N();i.updateActiveSlide();if(i.params.pagination)i.createPagination();i.callPlugins("numberOfSlidesChanged")}};i.createSlide=function(e,n,r){n=n||i.params.slideClass;r=r||t.slideElement;var s=document.createElement(r);s.innerHTML=e||"";s.className=n;return i._extendSwiperSlide(s)};i.appendSlide=function(e,t,n){if(!e)return;if(e.nodeType){return i._extendSwiperSlide(e).append()}else{return i.createSlide(e,t,n).append()}};i.prependSlide=function(e,t,n){if(!e)return;if(e.nodeType){return i._extendSwiperSlide(e).prepend()}else{return i.createSlide(e,t,n).prepend()}};i.insertSlideAfter=function(e,t,n,r){if(typeof e==="undefined")return false;if(t.nodeType){return i._extendSwiperSlide(t).insertAfter(e)}else{return i.createSlide(t,n,r).insertAfter(e)}};i.removeSlide=function(e){if(i.slides[e]){if(t.loop){if(!i.slides[e+i.loopedSlides])return false;i.slides[e+i.loopedSlides].remove();i.removeLoopedSlides();i.calcSlides();i.createLoop()}else i.slides[e].remove();return true}else return false};i.removeLastSlide=function(){if(i.slides.length>0){if(t.loop){i.slides[i.slides.length-1-i.loopedSlides].remove();i.removeLoopedSlides();i.calcSlides();i.createLoop()}else i.slides[i.slides.length-1].remove();return true}else{return false}};i.removeAllSlides=function(){for(var e=i.slides.length-1;e>=0;e--){i.slides[e].remove()}};i.getSlide=function(e){return i.slides[e]};i.getLastSlide=function(){return i.slides[i.slides.length-1]};i.getFirstSlide=function(){return i.slides[0]};i.activeSlide=function(){return i.slides[i.activeIndex]};i.fireCallback=function(){var e=arguments[0];if(Object.prototype.toString.call(e)==="[object Array]"){for(var n=0;n<e.length;n++){if(typeof e[n]==="function"){e[n](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}}else if(Object.prototype.toString.call(e)==="[object String]"){if(t["on"+e])i.fireCallback(t["on"+e],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}else{e(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}};i.addCallback=function(e,t){var n=this,r;if(n.params["on"+e]){if(b(this.params["on"+e])){return this.params["on"+e].push(t)}else if(typeof this.params["on"+e]==="function"){r=this.params["on"+e];this.params["on"+e]=[];this.params["on"+e].push(r);return this.params["on"+e].push(t)}}else{this.params["on"+e]=[];return this.params["on"+e].push(t)}};i.removeCallbacks=function(e){if(i.params["on"+e]){i.params["on"+e]=null}};var w=[];for(var E in i.plugins){if(t[E]){var S=i.plugins[E](i,t[E]);if(S)w.push(S)}}i.callPlugins=function(e,t){if(!t)t={};for(var n=0;n<w.length;n++){if(e in w[n]){w[n][e](t)}}};if((i.browser.ie10||i.browser.ie11)&&!t.onlyExternal){i.wrapper.classList.add("swiper-wp8-"+(d?"horizontal":"vertical"))}if(t.freeMode){i.container.className+=" swiper-free-mode"}i.initialized=false;i.init=function(e,n){var r=i.h.getWidth(i.container,false,t.roundLengths);var s=i.h.getHeight(i.container,false,t.roundLengths);if(r===i.width&&s===i.height&&!e)return;i.width=r;i.height=s;var a,f,c,h,p,v;var m;l=d?r:s;var g=i.wrapper;if(e){i.calcSlides(n)}if(t.slidesPerView==="auto"){var y=0;var b=0;if(t.slidesOffset>0){g.style.paddingLeft="";g.style.paddingRight="";g.style.paddingTop="";g.style.paddingBottom=""}g.style.width="";g.style.height="";if(t.offsetPxBefore>0){if(d)i.wrapperLeft=t.offsetPxBefore;else i.wrapperTop=t.offsetPxBefore}if(t.offsetPxAfter>0){if(d)i.wrapperRight=t.offsetPxAfter;else i.wrapperBottom=t.offsetPxAfter}if(t.centeredSlides){if(d){i.wrapperLeft=(l-this.slides[0].getWidth(true,t.roundLengths))/2;i.wrapperRight=(l-i.slides[i.slides.length-1].getWidth(true,t.roundLengths))/2}else{i.wrapperTop=(l-i.slides[0].getHeight(true,t.roundLengths))/2;i.wrapperBottom=(l-i.slides[i.slides.length-1].getHeight(true,t.roundLengths))/2}}if(d){if(i.wrapperLeft>=0)g.style.paddingLeft=i.wrapperLeft+"px";if(i.wrapperRight>=0)g.style.paddingRight=i.wrapperRight+"px"}else{if(i.wrapperTop>=0)g.style.paddingTop=i.wrapperTop+"px";if(i.wrapperBottom>=0)g.style.paddingBottom=i.wrapperBottom+"px"}v=0;var w=0;i.snapGrid=[];i.slidesGrid=[];c=0;for(m=0;m<i.slides.length;m++){a=i.slides[m].getWidth(true,t.roundLengths);f=i.slides[m].getHeight(true,t.roundLengths);if(t.calculateHeight){c=Math.max(c,f)}var E=d?a:f;if(t.centeredSlides){var S=m===i.slides.length-1?0:i.slides[m+1].getWidth(true,t.roundLengths);var x=m===i.slides.length-1?0:i.slides[m+1].getHeight(true,t.roundLengths);var T=d?S:x;if(E>l){if(t.slidesPerViewFit){i.snapGrid.push(v+i.wrapperLeft);i.snapGrid.push(v+E-l+i.wrapperLeft)}else{for(var N=0;N<=Math.floor(E/(l+i.wrapperLeft));N++){if(N===0)i.snapGrid.push(v+i.wrapperLeft);else i.snapGrid.push(v+i.wrapperLeft+l*N)}}i.slidesGrid.push(v+i.wrapperLeft)}else{i.snapGrid.push(w);i.slidesGrid.push(w)}w+=E/2+T/2}else{if(E>l){if(t.slidesPerViewFit){i.snapGrid.push(v);i.snapGrid.push(v+E-l)}else{if(l!==0){for(var C=0;C<=Math.floor(E/l);C++){i.snapGrid.push(v+l*C)}}else{i.snapGrid.push(v)}}}else{i.snapGrid.push(v)}i.slidesGrid.push(v)}v+=E;y+=a;b+=f}if(t.calculateHeight)i.height=c;if(d){u=y+i.wrapperRight+i.wrapperLeft;g.style.width=y+"px";g.style.height=i.height+"px"}else{u=b+i.wrapperTop+i.wrapperBottom;g.style.width=i.width+"px";g.style.height=b+"px"}}else if(t.scrollContainer){g.style.width="";g.style.height="";h=i.slides[0].getWidth(true,t.roundLengths);p=i.slides[0].getHeight(true,t.roundLengths);u=d?h:p;g.style.width=h+"px";g.style.height=p+"px";o=d?h:p}else{if(t.calculateHeight){c=0;p=0;if(!d)i.container.style.height="";g.style.height="";for(m=0;m<i.slides.length;m++){i.slides[m].style.height="";c=Math.max(i.slides[m].getHeight(true),c);if(!d)p+=i.slides[m].getHeight(true)}f=c;i.height=f;if(d)p=f;else{l=f;i.container.style.height=l+"px"}}else{f=d?i.height:i.height/t.slidesPerView;if(t.roundLengths)f=Math.ceil(f);p=d?i.height:i.slides.length*f}a=d?i.width/t.slidesPerView:i.width;if(t.roundLengths)a=Math.ceil(a);h=d?i.slides.length*a:i.width;o=d?a:f;if(t.offsetSlidesBefore>0){if(d)i.wrapperLeft=o*t.offsetSlidesBefore;else i.wrapperTop=o*t.offsetSlidesBefore}if(t.offsetSlidesAfter>0){if(d)i.wrapperRight=o*t.offsetSlidesAfter;else i.wrapperBottom=o*t.offsetSlidesAfter}if(t.offsetPxBefore>0){if(d)i.wrapperLeft=t.offsetPxBefore;else i.wrapperTop=t.offsetPxBefore}if(t.offsetPxAfter>0){if(d)i.wrapperRight=t.offsetPxAfter;else i.wrapperBottom=t.offsetPxAfter}if(t.centeredSlides){if(d){i.wrapperLeft=(l-o)/2;i.wrapperRight=(l-o)/2}else{i.wrapperTop=(l-o)/2;i.wrapperBottom=(l-o)/2}}if(d){if(i.wrapperLeft>0)g.style.paddingLeft=i.wrapperLeft+"px";if(i.wrapperRight>0)g.style.paddingRight=i.wrapperRight+"px"}else{if(i.wrapperTop>0)g.style.paddingTop=i.wrapperTop+"px";if(i.wrapperBottom>0)g.style.paddingBottom=i.wrapperBottom+"px"}u=d?h+i.wrapperRight+i.wrapperLeft:p+i.wrapperTop+i.wrapperBottom;if(parseFloat(h)>0&&(!t.cssWidthAndHeight||t.cssWidthAndHeight==="height")){g.style.width=h+"px"}if(parseFloat(p)>0&&(!t.cssWidthAndHeight||t.cssWidthAndHeight==="width")){g.style.height=p+"px"}v=0;i.snapGrid=[];i.slidesGrid=[];for(m=0;m<i.slides.length;m++){i.snapGrid.push(v);i.slidesGrid.push(v);v+=o;if(parseFloat(a)>0&&(!t.cssWidthAndHeight||t.cssWidthAndHeight==="height")){i.slides[m].style.width=a+"px"}if(parseFloat(f)>0&&(!t.cssWidthAndHeight||t.cssWidthAndHeight==="width")){i.slides[m].style.height=f+"px"}}}if(!i.initialized){i.callPlugins("onFirstInit");if(t.onFirstInit)i.fireCallback(t.onFirstInit,i)}else{i.callPlugins("onInit");if(t.onInit)i.fireCallback(t.onInit,i)}i.initialized=true};i.reInit=function(e){i.init(true,e)};i.resizeFix=function(e){i.callPlugins("beforeResizeFix");i.init(t.resizeReInit||e);if(!t.freeMode){i.swipeTo(t.loop?i.activeLoopIndex:i.activeIndex,0,false);if(t.autoplay){if(i.support.transitions&&typeof G!=="undefined"){if(typeof G!=="undefined"){clearTimeout(G);G=undefined;i.startAutoplay()}}else{if(typeof Y!=="undefined"){clearInterval(Y);Y=undefined;i.startAutoplay()}}}}else if(i.getWrapperTranslate()<-x()){i.setWrapperTransition(0);i.setWrapperTranslate(-x())}i.callPlugins("afterResizeFix")};i.destroy=function(){var e=i.h.removeEventListener;var n=t.eventTarget==="wrapper"?i.wrapper:i.container;if(!(i.browser.ie10||i.browser.ie11)){if(i.support.touch){e(n,"touchstart",I);e(n,"touchmove",U);e(n,"touchend",z)}if(t.simulateTouch){e(n,"mousedown",I);e(document,"mousemove",U);e(document,"mouseup",z)}}else{e(n,i.touchEvents.touchStart,I);e(document,i.touchEvents.touchMove,U);e(document,i.touchEvents.touchEnd,z)}if(t.autoResize){e(window,"resize",i.resizeFix)}C();if(t.paginationClickable){J()}if(t.mousewheelControl&&i._wheelEvent){e(i.container,i._wheelEvent,A)}if(t.keyboardControl){e(document,"keydown",k)}if(t.autoplay){i.stopAutoplay()}i.callPlugins("onDestroy");i=null};i.disableKeyboardControl=function(){t.keyboardControl=false;i.h.removeEventListener(document,"keydown",k)};i.enableKeyboardControl=function(){t.keyboardControl=true;i.h.addEventListener(document,"keydown",k)};var L=(new Date).getTime();i.disableMousewheelControl=function(){if(!i._wheelEvent)return false;t.mousewheelControl=false;i.h.removeEventListener(i.container,i._wheelEvent,A);return true};i.enableMousewheelControl=function(){if(!i._wheelEvent)return false;t.mousewheelControl=true;i.h.addEventListener(i.container,i._wheelEvent,A);return true};if(t.grabCursor){var O=i.container.style;O.cursor="move";O.cursor="grab";O.cursor="-moz-grab";O.cursor="-webkit-grab"}i.allowSlideClick=true;i.allowLinks=true;var B=false;var j;var F=true;var q,R;i.swipeNext=function(e){if(!e&&t.loop)i.fixLoop();if(!e&&t.autoplay)i.stopAutoplay(true);i.callPlugins("onSwipeNext");var n=Math.floor(i.getWrapperTranslate());var r=n;if(t.slidesPerView==="auto"){for(var s=0;s<i.snapGrid.length;s++){if(-n>=i.snapGrid[s]&&-n<i.snapGrid[s+1]){r=-i.snapGrid[s+1];break}}}else{var u=o*t.slidesPerGroup;r=-(Math.floor(Math.abs(n)/Math.floor(u))*u+u)}if(r<-x()){r=-x()}if(r===n)return false;V(r,"next");return true};i.swipePrev=function(e){if(!e&&t.loop)i.fixLoop();if(!e&&t.autoplay)i.stopAutoplay(true);i.callPlugins("onSwipePrev");var n=Math.ceil(i.getWrapperTranslate());var r;if(t.slidesPerView==="auto"){r=0;for(var s=1;s<i.snapGrid.length;s++){if(-n===i.snapGrid[s]){r=-i.snapGrid[s-1];break}if(-n>i.snapGrid[s]&&-n<i.snapGrid[s+1]){r=-i.snapGrid[s];break}}}else{var u=o*t.slidesPerGroup;r=-(Math.ceil(-n/u)-1)*u}if(r>0)r=0;if(r===n)return false;V(r,"prev");return true};i.swipeReset=function(){i.callPlugins("onSwipeReset");var e=i.getWrapperTranslate();var n=o*t.slidesPerGroup;var r;var s=-x();if(t.slidesPerView==="auto"){r=0;for(var u=0;u<i.snapGrid.length;u++){if(-e===i.snapGrid[u])return;if(-e>=i.snapGrid[u]&&-e<i.snapGrid[u+1]){if(i.positions.diff>0)r=-i.snapGrid[u+1];else r=-i.snapGrid[u];break}}if(-e>=i.snapGrid[i.snapGrid.length-1])r=-i.snapGrid[i.snapGrid.length-1];if(e<=-x())r=-x()}else{r=e<0?Math.round(e/n)*n:0;if(e<=-x())r=-x()}if(t.scrollContainer){r=e<0?e:0}if(r<-x()){r=-x()}if(t.scrollContainer&&l>o){r=0}if(r===e)return false;V(r,"reset");return true};i.swipeTo=function(e,n,r){e=parseInt(e,10);i.callPlugins("onSwipeTo",{index:e,speed:n});if(t.loop)e=e+i.loopedSlides;var s=i.getWrapperTranslate();if(e>i.slides.length-1||e<0)return;var u;if(t.slidesPerView==="auto"){u=-i.slidesGrid[e]}else{u=-e*o}if(u<-x()){u=-x()}if(u===s)return false;r=r===false?false:true;V(u,"to",{index:e,speed:n,runCallbacks:r});return true};i._queueStartCallbacks=false;i._queueEndCallbacks=false;i.updateActiveSlide=function(e){if(!i.initialized)return;if(i.slides.length===0)return;i.previousIndex=i.activeIndex;if(typeof e==="undefined")e=i.getWrapperTranslate();if(e>0)e=0;var n;if(t.slidesPerView==="auto"){var r=0;i.activeIndex=i.slidesGrid.indexOf(-e);if(i.activeIndex<0){for(n=0;n<i.slidesGrid.length-1;n++){if(-e>i.slidesGrid[n]&&-e<i.slidesGrid[n+1]){break}}var s=Math.abs(i.slidesGrid[n]+e);var u=Math.abs(i.slidesGrid[n+1]+e);if(s<=u)i.activeIndex=n;else i.activeIndex=n+1}}else{i.activeIndex=Math[t.visibilityFullFit?"ceil":"round"](-e/o)}if(i.activeIndex===i.slides.length)i.activeIndex=i.slides.length-1;if(i.activeIndex<0)i.activeIndex=0;if(!i.slides[i.activeIndex])return;i.calcVisibleSlides(e);if(i.support.classList){var a;for(n=0;n<i.slides.length;n++){a=i.slides[n];a.classList.remove(t.slideActiveClass);if(i.visibleSlides.indexOf(a)>=0){a.classList.add(t.slideVisibleClass)}else{a.classList.remove(t.slideVisibleClass)}}i.slides[i.activeIndex].classList.add(t.slideActiveClass)}else{var f=new RegExp("\\s*"+t.slideActiveClass);var l=new RegExp("\\s*"+t.slideVisibleClass);for(n=0;n<i.slides.length;n++){i.slides[n].className=i.slides[n].className.replace(f,"").replace(l,"");if(i.visibleSlides.indexOf(i.slides[n])>=0){i.slides[n].className+=" "+t.slideVisibleClass}}i.slides[i.activeIndex].className+=" "+t.slideActiveClass}if(t.loop){var c=i.loopedSlides;i.activeLoopIndex=i.activeIndex-c;if(i.activeLoopIndex>=i.slides.length-c*2){i.activeLoopIndex=i.slides.length-c*2-i.activeLoopIndex}if(i.activeLoopIndex<0){i.activeLoopIndex=i.slides.length-c*2+i.activeLoopIndex}if(i.activeLoopIndex<0)i.activeLoopIndex=0}else{i.activeLoopIndex=i.activeIndex}if(t.pagination){i.updatePagination(e)}};i.createPagination=function(e){if(t.paginationClickable&&i.paginationButtons){J()}i.paginationContainer=t.pagination.nodeType?t.pagination:r(t.pagination)[0];if(t.createPagination){var n="";var s=i.slides.length;var o=s;if(t.loop)o-=i.loopedSlides*2;for(var u=0;u<o;u++){n+="<"+t.paginationElement+' class="'+t.paginationElementClass+'"></'+t.paginationElement+">"}i.paginationContainer.innerHTML=n}i.paginationButtons=r("."+t.paginationElementClass,i.paginationContainer);if(!e)i.updatePagination();i.callPlugins("onCreatePagination");if(t.paginationClickable){K()}};i.updatePagination=function(e){if(!t.pagination)return;if(i.slides.length<1)return;var n=r("."+t.paginationActiveClass,i.paginationContainer);if(!n)return;var s=i.paginationButtons;if(s.length===0)return;for(var o=0;o<s.length;o++){s[o].className=t.paginationElementClass}var u=t.loop?i.loopedSlides:0;if(t.paginationAsRange){if(!i.visibleSlides)i.calcVisibleSlides(e);var a=[];var f;for(f=0;f<i.visibleSlides.length;f++){var l=i.slides.indexOf(i.visibleSlides[f])-u;if(t.loop&&l<0){l=i.slides.length-i.loopedSlides*2+l}if(t.loop&&l>=i.slides.length-i.loopedSlides*2){l=i.slides.length-i.loopedSlides*2-l;l=Math.abs(l)}a.push(l)}for(f=0;f<a.length;f++){if(s[a[f]])s[a[f]].className+=" "+t.paginationVisibleClass}if(t.loop){if(s[i.activeLoopIndex]!==undefined){s[i.activeLoopIndex].className+=" "+t.paginationActiveClass}}else{s[i.activeIndex].className+=" "+t.paginationActiveClass}}else{if(t.loop){if(s[i.activeLoopIndex])s[i.activeLoopIndex].className+=" "+t.paginationActiveClass+" "+t.paginationVisibleClass}else{s[i.activeIndex].className+=" "+t.paginationActiveClass+" "+t.paginationVisibleClass}}};i.calcVisibleSlides=function(e){var n=[];var r=0,s=0,u=0;if(d&&i.wrapperLeft>0)e=e+i.wrapperLeft;if(!d&&i.wrapperTop>0)e=e+i.wrapperTop;for(var a=0;a<i.slides.length;a++){r+=s;if(t.slidesPerView==="auto")s=d?i.h.getWidth(i.slides[a],true,t.roundLengths):i.h.getHeight(i.slides[a],true,t.roundLengths);else s=o;u=r+s;var f=false;if(t.visibilityFullFit){if(r>=-e&&u<=-e+l)f=true;if(r<=-e&&u>=-e+l)f=true}else{if(u>-e&&u<=-e+l)f=true;if(r>=-e&&r<-e+l)f=true;if(r<-e&&u>-e+l)f=true}if(f)n.push(i.slides[a])}if(n.length===0)n=[i.slides[i.activeIndex]];i.visibleSlides=n};var G,Y;i.startAutoplay=function(){if(i.support.transitions){if(typeof G!=="undefined")return false;if(!t.autoplay)return;i.callPlugins("onAutoplayStart");if(t.onAutoplayStart)i.fireCallback(t.onAutoplayStart,i);Z()}else{if(typeof Y!=="undefined")return false;if(!t.autoplay)return;i.callPlugins("onAutoplayStart");if(t.onAutoplayStart)i.fireCallback(t.onAutoplayStart,i);Y=setInterval(function(){if(t.loop){i.fixLoop();i.swipeNext(true)}else if(!i.swipeNext(true)){if(!t.autoplayStopOnLast)i.swipeTo(0);else{clearInterval(Y);Y=undefined}}},t.autoplay)}};i.stopAutoplay=function(e){if(i.support.transitions){if(!G)return;if(G)clearTimeout(G);G=undefined;if(e&&!t.autoplayDisableOnInteraction){i.wrapperTransitionEnd(function(){Z()})}i.callPlugins("onAutoplayStop");if(t.onAutoplayStop)i.fireCallback(t.onAutoplayStop,i)}else{if(Y)clearInterval(Y);Y=undefined;i.callPlugins("onAutoplayStop");if(t.onAutoplayStop)i.fireCallback(t.onAutoplayStop,i)}};i.loopCreated=false;i.removeLoopedSlides=function(){if(i.loopCreated){for(var e=0;e<i.slides.length;e++){if(i.slides[e].getData("looped")===true)i.wrapper.removeChild(i.slides[e])}}};i.createLoop=function(){if(i.slides.length===0)return;if(t.slidesPerView==="auto"){i.loopedSlides=t.loopedSlides||1}else{i.loopedSlides=t.slidesPerView+t.loopAdditionalSlides}if(i.loopedSlides>i.slides.length){i.loopedSlides=i.slides.length}var e="",n="",r;var o="";var u=i.slides.length;var a=Math.floor(i.loopedSlides/u);var f=i.loopedSlides%u;for(r=0;r<a*u;r++){var l=r;if(r>=u){var c=Math.floor(r/u);l=r-u*c}o+=i.slides[l].outerHTML}for(r=0;r<f;r++){n+=X(t.slideDuplicateClass,i.slides[r].outerHTML)}for(r=u-f;r<u;r++){e+=X(t.slideDuplicateClass,i.slides[r].outerHTML)}var h=e+o+s.innerHTML+o+n;s.innerHTML=h;i.loopCreated=true;i.calcSlides();for(r=0;r<i.slides.length;r++){if(r<i.loopedSlides||r>=i.slides.length-i.loopedSlides)i.slides[r].setData("looped",true)}i.callPlugins("onCreateLoop")};i.fixLoop=function(){var e;if(i.activeIndex<i.loopedSlides){e=i.slides.length-i.loopedSlides*3+i.activeIndex;i.swipeTo(e,0,false)}else if(t.slidesPerView==="auto"&&i.activeIndex>=i.loopedSlides*2||i.activeIndex>i.slides.length-t.slidesPerView*2){e=-i.slides.length+i.activeIndex+i.loopedSlides;i.swipeTo(e,0,false)}};i.loadSlides=function(){var e="";i.activeLoaderIndex=0;var n=t.loader.slides;var r=t.loader.loadAllSlides?n.length:t.slidesPerView*(1+t.loader.surroundGroups);for(var s=0;s<r;s++){if(t.loader.slidesHTMLType==="outer")e+=n[s];else{e+="<"+t.slideElement+' class="'+t.slideClass+'" data-swiperindex="'+s+'">'+n[s]+"</"+t.slideElement+">"}}i.wrapper.innerHTML=e;i.calcSlides(true);if(!t.loader.loadAllSlides){i.wrapperTransitionEnd(i.reloadSlides,true)}};i.reloadSlides=function(){var e=t.loader.slides;var n=parseInt(i.activeSlide().data("swiperindex"),10);if(n<0||n>e.length-1)return;i.activeLoaderIndex=n;var r=Math.max(0,n-t.slidesPerView*t.loader.surroundGroups);var s=Math.min(n+t.slidesPerView*(1+t.loader.surroundGroups)-1,e.length-1);if(n>0){var u=-o*(n-r);i.setWrapperTranslate(u);i.setWrapperTransition(0)}var a;if(t.loader.logic==="reload"){i.wrapper.innerHTML="";var f="";for(a=r;a<=s;a++){f+=t.loader.slidesHTMLType==="outer"?e[a]:"<"+t.slideElement+' class="'+t.slideClass+'" data-swiperindex="'+a+'">'+e[a]+"</"+t.slideElement+">"}i.wrapper.innerHTML=f}else{var l=1e3;var c=0;for(a=0;a<i.slides.length;a++){var h=i.slides[a].data("swiperindex");if(h<r||h>s){i.wrapper.removeChild(i.slides[a])}else{l=Math.min(h,l);c=Math.max(h,c)}}for(a=r;a<=s;a++){var p;if(a<l){p=document.createElement(t.slideElement);p.className=t.slideClass;p.setAttribute("data-swiperindex",a);p.innerHTML=e[a];i.wrapper.insertBefore(p,i.wrapper.firstChild)}if(a>c){p=document.createElement(t.slideElement);p.className=t.slideClass;p.setAttribute("data-swiperindex",a);p.innerHTML=e[a];i.wrapper.appendChild(p)}}}i.reInit(true)};et()};Swiper.prototype={plugins:{},wrapperTransitionEnd:function(e,t){"use strict";function o(u){if(u.target!==r)return;e(n);if(n.params.queueEndCallbacks)n._queueEndCallbacks=false;if(!t){for(s=0;s<i.length;s++){n.h.removeEventListener(r,i[s],o)}}}var n=this,r=n.wrapper,i=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s;if(e){for(s=0;s<i.length;s++){n.h.addEventListener(r,i[s],o)}}},getWrapperTranslate:function(e){"use strict";var t=this.wrapper,n,r,i,s;if(typeof e==="undefined"){e=this.params.mode==="horizontal"?"x":"y"}if(this.support.transforms&&this.params.useCSS3Transforms){i=window.getComputedStyle(t,null);if(window.WebKitCSSMatrix){s=new WebKitCSSMatrix(i.webkitTransform==="none"?"":i.webkitTransform)}else{s=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,");n=s.toString().split(",")}if(e==="x"){if(window.WebKitCSSMatrix)r=s.m41;else if(n.length===16)r=parseFloat(n[12]);else r=parseFloat(n[4])}if(e==="y"){if(window.WebKitCSSMatrix)r=s.m42;else if(n.length===16)r=parseFloat(n[13]);else r=parseFloat(n[5])}}else{if(e==="x")r=parseFloat(t.style.left,10)||0;if(e==="y")r=parseFloat(t.style.top,10)||0}return r||0},setWrapperTranslate:function(e,t,n){"use strict";var r=this.wrapper.style,i={x:0,y:0,z:0},s;if(arguments.length===3){i.x=e;i.y=t;i.z=n}else{if(typeof t==="undefined"){t=this.params.mode==="horizontal"?"x":"y"}i[t]=e}if(this.support.transforms&&this.params.useCSS3Transforms){s=this.support.transforms3d?"translate3d("+i.x+"px, "+i.y+"px, "+i.z+"px)":"translate("+i.x+"px, "+i.y+"px)";r.webkitTransform=r.MsTransform=r.msTransform=r.MozTransform=r.OTransform=r.transform=s}else{r.left=i.x+"px";r.top=i.y+"px"}this.callPlugins("onSetWrapperTransform",i);if(this.params.onSetWrapperTransform)this.fireCallback(this.params.onSetWrapperTransform,this,i)},setWrapperTransition:function(e){"use strict";var t=this.wrapper.style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e/1e3+"s";this.callPlugins("onSetWrapperTransition",{duration:e});if(this.params.onSetWrapperTransition)this.fireCallback(this.params.onSetWrapperTransition,this,e)},h:{getWidth:function(e,t,n){"use strict";var r=window.getComputedStyle(e,null).getPropertyValue("width");var i=parseFloat(r);if(isNaN(i)||r.indexOf("%")>0||i<0){i=e.offsetWidth-parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-right"))}if(t)i+=parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-right"));if(n)return Math.ceil(i);else return i},getHeight:function(e,t,n){"use strict";if(t)return e.offsetHeight;var r=window.getComputedStyle(e,null).getPropertyValue("height");var i=parseFloat(r);if(isNaN(i)||r.indexOf("%")>0||i<0){i=e.offsetHeight-parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-bottom"))}if(t)i+=parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(e,null).getPropertyValue("padding-bottom"));if(n)return Math.ceil(i);else return i},getOffset:function(e){"use strict";var t=e.getBoundingClientRect();var n=document.body;var r=e.clientTop||n.clientTop||0;var i=e.clientLeft||n.clientLeft||0;var s=window.pageYOffset||e.scrollTop;var o=window.pageXOffset||e.scrollLeft;if(document.documentElement&&!window.pageYOffset){s=document.documentElement.scrollTop;o=document.documentElement.scrollLeft}return{top:t.top+s-r,left:t.left+o-i}},windowWidth:function(){"use strict";if(window.innerWidth)return window.innerWidth;else if(document.documentElement&&document.documentElement.clientWidth)return document.documentElement.clientWidth},windowHeight:function(){"use strict";if(window.innerHeight)return window.innerHeight;else if(document.documentElement&&document.documentElement.clientHeight)return document.documentElement.clientHeight},windowScroll:function(){"use strict";if(typeof pageYOffset!=="undefined"){return{left:window.pageXOffset,top:window.pageYOffset}}else if(document.documentElement){return{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}}},addEventListener:function(e,t,n,r){"use strict";if(typeof r==="undefined"){r=false}if(e.addEventListener){e.addEventListener(t,n,r)}else if(e.attachEvent){e.attachEvent("on"+t,n)}},removeEventListener:function(e,t,n,r){"use strict";if(typeof r==="undefined"){r=false}if(e.removeEventListener){e.removeEventListener(t,n,r)}else if(e.detachEvent){e.detachEvent("on"+t,n)}}},setTransform:function(e,t){"use strict";var n=e.style;n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform=t},setTranslate:function(e,t){"use strict";var n=e.style;var r={x:t.x||0,y:t.y||0,z:t.z||0};var i=this.support.transforms3d?"translate3d("+r.x+"px,"+r.y+"px,"+r.z+"px)":"translate("+r.x+"px,"+r.y+"px)";n.webkitTransform=n.MsTransform=n.msTransform=n.MozTransform=n.OTransform=n.transform=i;if(!this.support.transforms){n.left=r.x+"px";n.top=r.y+"px"}},setTransition:function(e,t){"use strict";var n=e.style;n.webkitTransitionDuration=n.MsTransitionDuration=n.msTransitionDuration=n.MozTransitionDuration=n.OTransitionDuration=n.transitionDuration=t+"ms"},support:{touch:window.Modernizr&&Modernizr.touch===true||function(){"use strict";return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===true||function(){"use strict";var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),transforms:window.Modernizr&&Modernizr.csstransforms===true||function(){"use strict";var e=document.createElement("div").style;return"transform"in e||"WebkitTransform"in e||"MozTransform"in e||"msTransform"in e||"MsTransform"in e||"OTransform"in e}(),transitions:window.Modernizr&&Modernizr.csstransitions===true||function(){"use strict";var e=document.createElement("div").style;return"transition"in e||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"MsTransition"in e||"OTransition"in e}(),classList:function(){"use strict";var e=document.createElement("div");return"classList"in e}()},browser:{ie8:function(){"use strict";var e=-1;if(navigator.appName==="Microsoft Internet Explorer"){var t=navigator.userAgent;var n=new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);if(n.exec(t)!==null)e=parseFloat(RegExp.$1)}return e!==-1&&e<9}(),ie10:window.navigator.msPointerEnabled,ie11:window.navigator.pointerEnabled}};if(window.jQuery||window.Zepto){(function(e){"use strict";e.fn.swiper=function(t){var n;this.each(function(r){var i=e(this);if(!i.data("swiper")){var s=new Swiper(i[0],t);if(!r)n=s;i.data("swiper",s)}});return n}})(window.jQuery||window.Zepto)}if(typeof module!=="undefined"){module.exports=Swiper}if(typeof define==="function"&&define.amd){define([],function(){"use strict";return Swiper})}

  (function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);return aR};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if(I()||V()){bc=aF(bd,bb,l)}else{if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.allowPageScroll===m||aX()){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));


  });


  (function($) {
    $(function() {

      setTimeout(function(){
        $("#frame1_text1").fadeIn(400);
      }, 250);

      setTimeout(function(){
        $("#frame1_text2").fadeIn(400);
      }, 1250);

      setTimeout(function(){
        $("#frame1_text3").fadeIn(400);
      }, 2250);

      setTimeout(function(){
        // TXM.api.track('navigation', 'next', 'step 1');
        $("#frame1").fadeOut(1000);
        $("#frame2").fadeIn(1000);
        activateFrame2();
      }, 5000);

      function activateFrame2(){
        var mySwiper = $('.swiper-container').swiper({
          mode:'horizontal',
          followFinger: false,
          loop: false,
          pagination: '.pagination',
          createPagination: true
        });

        // assign arrow clicks
         $("#arrow-right1").on('click', function(e){
          e.preventDefault();
          mySwiper.swipeNext();
          TXM.api.track('other', 'clickArrow', 'frame2');
        });

         $("#arrow-right2").on('click', function(e){
          e.preventDefault();
          mySwiper.swipeNext();
          TXM.api.track('other', 'clickArrow', 'frame3');
        });

         $("#arrow-right3").on('click', function(e){
          e.preventDefault();
          mySwiper.swipeNext();
          TXM.api.track('other', 'clickArrow', 'frame4');
        });

        $("#arrow-right4").on('click', function(e){
          e.preventDefault();
          TXM.api.track('navigation', 'next', 'step 2');
          TXM.api.track('other', 'clickArrow', 'frame5');
          $("#frame2").fadeOut(300);
          $("#frame2").addClass("slideOut");
          $("#frame3").addClass("slideIn");
          $("#frame3").fadeIn(300);
        });


          $("#swiper-slide4").swipe( {
            swipe:function(event, direction, distance, duration, fingerCount) {
              if( direction == "left"){
                event.preventDefault();
                TXM.api.track('navigation', 'next', 'step 2');
                TXM.api.track('other', 'swipeLeft', 'frame5');
                $("#frame2").fadeOut(300);
                $("#frame2").addClass("slideOut");
                $("#frame3").addClass("slideIn");
                $("#frame3").fadeIn(300);
              }else if(drection = "right"){
                TXM.api.track('other', 'swipeRight', 'frame5');
              };
              
            },
            threshold:25
          });

          $("#swiper-slide1").swipe( {
            swipe:function(event, direction, distance, duration, fingerCount) {
              if( direction == "left"){
                event.preventDefault();
                mySwiper.swipeNext();
                TXM.api.track('other', 'swipeLeft', 'frame2');
              }else if(drection = "right"){
                event.preventDefault();
                mySwiper.swipePrev();
                TXM.api.track('other', 'swipeRight', 'frame2');
              };
            },
            threshold:25
          });

          $("#swiper-slide2").swipe( {
            swipe:function(event, direction, distance, duration, fingerCount) {
              if( direction == "left"){
                event.preventDefault();
                mySwiper.swipeNext();
                TXM.api.track('other', 'swipeLeft', 'frame3');
              }else if(drection = "right"){
                event.preventDefault();
                mySwiper.swipePrev();
                TXM.api.track('other', 'swipeRight', 'frame3');
              };
            },
            threshold:25
          });

          $("#swiper-slide3").swipe( {
            swipe:function(event, direction, distance, duration, fingerCount) {
              if( direction == "left"){
                event.preventDefault();
                mySwiper.swipeNext();
                TXM.api.track('other', 'swipeLeft', 'frame4');
              }else if(drection = "right"){
                event.preventDefault();
                mySwiper.swipePrev();
                TXM.api.track('other', 'swipeRight', 'frame4');
              };
            },
            threshold:25
          });



      }; // end activate frame2


      // assign end engagement click event to frame 3
      $("#frame3").on('click', function(e){
        e.preventDefault();
        TXM.utils.popupWebsite('http://www.xbox.com/', true);
      });


    });
  })(jQuery);
});

TXM.dispatcher.dispatchEvent("INTERACTIVE_ASSET_READY");