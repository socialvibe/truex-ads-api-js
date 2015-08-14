var originalWidth = 640;
var originalHeight = 980;
var newWidth = 360;
var newHeight = 540;
var serviceUrl = 'http://media.truex.com/m/activties/emirates_mobile/';
var assets = [];

var parseConfig = function(config) {
  $('body').append($('<div id="ad"/>').hide());

  var layout = config.steps.reverse();

  for (var i = 0; i < layout.length; i++) {
    parseGroup(layout[i], i);
  }
};

var parseGroup = function(layer, index) {
  var elements = layer.controls;

  var step = $('<div id="'+ layer.step +'" class="step"/>');
  step.css('z-index', index);

  for (var i = 0; i < elements.length; i++) {
    var el = addElement(elements[i], i);
    step.append(el);
  }

  $('#ad').append(step);
};

var addElement = function(el, index) {
  var attributes = parseElement(el);
  attributes.css = convertAttributes(attributes.css);
  attributes.css['z-index'] = -index;

  var div = $('<div id="'+ attributes.id +'" class="element"/>');
  var img = $('<img src="'+ attributes.src +'"/>');
  img.css({
    width: attributes.css.width,
    height: attributes.css.height
  });
  div.css(attributes.css);
  div.append(img);

  assets.push(attributes.src);

  return div;
};

var parseElement = function(el) {
  var n = el.name.replace(' ', '_').split('.');

  return {
    id: n[0],
    src: serviceUrl + 'assets/' + el.name, // remote
    css: {
      top: el.y + 'px',
      left: el.x + 'px',
      width: el.width + 'px',
      height: el.height + 'px'
    }
  };
};

var convertAttributes = function(obj) {
  var y = parseFloat(obj.top) / originalHeight * newHeight;
  var x = parseFloat(obj.left) / originalWidth * newWidth;
  var w = parseFloat(obj.width) / originalWidth * newWidth;
  var h = parseFloat(obj.height) / originalHeight * newHeight;

  return {
    top: y + 'px',
    left: x + 'px',
    width: w + 'px',
    height: h + 'px'
  };
};


$.getJSON(serviceUrl + 'emirates_mobile.json', function(config) {
  $('<link rel="stylesheet" href="' + serviceUrl + 'app.min.css">').appendTo('head');

  parseConfig(config);
  TXM.creative.init();

  TXM.dispatcher.addEventListenerOnce('ENGAGEMENT_STARTED', function() {
    TXM.creative.showAd();
  });
});


