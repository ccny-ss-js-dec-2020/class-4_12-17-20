/*

If you do not have a weather api key:
* Sign up for free here: https://openweathermap.org/api
* You will get an email with an api key or the key is located on your account.
* It takes about 30-60 minutes for the key to be activated
* The weather api url looks like this when calling it:
  * http://api.openweathermap.org/data/2.5/weather?appid=<API_KEY>&units=imperial&q=<CITY>
  * an example of how it would like if i was checking the weather in london
    * http://api.openweathermap.org/data/2.5/weather?appid=4d94af7fb548f25fb8e1f2e26b1328b9&units=imperial&q=london
  * Where you see the <>, those will be input by you

1. Very similar to how I accessed the giphy api
2. run npm install. the request module is already located in the package.json
3. Make an api call using the weather api string with the weather api key and an input on the end
4. Get the response body from the call to the weather api
5. parse through the json response body
6. log the temperature of that city as well as the latitude and longitude of that city
7. If a location is not included as part of the command
	 Throw an error

*/
