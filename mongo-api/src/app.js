import express from "express";
import db from './config/dbConnect.js';
import routes from './routes/index.js'


//Conection to the database
db.on("error", console.log.bind("connection error"));
db.once("open", () =>{
    console.log("success connection")
});

//Starting Express
const app = express();
app.use(express.json());

routes(app);



export default app;