// TXM = {};
TXM.creative = {
  _engagement: null,
  _images: {},
  _totalAssets: 0,
  _loadedAssets: 0,
  _tags: {},
  _startIndex: 1,

  init: function() {
    TXM.creative._totalAssets = assets.length;

    TXM.creative._loadImages(assets);
  },

  showAd: function() {
    TXM.creative._setup();

    $('#ad').fadeIn(500);
  },

  _onAssetLoaded: function() {
    TXM.creative._loadedAssets += 1;
    TXM.dispatcher.dispatchEvent('ENGAGEMENT_ASSET_LOADING_PROGRESS', TXM.creative._loadedAssets/TXM.creative._totalAssets);

    if (TXM.creative._loadedAssets === TXM.creative._totalAssets) {
      TXM.dispatcher.dispatchEvent('INTERACTIVE_ASSET_READY');
    }
  },

  _loadImages: function(urls) {
    for (var i = 0; i < urls.length; i++) {
      var url = urls[i];
      TXM.creative._images[url] = $("<img />").attr("src", url).load(TXM.creative._onAssetLoaded);
    }
  },

  _setup: function() {
    $('#ad #background, #ad #ui').addClass('ignore-clicks');
    $('#ad').children().not('#background, #ui').hide();
    $('#ad #ui').children('#left, #right').addClass('capture-clicks');
    $('#ad #f1 #frame_1_btn').css('left', '36px');

    $('#frame_1_btn, #frame_2_btn, #frame_3_btn, #frame_4_btn, #frame_5_btn').addClass('capture-clicks').on('click', function() {
      var label;
      switch ($(this).attr('id')) {
        case 'frame_1_btn':
          label = 'Being There Click Out';
          break;
        case 'frame_2_btn':
          label = 'Far East Click Out';
          break;
        case 'frame_3_btn':
          label = 'Indian Ocean Click Out';
          break;
        case 'frame_4_btn':
          label = 'India Click Out';
          break;
        case 'frame_5_btn':
          label = 'Africa Click Out';
          break;
      }

      TXM.api.track('other', label);
      TXM.utils.popupWebsite('https://ad.doubleclick.net/ddm/trackclk/N5716.1849358TRUEXMEDIAINC/B8829681.119595550;dc_trk_aid=292482039;dc_trk_cid=63738011', true);
    });

    TXM.dispatcher.addEventListenerOnce('ENGAGEMENT_CREDITED', function() {
        TXM.utils.loadExternalScript('http://cdn.doubleverify.com/dvtp_src.js?ctx=2035955&cmp=8829681&sid=2052827&plc=119595550&num=&adid=&advid=2035956&adsrv=1&region=30&btreg=&btadsrv=&crt=&crtname=&chnl=&unit=&pid=&uid=&tagtype=&dvtagver=6.1.src');
    });

    TXM.creative._setupSlide();

    TXM.creative._frame1();
  },

  _frame1: function() {
    TXM.api.setCurrentStep(1);
    
    var self = this;

    this.w = $('#f1 #video').css('width');
    this.h = $('#f1 #video').css('height');
    this.x = $('#f1 #video').css('left');
    this.y = $('#f1 #video').css('top');

    TXM.creative._setupVideos();

    var frame = $('#ad #f1');
    frame.children().not('#frame_1_bg, #video').hide();
    frame.children('#frame_1_btn').css('z-index', '-1');
    frame.children('#frame_1_text').css('z-index', '-2');
    frame.show();
    $('#ad').addClass('active');

    setTimeout(function() {
      $('#ad #f1 #frame_1_text').fadeIn(500);
      self.buttonInterval = setTimeout(function() {
        $('#ad #f1 #frame_1_btn').fadeIn(500);
      }, 14000);
    }, 250);
  },

  _showSlide: function(index) {
    clearTimeout(this.buttonInterval);

    $('#ad').removeClass('active');
    // this._video.get(0).pause();

    var label;
    switch (TXM.creative._startIndex) {
      case 1:
        label = 'Being There Choice';
        break;
      case 2:
        label = 'Far East Choice';
        break;
      case 3:
        label = 'Indian Ocean Choice';
        break;
      case 4:
        label = 'India Choice';
        break;
      case 5:
        label = 'Africa Choice';
        break;
    }
    TXM.api.track('other', label);

    var newIndex = TXM.creative._startIndex;
    var lastIndex = index;

    var frame = $('#ad #f1');

    $('#dot_active').fadeOut(500, function() {
      $('#dot_'+ newIndex).prepend($(this).css({top:0,left:0,'z-index':1}).fadeIn(500));
    });

    frame.children('#frame_'+ lastIndex +'_bg').fadeOut(500, function() {
      frame.children('#frame_'+ newIndex +'_bg').fadeIn(500, function() {
        frame.children('#frame_'+ newIndex +'_text').fadeIn(500);
        setTimeout(function() {
          frame.children('#frame_'+ newIndex +'_btn').fadeIn(500);
          $('#ad').addClass('active');
        }, 250);
      });
    });

    setTimeout(function() {
      frame.children('#frame_'+ lastIndex +'_text').fadeOut(500);
      frame.children('#frame_'+ lastIndex +'_btn').fadeOut(500);
      if (newIndex === 1) {
        TXM.creative._setupVideos();
      } else {
        $('#video').remove();
      }
    }, 250);
  },

  _setupSlide: function() {
    $('#ui').children('#dot_1, #dot_2, #dot_3, #dot_4, #dot_5').addClass('capture-clicks');

    $(document).on('click', '#dot_1, #dot_2, #dot_3, #dot_4, #dot_5', function() {
      if (!$('#ad').hasClass('active')) {
        return;
      }

      var index = TXM.creative._startIndex;
      TXM.creative._startIndex = parseInt($(this).attr('id').replace('dot_', ''));

      TXM.creative._showSlide(index);
    });

    $(document).on('click', '#right', function() {
      if (!$('#ad').hasClass('active')) {
        return;
      }

      var index = TXM.creative._startIndex;
      TXM.creative._startIndex += 1;

      if (TXM.creative._startIndex > 5) {
        TXM.creative._startIndex = 1;
      }

      TXM.creative._showSlide(index);
    });

    $(document).on('click', '#left', function() {
      if (!$('#ad').hasClass('active')) {
        return;
      }

      var index = TXM.creative._startIndex;
      TXM.creative._startIndex -= 1;

      if (TXM.creative._startIndex < 1) {
        TXM.creative._startIndex = 5;
      }

      TXM.creative._showSlide(index);
    });

    var isTouch = ('ontouchstart' in document.documentElement);
    var startEvent = isTouch ? 'touchstart' : 'mousedown';
    var moveEvent = isTouch ? 'touchmove' : 'mousemove';
    var endEvent = isTouch ? 'touchend' : 'mouseup';

    var startX = 0;
    var startY = 0;
    var stop = 0;

    var el = $(document).find('#ad');

    $(document).on(startEvent + ' ' + moveEvent, '#ad', function(e) {
      e.preventDefault();
    });

    $(document).on(startEvent, '#ad', function(e) {
      var touch = isTouch ? e.originalEvent.touches[0] : e;

      startX = 0;
      startX = touch.pageX;
      startY = 0;
      startY = touch.pageY;

      window.draggingSlide = false;

      $(this).on(moveEvent, function(e) {
        window.draggingSlide = true;

        if (startX === 0) {
            return;
        }

        var touch = isTouch ? e.originalEvent.touches[0] : e;

        var x = (startX - touch.pageX);
        var y = (startY - touch.pageY);
        stop = x;
      });

      $(this).on(endEvent, function(e) {
        if (stop > 50) {
            $('#right').trigger('click');
        }

        if (stop < -50) {
            $('#left').trigger('click');
        }

        startX = 0;
        startY = 0;
        stop = 0;
        window.draggingSlide = false;

        $(this).off(moveEvent);
        $(this).off(endEvent);
      });
    });
  },

  _setupVideos: function() {
    var self = this;

    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

    var vid1src = 'http://media.truex.com/m/activties/emirates_mobile/video_small_439_1.mp4';
    var vid2src = 'http://media.truex.com/m/activties/emirates_mobile/video_small_439_1.webm';

    $('#f1 #video').remove();

    var videoWrapper = $('<div id="video">');
    videoWrapper.css({
      position: 'absolute',
      width: this.w,
      height: this.h,
      left: this.x,
      top: this.y
    });

    if (isSafari) {
      var img = $('<img src="'+ serviceUrl +'/assets/video.png">').css({
        position: 'relative',
        'z-index': 2,
        top: 0,
        left: 0,
        width: this.w,
        height: this.h,
        'pointer-events': 'none'
      });

      videoWrapper.prepend(img);
    }

    var src1 = $('<source src="'+ vid1src +'" type="video/mp4">');
    var src2 = $('<source src="'+ vid2src +'" type="video/webm">');

    var vid1 = $('<video id="surface_streaming" preload="preload" poster="'+serviceUrl+'/assets/video.png"/>');
    vid1.css({
      'display': 'block',
      'position': 'absolute',
      'z-index':1,
      'top': 0,
      'left': 0,
      'width': this.w,
      'height': this.h
    });
    vid1.append(src1);
    vid1.append(src2);
    videoWrapper.append(vid1);
    $('#f1').prepend(videoWrapper);
    vid1.load();

    this._video = vid1;

    var isTouch = ('ontouchstart' in document.documentElement);

    this._video.addClass('capture-clicks');

    if (!isTouch) {
      this._video.on('click', function() {
            $(this).get(0).play();
      });
    }

    this._video.get(0).addEventListener('play', self._onVideoStart.bind(this), false);
    this._video.get(0).addEventListener('timeupdate', self._onVideoProgress.bind(this), false);
    this._video.get(0).addEventListener('durationchange', self._toggleControls.bind(this), false);

    this._video.bind('ended', function() {
      if (isSafari) {
        $(this)[0].webkitExitFullscreen();
      }

      if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }

      TXM.api.track('multimedia', 'video_completed', TXM.creative._video.children('source').attr('src'));
      // console.log('end: '+ TXM.creative._video.children('source').attr('src'));

      $('#video').remove();

      self._video = null;
    });
  },

  _onVideoStart: function() {
    var self = this;

    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    if (isSafari) {
      $('#video img').remove();
    }

    TXM.api.track('multimedia', 'video_started', TXM.creative._video.children('source').attr('src'));
    // console.log('start: '+ TXM.creative._video.children('source').attr('src'));

    this._firstQuartilePast = false;
    this._midpointPast = false;
    this._thirdQuartilePast = false;
  },

  _onVideoProgress: function() {
    var progress = TXM.creative._video.get(0).currentTime / TXM.creative._video.get(0).duration;

    var src = TXM.creative._video.children('source').attr('src');

    if (!this._firstQuartilePast && progress >= 0.25) {
      this._firstQuartilePast = true;
      TXM.api.track('multimedia', 'video_first_quartile', src);
      // console.log('1: '+ src);
    } else if (!this._midpointPast && progress >= 0.50) {
      this._midpointPast = true;
      TXM.api.track('multimedia', 'video_second_quartile', src);
      // console.log('2: '+ src);
    } else if (!this._thirdQuartilePast && progress >= 0.75) {
      this._thirdQuartilePast = true;
      TXM.api.track('multimedia', 'video_third_quartile', src);
      // console.log('3: '+ src);
    }
  },

  _hideControls: function() {
    // this._video.get(0).controls = false;
  },

  _toggleControls: function() {
    this._video.get(0).controls = true;
    setTimeout(this._hideControls.bind(this), 50);
  }

};