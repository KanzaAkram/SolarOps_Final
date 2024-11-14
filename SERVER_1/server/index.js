const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const port = 3500;
const router = require("./Router/router");
const app = express();

app.use(express.json());

app.post('/proxy/predict', async (req, res) => {
  try {
    const response = await fetch('https://faultdetmodel-production.up.railway.app/predict/', {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from external API: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error in proxy:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.post('/proxy/predict/gb', async (req, res) => {
  try {
    const response = await axios.post('https://ppgmodel-production.up.railway.app/predict/gb', req.body);

    res.json(response.data);  // Forward the response from the external API
  } catch (error) {
    console.error('Error in proxy:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
app.use(morgan('tiny'));
app.disable('x-powered-by');

// CORS configuration to allow requests from your React app
app.use(cors({
  origin: '*', // Allow requests from this origin
  credentials: true, // Allow cookies and credentials (if needed)
}));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

