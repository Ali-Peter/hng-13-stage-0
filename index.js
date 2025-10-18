const express = require('express');
const axios = require('axios');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/me', async (req, res) => {
  try {
    const catFactResponse = await axios.get('https://catfact.ninja/fact', {
      timeout: 5000,
    });

    const timestamp = new Date().toISOString();

    const response = {
      status: 'success',
      user: {
        email: 'aliogochukwu06@gmail.com',
        name: 'Ali Ogochukwu Peter',
        stack: 'Node.js/Express',
      },
      timestamp: timestamp,
      fact: catFactResponse.data.fact || 'No cat fact available',
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching cat fact:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch cat fact',
      timestamp: new Date().toISOString(),
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});