const searchMovies = (req, res) => {
  res.json({ message: 'searchMovies controller works!', title: req.query.title });
};

const getMovieDetails = (req, res) => {
  res.json({ message: 'getMovieDetails controller works!', id: req.params.id });
};

module.exports = {
  searchMovies,
  getMovieDetails,
};