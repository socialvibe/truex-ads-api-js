TrueX Ads API for JavaScript
==================================================

This project provides documentation, examples, and an ad starter template for building HTML5 rich-media interactive ads (engagements) for TrueX's ad container.

Getting Started
---------------
Your HTML5 ad should be loadable from a single js file.  This js file may load additional js and css files, as needed.  Use the new ad [template](https://github.com/socialvibe/truex-ads-api-js/blob/master/new-ad-template/creative.js) within this project for your convenience.

Note: The TrueX ad container has jQuery v1.11.3 loaded and you may access it as normal.

Lastly, a [test page](http://socialvibe.github.io/truex-ads-api-js/) is provided to test your ad js.


Ad Lifecycle
------------

##### Loading
At load time, the TrueX ad container dynamically loads your main javascript file.  Upon load, preload any necessary assets such as images, css, other js files, etc.  Once your ad is ready to start, make this dispatch call:
```js
TXM.dispatcher.dispatchEvent('INTERACTIVE_ASSET_READY');

```

##### Start
When the TrueX engagement is ready to start, the container will dispatch an `ENGAGEMENT_STARTED` event.  During initialization of your ad, you should add a listener for that event.  When the ad is started, call `TXM.ui.show` with your ad's starting HTML.  This will append your creative to the ad container and reveal your ad to the user.
```js
TXM.dispatcher.addEventListenerOnce('ENGAGEMENT_STARTED', onEngagementStart);

function onEngagementStart() {
	// Your ad should begin here.  Start intro animations, videos, etc.

	// Add DOM elements to ad container
	TXM.ui.show(/* ad html */);
}
```

##### End
Engagements end when users click "I'm Done" in the ad container header.  When this happens, the container dispatches a `ENGAGEMENT_ENDED` event:
```js
TXM.dispatcher.addEventListenerOnce('ENGAGEMENT_ENDED', onEngagementEnd);

function onEngagementEnd() {
	// stop any running videos, sounds, etc.
}
```




API Usage
---------


#### Step Tracking
Each engagement is made up of multiple steps/frames.  Tracking the progress of the user through the various steps of the engagement is an important metric within TrueX.  Use these API calls to track the current step of the user.  The first step starts at 1.

When transitioning from one step to the next, make this call:
```js
TXM.api.incrementCurrentStep();
```

When transitioning to another step that isn't the next step in the ad flow, make this call:
```js
TXM.api.setCurrentStep(6);  // in this case the user is going to the 6th step
```


#### Video Tracking
Use the following API calls to track all videos within engagements.  We track video start, complete, replay, and each quartile.  An optional `video label` is recommended to identify the video (typically the video asset URL).

```js
TXM.api.track('multimedia', 'video_started', /* video label */);
TXM.api.track('multimedia', 'video_first_quartile', /* video label */);
TXM.api.track('multimedia', 'video_second_quartile', /* video label */);
TXM.api.track('multimedia', 'video_third_quartile', /* video label */);
TXM.api.track('multimedia', 'video_completed', /* video label */);
TXM.api.track('multimedia', 'video_replay', /* video label */);
```


#### Game Play Tracking
Use the following API calls to track game play within engagements.  We track start, complete, and replay.  An optional `label` can be provided if there are multiple games.

```js
TXM.api.track('multimedia', 'game_started', /* video label */);
TXM.api.track('multimedia', 'game_completed', /* video label */);
TXM.api.track('multimedia', 'game_replay', /* video label */);
```




#### Websites & Social Sharing
The following API calls should be used for clicking out to websites and sharing to social networks.

Opens an external browser window from the engagement.  In most cases each engagement has only one click out so no need to pass in a URL (its entered dynamically in our admin).  If a specific URL is specified, you can pass the URL as the first arugment.
```js
TXM.utils.popupWebsite();

TXM.utils.popupWebsite(/* url */);
```

Share to Facebook:
```js
TXM.utils.shareToFacebook(/* url */, /* title */, /* caption */, /* description */, /* image_url */);
```

Share to Twitter:
```js
TXM.utils.shareToTwitter(/* tweet_text */, /* url */);
```

Share to Pinterest:
```js
TXM.utils.shareToPinterest(/* url */, /* description */, /* image_url */);
```




#### User Data
TrueX has two forms of structured user data: Votes and Comments.  Votes are used to store poll and quiz answers.  Comments are used to store user comments.  Lastly, we have a few data entry API calls for storing email addresses, names, and zipcodes.

Saving vote data.  The first arugment is `category` a number representing the index of the question the user is answering (typically '1' for the first question, '2' for the second question).  The second arugment is `label` a string representation of the answer choice (typically the actual answer choice text).  The last arugment is `vote` a numerical representation of the answer choice.  This number must be unique across all answer choices and all question categories.
```js
TXM.api.saveVoteData(/* category */, /* label */, /* vote */);

// Example
TXM.api.saveVoteData(1, 'Coca-cola', 11);
```

Retrieving vota data.  This method retrieves all vote data of users who have completed this engagement.
```js
var votaData = TXM.api.getVoteSummary();

// returns an Array of vote data Objects, example:
// [ {category:"1", vote:"11", vote_count:"2023"}, ...]

```

Saving comment data:
```js
TXM.api.saveCommentData(/* comment */, /* label */);

// Example
TXM.api.saveCommentData('I like diet coke!', 'fav_drink');
```

Retrieving comment data.  This method retrieves the last 5 comments made by users:
```js
var commentData = TXM.api.getRecentComments();

// returns an Array of comment data Objects, example:
// [ {body:"I like diet coke!", ago:"31 minutes ago"}, ...]

```

Submitting email, name, and zipcode data:
```js
TXM.api.track('data_entry', 'email', /* email */);

TXM.api.track('data_entry', 'name', /* name */);

TXM.api.track('data_entry', 'zipcode', /* zipcode */);

```



#### Misc Interaction Tracking
For all other interactions within engagements we track using a catch-all `other` tracking method.  Use this for tracking any *other* user interaction not covered by the above methods.

```js
TXM.api.track('other', /* name */, /* value */);

// Examples:
TXM.api.track('other', 'choose_product', 'apple_flavor');
TXM.api.track('other', 'score_submitted');

```


#### 3rd-Party Tracking
The TrueX ad container provides two methods for loading 3rd-party tracking tags.  Use `loadExternalTracking` for image/pixel tags, and use `loadExternalScript` for script tags.

```js
TXM.utils.loadExternalTracking(/* pixel_url */);

TXM.utils.loadExternalScript(/* script_url */);

```


#### Accessing Ad Container Parameters
The TrueX ad container stores parameters in a global `TXM.params` variable.  Here are some useful exisiting parameters:
```js
TXM.params.campaign_id // campaign ID for this ad
TXM.params.placement_id // ID of the publisher placement this ad is running on
TXM.params.variant // 'A' or 'B' 50/50 random split.  Useful for a/b testing
TXM.params.debug // 'true' if in debug mode
TXM.params.zipcode // the zipcode of the user, if available
```
You can also add your own variables in Ad Settings -> Parameters in our Ad Studio.
