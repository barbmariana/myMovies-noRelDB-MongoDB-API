import mongoose from "mongoose";
import {} from 'dotenv/config';

mongoose.connect(`mongodb+srv://barbmariana:${process.env.DBPASS}@mymoviesdb.f3zv8lf.mongodb.net/MyMoviesDB`);

let db = mongoose.connection;

export default db;