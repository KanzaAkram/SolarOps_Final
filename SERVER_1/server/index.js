const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const axios = require("axios");
const port = 3500;
const router = require("./Router/router");
const app = express();

app.use(express.json());

app.post("/api/predict-fault", async (req, res) => {
  try {
    const response = await axios.post(
      "https://faultdetmodel-production.up.railway.app/predict/",
      req.body
    );
    res.json(response.data);  // Return the external API's response to the frontend
  } catch (error) {
    console.error("Error in /api/predict-fault:", error);
    res.status(500).json({ error: "Failed to fetch prediction from external API" });
  }
});

// Proxy route for PPG Prediction
app.post("/api/predict-pg", async (req, res) => {
  try {
    const response = await axios.post(
      "https://ppgmodel-production.up.railway.app/predict/gb",
      req.body
    );
    res.json(response.data);  // Return the external API's response to the frontend
  } catch (error) {
    console.error("Error in /api/predict-pg:", error);
    res.status(500).json({ error: "Failed to fetch prediction from external API" });
  }
});
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
  credentials: true,
}));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

