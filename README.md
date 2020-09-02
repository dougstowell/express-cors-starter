# express-cors-starter

Very simple api to get started and illustrate:

1. Using CORS
1. Using http client for json GETs
1. Few simple examples of API routing in express

## Getting started

1. `npm install`
1. `npm start`

Listens on port 3000 unless PORT environment variable is given.

## Example endpoints

* http://localhost:3000/abc (CORS enabled)
* http://localhost:3000/xyz/44 (CORS enabled)
* http://localhost:3000/no-cors (CORS not enabled)
* http://localhost:3000/na (404 example)
* http://localhost:3000/err (500 example)

## Test CORS is enabled

E.g. Chrome

1. Start the app
1. Visit a CORS enabled API e.g. `http://localhost:3000/abc`
1. Open Dev Tools (F12) and select Network tab
1. Select All filter and select the API in the list, `Access-Control-Allow-Origin: *` should appear in the response headers
1. Repeat for the CORS _not enabled_ API `http://localhost:3000/no-cors` and verify the header is not present

## Libraries used

* https://www.npmjs.com/package/express
* https://www.npmjs.com/package/cors
* https://www.npmjs.com/package/tiny-json-http
