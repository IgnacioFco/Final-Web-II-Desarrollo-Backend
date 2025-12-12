const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movies.controller');
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');

router.get('/', auth, movieController.getAllMovies);
router.get('/:id', auth, movieController.getMovieById);

router.post('/', auth, isAdmin, movieController.createMovie);
router.put('/:id', auth, isAdmin, movieController.updateMovie);
router.delete('/:id', auth, isAdmin, movieController.deleteMovie);

module.exports = router;
