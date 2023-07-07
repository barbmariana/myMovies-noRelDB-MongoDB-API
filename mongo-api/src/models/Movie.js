import mongoose from 'mongoose';


//Creating mongoose schema

const movieSchema = new mongoose.Schema(
    {
        id:{type: String},
        title:{type: String},
        watch_date: {type: Date},
        review: {type: String},
        score: {type: Number}
    }

);

// movies receive mongoose model movieSchema
const movies = mongoose.model('movies', movieSchema);

export default movies;