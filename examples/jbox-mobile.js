var originalWidth = 640;
var originalHeight = 980;
var newWidth = 360;
var newHeight = 540;
var serviceUrl = 'assets/jitb/';
serviceUrl = 'http://media.truex.com/m/activties/jitb/';
var assets = [];

var parseConfig = function(config) {
  TXM.ui.show($('<div id="ad"/>').hide());

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


$.getJSON(serviceUrl + 'jitb.json', function(config) {
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
    $('#ad').children().hide();

    TXM.creative._frame1();
  },

  _frame1: function() {
    TXM.api.setCurrentStep(1);

    var self = this;

    var frame = $('#ad #1');
    frame.fadeIn(500);

    setTimeout(function() {
      self._frame2();
    }, 5000);
  },

  _frame2: function() {
    TXM.api.setCurrentStep(2);

    var self = this;

    var frame = $('#ad #2');
    frame.fadeIn(500, function() {
      $('#ad #1').remove();
    });

    $('#PLAY').addClass('capture-clicks').one('click', function() {
      TXM.api.track('other', 'Play');

      setTimeout(function() {
        frame.remove();
      }, 500);

      self._frame3(frame);
    });
  },

  _frame3: function(oldFrame) {
    $('#4').hide();
    $('#replay').off('click');
    $('#finder').off('click');

    if (oldFrame) {
      oldFrame.fadeOut(500);
    }

    TXM.api.setCurrentStep(3);

    var self = this;

    self._setupGame();

    var frame = $('#ad #3');
    frame.fadeIn(500);

    var c = 0;
    this.creatureInterval = setInterval(function() {
      if (c > self.creatures.length - 1) {
        c = 0;
      }
      if (!self.creatures[c].hasClass('attack') || !self.creatures[c].hasClass('attack-fast') || !self.creatures[c].hasClass('attack-slow')) {
        var rand = self._randomMax(3);
        var cls = 'attack';
        switch(rand) {
          case 1:
            cls = 'attack';
            break;
          case 2:
            cls = 'attack-fast';
            break;
          case 3:
            cls = 'attack-slow';
            break;
        }
        self.creatures[c].addClass(cls);
      }
      c++;
    }, 750);
  },

  _frame4: function() {
    TXM.api.setCurrentStep(4);

    var self = this;

    if (this.score > 40) {
      TXM.api.track('other', 'NiceWork');

      $('#nice_try').hide();
      $('#nice_work').show();
    } else {
      TXM.api.track('other', 'NiceTry');

      $('#nice_try').show();
      $('#nice_work').hide();
    }

    var div = $('<div/>');
    div.html(this.score + '%');

    $('#score').children().remove();
    $('#score').append(div);

    var bar = $('<div/>');
    bar.css('width', this.score + '%');

    $('#bar2').children().remove();
    $('#bar2').append(bar);

    var frame = $('#ad #4');
    frame.fadeIn(500);

    setTimeout(function() {
      self._frame5();
    }, 3500);
  },

  _frame5: function() {
    TXM.api.setCurrentStep(5);

    var self = this;

    var frame = $('#ad #5');
    frame.fadeIn(500);

    $('#replay').addClass('capture-clicks').one('click', function() {
      TXM.api.track('other', 'PlayAgain');

      self._frame3(frame);
    });

    $('#finder').addClass('capture-clicks').one('click', function() {
      TXM.utils.popupWebsite('http://www.jackinthebox.com/', true);

      var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

      if (!isSafari) {
        TXM.api.endEngage();
      }
    });
  },

  _setupGame: function() {
    var self = this;

    this.score = 0;

    this.creatures = [];
    this.creatures.push($('#creature1'), $('#creature2'), $('#creature3'), $('#creature4'), $('#creature5'));

    this.spawnPositions = [
      {
        x:'-150px',
        y:'-150px'
      },
      {
        x:'460px',
        y:'-150px'
      },
      {
        x:'460px',
        y:'180px'
      },
      {
        x:'460px',
        y:'100px'
      },
      {
        x:'180px',
        y:'-150px'
      },
      {
        x:'130px',
        y:'-150px'
      },
      {
        x:'-150px',
        y:'120px'
      },
      {
        x:'-150px',
        y:'140px'
      },
      {
        x:'-150px',
        y:'180px'
      }
    ];

    $.each(this.creatures, function(index, creature) {
      var rand = self._randomMax(self.spawnPositions.length - 1);
      var pos = parseInt(self.spawnPositions[rand].x.replace('px', ''));

      if (pos < 181) {
        creature.addClass('flip');
      } else {
        creature.removeClass('flip');
      }

      creature.addClass('wiggle').addClass('capture-clicks').on('click', function() {
        self._score(this);
      }).css({
        left: self.spawnPositions[rand].x,
        top: self.spawnPositions[rand].y
      });
    });

    this.gameInterval = setInterval(function() {
      for (var i = 0; i < self.creatures.length; i++) {
        var hit = self._checkCollisions($('#burger_hit').get(0), self.creatures[i].get(0));
        if (hit && !self.creatures[i].hasClass('dead')) {
          if ($('#burger_glow').is(':hidden')) {
            $('#burger_glow').fadeIn(75).delay(50).fadeOut(75);
            self._sizeMeter(-5);
          }
          self._resetCreature(self.creatures[i]);
        }
      }
    }, 150);

    var div = $('<div/>');
    div.html(':15');

    $('#timer').children().remove();
    $('#timer').append(div);

    var timer = 15;
    this.timer = setInterval(function() {
      if (timer < 10) {
        timer = '0' + timer;
      }
      $('#timer div').html(':'+ timer);

      timer--;

      if (timer === -1) {
        self._endGame();
      }
    }, 1000);

    $('#meter').children().remove();
    $('#meter').append($('<div/>').css('width', '50%'));
    $('#burger_hit').css('opacity', 0);
    $('#burger_glow').hide();
  },

  _sizeMeter: function(num) {
    var width = $('#meter').children('div').width();
    var parentWidth = $('#meter').width();
    var percent = 100 * width / parentWidth;

    if (percent < 0) {
      percent = 0;
    } else if (percent > 100) {
      percent = 100;
    }

    $('#meter').children('div').css('width', (parseInt(percent) + num) + '%');
  },

  _score: function(creature) {
    var self = this;

    $(creature).removeClass('capture-clicks').addClass('dead');
    this._sizeMeter(5);

    setTimeout(function() {
      self._resetCreature($(creature));
    }, 500);
  },

  _resetCreature: function(creature) {
    var self = this;

    creature.addClass('capture-clicks').removeClass('dead').removeClass('attack').removeClass('attack-slow').removeClass('attack-fast');

    var rand = self._randomMax(self.spawnPositions.length - 1);

    var pos = parseInt(self.spawnPositions[rand].x.replace('px', ''));

    if (pos < 180) {
      creature.addClass('flip');
    } else {
      creature.removeClass('flip');
    }

    creature.css({
      left: this.spawnPositions[rand].x,
      top: this.spawnPositions[rand].y
    });
  },

  _checkCollisions: function (el1, el2) {
    var rect1 = el1.getBoundingClientRect();
    var rect2 = el2.getBoundingClientRect();

    return !(
      rect1.top > rect2.bottom || rect1.right < rect2.left || rect1.bottom < rect2.top || rect1.left > rect2.right
    );
  },

  _endGame: function() {
    clearInterval(this.timer);
    clearInterval(this.creatureInterval);
    clearInterval(this.gameInterval);

    var width = $('#meter').children('div').width();
    var parentWidth = $('#meter').width();
    var percent = 100 * width / parentWidth;

    this.score = Math.ceil(percent / 5) * 5;

    $.each(this.creatures, function(index, creature) {
      creature.off('click');
      creature.removeClass('attack');
      creature.removeClass('attack-slow');
      creature.removeClass('attack-fast');
    });

    this._frame4();
  },

  _randomMax: function(max) {
    return Math.floor(Math.random() * max) + 1;
  }

};