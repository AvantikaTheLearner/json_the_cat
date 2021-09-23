const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  
  //console.log(typeof body);
  const data = JSON.parse(body);
  //console.log(data);
  //console.log(typeof data);
  console.log(data[0].description);
  data[0].name = args.join();
  console.log(data);
  if (data[0].name === '') {
    console.log("Breed not found");
  }
  
});
const args = process.argv.slice(2);
console.log(args);
