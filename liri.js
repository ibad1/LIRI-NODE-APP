//var key = require("./keys.js")

var myTweet = process.argv[2];
//console.log(process.argv[2])
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'UU6ZxYTT8D61hbQAvSmaXNBaT',
  consumer_secret: 	'dVWCS4brIR015YxFLHnuqZasfuBqZpBeDoJn2aTe6Rf1Nh7JgX',
  access_token_key: '848267798790983680-kwdyaIX4knOaFrMUnBOWaJdbdfidWZt',
  access_token_secret: 'xF2ETdaKliwIjFYKdIwx1FW9I9sbZsXPCJ1k7VQiINpVG',
});

var params = {screen_name: 'liri_bot'};


client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if(error){
  	console.log("error")
  } 
  //throw error;
  console.log(tweets);  // The favorites. 
  //console.log(response);  // Raw response object. 
});
