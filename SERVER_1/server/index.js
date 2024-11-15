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
  origin:"https://solarops.vercel.app",
  credentials: true,
}));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

