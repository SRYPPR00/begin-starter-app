// Begin enables secure sessions, express-style middleware, and more:
// let begin = require('@architect/functions')

// TODO: modify the body object!
let body = `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
  </head>
  <body>

    <h1 class="center-text">
      <!-- ↓ Change "Hello world!" to something else and head on back to Begin! -->
      Hello world!
    </h1>

    <p class="center-text">
      Your <a href="https://begin.com" class="link" target="_blank">Begin</a> app is ready to go!
    </p>

  </body>
</html>
`

exports.handler = async function http(req) {
  console.log(req)
  return {
    type: 'text/html; charset=utf8',
    body
  }
}

// Example responses

/* Forward requester to a new path
exports.handler = async function http(req) {
  return {
    status: 302,
    location: '/about',
  }
}
*/

/* Respond with successful resource creation, CORS enabled
exports.handler = async function http(req) {
  return {
    status: 201,
    type: 'application/json',
    body: JSON.stringify({ok: true}),
    cors: true,
  }
}
*/

/* Deliver client-side JS
exports.handler = async function http(req) {
  return {
    type: 'text/javascript',
    body: 'console.log("Hello world!")',
  }
}
*/

// Learn more about building Begin HTTP functions:
//  https://docs.begin.com/en/functions/http/

