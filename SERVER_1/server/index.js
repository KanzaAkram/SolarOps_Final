const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const port = 3500;
const router = require("./Router/router");
const app = express();

app.use(express.json());


app.use(morgan('tiny'));
app.disable('x-powered-by');

app.use(cors({
  origin: function (origin, callback) {
    const allowedPattern = /^https:\/\/.*\.vercel\.app$/; // Match any subdomain of vercel.app

    if (allowedPattern.test(origin)) {
      callback(null, true);  // Allow the origin
    } else {
      callback(new Error('Not allowed by CORS'));  // Deny the origin
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

