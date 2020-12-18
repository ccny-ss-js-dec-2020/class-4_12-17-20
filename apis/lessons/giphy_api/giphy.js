/*

	If you do not have a giphy api key:
	* Sign up for free here: https://developers.giphy.com/docs/api#quick-start-guide
	* You will get an email with an api key or the key is located on your account.
	* It should be activated right away
	* The giphy api url looks like this when calling it:
	  * http://api.giphy.com/v1/gifs/search?q=<Search Term>&api_key=<API Key>&limit=<Number Of Results>;
		* an example would be http://api.giphy.com/v1/gifs/search?q=bobcats&api_key=dsaf2khkdC&limit=3
		* Where you see the <>, those will be input by you
		* See the example below

*/

// run 'npm init', enter all the way through
// run 'npm install request --save' in order to download and save the module inside of this project
// you can see the 'node_modules' directory created. this stores all of the downloaded files from npm for this project

// importing the 'request' module that we just downloaded from npm
var request = require('request');

//key in order to gain access to the api
var apiKey = "";
//number of results went from the api response
var numberOfResults = "3";

//logging what is entered in the command line
console.log(process.argv)
//logging the length of process.argv
console.log(process.argv.length)

/* Searching with inputting 'puppies' as the search term */

// if there is no third argument in the terminal
if(process.argv.length == 2){
	//api url with inputs from above
	var giphyApiUrl = "http://api.giphy.com/v1/gifs/search?q=puppies&api_key=" + apiKey + "&limit=" + numberOfResults;
	console.log(giphyApiUrl)

	// making the request to the giphy api
	request(giphyApiUrl, function(error, response, body) {
		// logging the response from the giphy api call
		console.log("this is the response object that we get when calling the giphy api")
		//console.log(response)
		// if no error and the status code is equal to 200
		// here, were are accessing the statusCode value from the response object
		if (!error && response.statusCode === 200) {
			// then here is the successful response to the giphy api, but you see it's a weird string because its unparsed
			console.log("unparsed body from the giphy api")
			// look how ugly it is. Always use JSON.parse
			//console.log(body);
			console.log("parsed body from the giphy api")
			// JSON.parse is used to be able to have your logic be able to read the properties and values from the object
			// without JSON.parse here, you would have a difficult time reading through the response object
			console.log(JSON.parse(body))
		} else {
			// if an error, then show the error in the console
			console.log(response)
			// here is the parsed joke response from the joke rapid api
			// JSON.parse is used to be able to easily access fields from a response object or any json object
			// in this case, the object comes in as a string from the rapid api, so ...
			// ... JSON.parse(res.body) will turn that string into an object that we are able to easily parse through
			console.log("parsed response body")
			var apiResponse = JSON.parse(response.body);
			console.log(apiResponse)
			// creating the custom error response to send to the user
			var customError = "StatusCode: " + response.statusCode + ", Status Message: " + apiResponse.message;
			// throwing the error
			throw new Error(customError);
		}
	})
}

/* Searching with custom input via process.argv */

//if there is a third argument in the terminal
if(process.argv.length >= 3){

	//getting the search term from the terminal command that you ran
	//by getting everything from the 2nd argument and on (everything after node giphy.js)
	var giphySearchTermForUrl = process.argv.slice(2).join('+');
	console.log(giphySearchTermForUrl)
	//api url with inputs from above
	if(giphySearchTermForUrl){

		var giphyApiUrl = "http://api.giphy.com/v1/gifs/search?q=" + giphySearchTermForUrl + "&api_key=" + apiKey + "&limit=" + numberOfResults;
		console.log(giphyApiUrl)

		// making the request to the giphy api
		request(giphyApiUrl, function(error, response, body) {
			// logging the response from the giphy api call
			console.log("this is the response object that we get when calling the giphy api")
			/* log this if you want, its ugly */
			// console.log(response)
			// if no error and the status code is equal to 200
			// here, were are accessing the statusCode value from the response object
			if (!error && response.statusCode === 200) {
				// then here is the successful response to the giphy api, but you see it's a weird string because its unparsed
				console.log("unparsed body from the giphy api")
				/* log this if you want, its ugly */
				// console.log(body);
				console.log("parsed body from the giphy api")
				// JSON.parse is used to be able to have your logic be able to read the properties and values from the object
				// without JSON.parse here, you would have a difficult time reading through the response object
				console.log(JSON.parse(body))
				// this here is getting all of the images for the first record returned from the response
				//console.log(JSON.parse(body).data[0].images)

				// data is the array that holds all of image data, so you'd have to loop through the data array to get all of the images for all of the results
				var dataArray = JSON.parse(body).data;
				for(var i = 0; i < dataArray.length; i++){
				//	console.log(dataArray[i].images)
				}
			} else {
				// if an error, then show the error in the console
				/* log this if you want, its ugly */
				//console.log(response)
				// here is the parsed joke response from the joke rapid api
				// JSON.parse is used to be able to easily access fields from a response object or any json object
				// in this case, the object comes in as a string from the rapid api, so ...
				// ... JSON.parse(res.body) will turn that string into an object that we are able to easily parse through
				console.log("parsed response body")
				var apiResponse = JSON.parse(response.body);
				// creating the custom error response to send to the user
				var customError = "StatusCode: " + response.statusCode + ", Status Message: " + apiResponse.message;
				// throwing the error
				throw new Error(customError);
			}
		})
	} else {
		// if no giphySearchTermForUrl in the argument,
		// then throw an error to the user
		// and let them know to enter a location
		throw new Error("Please enter a search term")
	}
}
