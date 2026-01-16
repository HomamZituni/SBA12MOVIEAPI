const axios = require('axios');
const OMDB_BASE_URL = 'http://www.omdbapi.com/';

const searchMovies = async (req, res) => {
  const { title } = req.query;
  
  if (!title) {
    return res.status(400).json({ error: 'Title query parameter is required' });
  }

  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        s: title,                    
        apikey: process.env.OMDB_API_KEY  
      }
    });

    res.json(response.data);  
  } catch (error) {
    console.error('Search error:', error.message);
    res.status(500).json({ error: 'Search failed' });
  }
};

const getMovieDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        i: id,                       
        apikey: process.env.OMDB_API_KEY
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Details error:', error.message);
    res.status(500).json({ error: 'Details failed' });
  }
};

module.exports = { searchMovies, getMovieDetails };
