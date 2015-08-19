(function() {

	var creative = {
		_init: function() {
			TXM.dispatcher.addEventListenerOnce('ENGAGEMENT_STARTED', creative._onStart);
			TXM.dispatcher.addEventListenerOnce('ENGAGEMENT_ENDED', creative._onEnd);

			// preload assets

			// when preload complete, signal ready to start
			TXM.dispatcher.dispatchEvent('INTERACTIVE_ASSET_READY');
		},

		_onStart: function() {
			// start ad

			TXM.ui.show(/* ad html */);
		},

		_onEnd: function() {
			// end ad
		}
	};

	creative._init();
}());