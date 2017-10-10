console.log("TwitterBot is starting...")

var Twit = require('twit');
var T = new Twit({
  consumer_key:         'nP19uICaVfYPlyBFxWXw3Zg4G',
  consumer_secret:      'RBai0iQmHEvZEAAWZjoRbvLOd5pBt6fi5SdRFUC5T656lujWXY',
  access_token:         '23411638-H3NHcPy55SOY9Wt5SaGPGFbN7AMfaK6G52pPW2pbT',
  access_token_secret:  '93i9Lrceu25UnafPXRKbTDxrYXU1UNoUpioTg0vDfuHqg',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});
var params = {
  q: 'Trump',
  count: 5
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}
