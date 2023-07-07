import movies from '../models/Movie.js';


class MovieController{

    //Get movies from DB
    static getMovies = async (req, res) => {
        try{
            const moviesResult = await movies.find();
            
            res.status(200).send(moviesResult);
        } catch (err){
            res.status(500).send({message:err});
        }
    }
    
    static getMoviesById = async (req,res) => {
        try{
            const id = req.params.id
            const movieResult = await movies.findById(id)
            res.status(200).send(movieResult)
        } catch (err) {
            res.status(400).send({message:err})
        }
    }

    //Add movies at DB

    static addMovies = async (req,res) => {
        try{
            let movie = new movies(req.body);
            movie.save();
            res.status(201).send(movie.toJSON())

        } catch (err){
            res.status(500).send({message:"not able to add movie"})
        }

        
    }

    //Update Movies

    static updateMovie = async (req,res) => {
        try{
            let id = req.params.id;
            await movies.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message:"Movie updated"})
        } catch (err){
            res.status(500).send({message:err})
        }

    }

    static deleteMovie = async (req,res) => {
        try {
            let id = req.params.id;
            await movies.findByIdAndDelete(id);
            res.status(200).send({message:"Movie deleted"})
            
        } catch (err) {
            res.status(500).send({message: err.message})
            
        }
    }

    

}

export default MovieController;


