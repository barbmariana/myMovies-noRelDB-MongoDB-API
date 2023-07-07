import express from 'express';
import MovieController from '../controllers/MovieController.js';

const router = express.Router();

router
    .get('/movies', MovieController.getMovies)
    .get('/movies/:id', MovieController.getMoviesById)
    .post('/movies', MovieController.addMovies)
    .put('/movies/:id', MovieController.updateMovie)
    .delete('/movies/:id', MovieController.deleteMovie)


export default router;