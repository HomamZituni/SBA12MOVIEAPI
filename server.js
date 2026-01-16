require('dotenv').config();

const express = require('express');
const movieRoutes = require('./routes/movieRoutes');  // ← Points to routes/movieRoutes.js

const app = express();
const PORT = 3001;

// Mount ALL movie routes under /api/*
app.use('/api', movieRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
