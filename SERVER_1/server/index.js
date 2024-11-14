const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const port = 3500;
const router = require("./Router/router");
const app = express();

app.use(express.json());


app.use(morgan('tiny'));
app.disable('x-powered-by');

// CORS configuration to allow requests from your React app
app.use(cors({
  origin: 'https://solarops-client-g2cqex4m7-daniyashm2022-gmailcoms-projects.vercel.app', // Allow requests from this origin
  credentials: true, // Allow cookies and credentials (if needed)
}));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

