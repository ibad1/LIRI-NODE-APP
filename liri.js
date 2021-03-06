//Global variables
var Twitter = require('twitter');
var key = require("./keys.js")
var client = new Twitter(key.twitterKeys);
var spotify = require("spotify");
var OMDB = require("request");
var arg1 = process.argv[2];
var arg2 = process.argv[3];


switch(arg1){
		
	case "my-tweets":
	tweet();
	break;

	case "spotify-this-song":
	music();
	break;

	case "movie-this":
	movie();
	break;

	default:
		notFound();
		break;
}

function notFound() {
	console.log('command not valid try:');
	console.log("'my-tweets'");
	console.log("'spotify-this-song'");
	console.log("'movie-this'");
};


 	function tweet()
 	{
		client.get('statuses/user_timeline.json?count=20', function(error, tweets, response) 
		{
	 	 	if (!error) 
	 	 	{	

			  	console.log("Twitter is working!");
		    	for (var i = 0; i < tweets.length; i++) 
		    	{
		    		console.log(tweets[i].text);

		    	}; 
		  	} 

			else  
			{
			  throw error;
			}
		});

}; 


function music() {
	var song = [];
	if (!arg2){
		arg2 = "The Sign Ace of Base";
	}

	spotify.search({type: 'track', query: arg2}, function(err, data){
		var albumtrack = data.tracks.items;
		for (i=0; i < albumtrack.length; i++){
		var artistVar =  albumtrack[i].artists[i].name

		console.log("Artist: " + artistVar);
		console.log("Track Title: " + albumtrack[i].name);
		console.log("Spotify Link: " + albumtrack[i].preview_url);
		console.log("Album Title: " + albumtrack[i].album.name);
		return;
		}
		if (!arg2 || err){
		arg2 = "The Sign";
		var artistVar = "Ace of Base";
	}
	});
};

function movie(){

	OMDB("http://www.omdbapi.com/?t=" + arg2 + "&y=&plot=short&r=json", function(error, response, body){
		if (!error && response.statusCode === 200){
			console.log("Title: " + JSON.parse(body).Title);
			console.log("Rating: " + JSON.parse(body).imdbRating);
			console.log("Released: " + JSON.parse(body).Released);
			console.log("Produced: " + JSON.parse(body).Country);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("Actors: " + JSON.parse(body).Actors);
			console.log("Language: " + JSON.parse(body).Language);
			console.log("Rotten Tomatoes Rating:" + JSON.parse(body).Ratings[1].Value);
			console.log("Website: " + JSON.parse(body).Website);
		}
	})
	if (!arg2){
		arg2 = "Mr. Nobody";
	}
};
