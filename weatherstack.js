const request = require('request');

function weatherstack(city,callback){
	url = 'http://api.weatherstack.com/current?access_key=0af06b12299f398b353b5a22b7a7b4d8&query='+city;
	
	request({url,json:true}, function (error, response, body) {
	console.log('===weatherstack===');
	   console.log(`Location:${body.location.name},(${body.location.region})\nTemperature: ${body.current.temperature} at ${body.current.observation_time}`);
	   const data = {
		Location: body.location.name,
		Longitude: body.location.lon,
		Latitude:  body.location.lat
	   };	   
	   callback(data);
	});
}

function mapbox(response){
	console.log('Location:' + response.Location); 
	console.log('Longitude:' + response.Longitude);
	console.log('Latitude' + response.Latitude);	
	
	url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ response.Location +'.json?proximity='+ response.Longitude +','+ response.Latitude +'&access_token=pk.eyJ1IjoicmFtMDgwNDAiLCJhIjoiY2tqODFyYm1kMWtodjJybnF2Y2lnYjc0dCJ9.1zjWuCRAjhUJjFjVnbCQgA';
	request({url,json:true}, function (error, response, body) {
		console.log('===mapbox===');
	   console.log(`Longitude:${body.features[0].center[0]}\nLatitude:${body.features[0].center[1]}`)
	});	
}

/*Using callback function*/
//weatherstack('raipur',mapbox); 


/*Callback Assignment 1 Mess around with the callback pattern*/
function sum(x,y) {
  	console.log(x + y);
}

function add(x,y) {
	setTimeout(sum,2000,x,y);
}

function omdb(movie){
	let url = 'http://www.omdbapi.com/?t='+ movie +'&y=&plot=short&r=json&apikey=7f6baddd';
	request({url,json:true},function(error,response,body){
		console.log(body);
	});
}

omdb('marvel');
//add(1,3);











