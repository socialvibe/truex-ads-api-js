TXM.creative = {
    _engagement: null,
    _images: {},

    _loadedAssets: 0,
    _totalAssets: 0,

    init: function() {
        TXM.dispatcher.addEventListenerOnce('ENGAGEMENT_STARTED', TXM.creative._onStart);
        TXM.dispatcher.addEventListenerOnce('ENGAGEMENT_ENDED', TXM.creative._onEnd);

        var assets = ['https://qa-media.truex.com/assets%2F2015-08-13%2F721c7982-c60a-4b92-a7a3-3eae807b6e26%2Fexample_background.png',
                      'https://qa-media.truex.com/assets%2F2015-08-13%2F721c7982-c60a-4b92-a7a3-3eae807b6e26%2Fexample_button.png'];

        TXM.creative._totalAssets = assets.length;

        TXM.creative._loadImages(assets);
    },

    _onAssetLoaded: function() {
        TXM.creative._loadedAssets += 1;
        TXM.dispatcher.dispatchEvent('ENGAGEMENT_ASSET_LOADING_PROGRESS', TXM.creative._loadedAssets/TXM.creative._totalAssets);

        if (TXM.creative._loadedAssets == TXM.creative._totalAssets) {
            TXM.creative._setupSteps();

            TXM.dispatcher.dispatchEvent('INTERACTIVE_ASSET_READY');
        }
    },

    _loadImages: function(urls) {
        for (var i=0; i<urls.length; i++) {
            var url = urls[i];
            TXM.creative._images[url] = $("<img />").attr("src", url).load(TXM.creative._onAssetLoaded);
        }
    },

    _setupSteps: function() {
        TXM.creative._engagement = $('<div>', {
            'class': 'engagement'
        }).css({
            'background': '#ffffff'
        });

        var button = TXM.creative._images['https://qa-media.truex.com/assets%2F2015-08-13%2F721c7982-c60a-4b92-a7a3-3eae807b6e26%2Fexample_button.png'].css({
            'position': 'absolute',
            'top': '250px',
            'left': '84px',
            'cursor': 'pointer'
        });

        TXM.creative._engagement.append(TXM.creative._images['https://qa-media.truex.com/assets%2F2015-08-13%2F721c7982-c60a-4b92-a7a3-3eae807b6e26%2Fexample_background.png'], button);
    },

    _onStart: function() {
        TXM.ui.show(TXM.creative._engagement);
    },

    _onEnd: function() {
        
    }
};

TXM.creative.init();