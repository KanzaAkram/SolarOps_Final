const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const port = 3500;
const router = require("./Router/router");
const app = express();

app.use(express.json());


app.use(morgan('tiny'));
app.disable('x-powered-by');

app.use(
  cors({
    origin: '*', // Allow requests from any origin (you can restrict to specific domains if needed)
    credentials: true, // Allow cookies and credentials (if needed)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allow specific HTTP methods
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'X-CSRF-Token',
    ], // Allow these headers to be included in requests
  })
);

// Handle preflight OPTIONS request
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, X-CSRF-Token');
  res.send(); // Respond without body
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

