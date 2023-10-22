const express = require('express');
const axios = require('axios');
const cors = require('cors');


const weatherUrl = 'http://api.weatherstack.com/current';

const access_key= process.env.WEATHER_KEY;



//* PROXY SERVER made to fetch data from weatherstack api with http:// (due to browser cors policy)

const app = express();
const port = process.env.PORT;  // Choose an appropriate port
app.use(cors());
app.use(express.json());

app.post('/api/proxy', async (req, res) => {
  const {  params } = req.body;
  params.access_key=access_key;

  try {
    const response = await axios.get(weatherUrl, { params });

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
