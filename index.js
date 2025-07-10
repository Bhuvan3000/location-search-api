const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/search-location', async (req, res) => {
    const query = req.query.query;
    if (!query) return res.status(400).json({ error: 'Missing query parameter' });

    try {
        const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`;
        const response = await axios.get(mapboxUrl, {
            params: {
                access_token: process.env.MAPBOX_TOKEN,
                limit: 5
            }
        });

        const results = response.data.features.map(place => ({
            name: place.place_name,
            lat: place.center[1],
            lon: place.center[0]
        }));

        res.json({ results });
    } catch (error) {
        console.error('Error fetching location:', error.message);
        res.status(500).json({ error: 'Failed to fetch location' });
    }
});

app.listen(PORT, () => {
    console.log(`Location API running at http://localhost:${PORT}`);
});