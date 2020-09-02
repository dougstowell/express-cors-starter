const express = require('express');
const app = express();
var cors = require('cors');
var tiny = require('tiny-json-http');

const port = process.env.PORT || 3000;;

// Example API endpoint that calls another API.
app.get('/abc', cors(), (req, res, next) => {
  // Call actual service here.

  // Trivial example of a GET...example illustrates json response similar to requirement.
  var options = {
    url: 'https://api.github.com/',
  };

  tiny.get(options, (err, result) => {
    if (!err) {
      result = {
        val1: 1,
        val2: 'val',
        val3: true,
        val4: [1, 2, 3, 4],
        data: result,
      };
      res.json(result);

      return;
    }

    // Implement own error handling here, otherwise pass to default.
    next(err);
  });
});

// Example API endpoint with id param.
app.get('/xyz/:id', cors(), (req, res, next) => {
  result = {
    val1: 1,
    data: req.params.id,
  };
  res.json(result);
});

// Example API endpoint without cors.
app.get('/no-cors', (req, res, next) => {
  result = {
    val1: 1,
  };
  res.json(result);
});

// Example API endpoint that errors.
app.get('/err', cors(), (req, res, next) => {
  try {
    throw new Error('Cannot use that data');
  } catch (err) {
    next(err);
  }
});

// Catch all end point.
app.use((req, res, next) => {
  res.status(404).send('Unable to find the requested resource!');
});

// Error handler.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error in the API');
})

app.listen(port, () => {
  console.log(`CORS enabled app listening at http://localhost:${port}`);
});