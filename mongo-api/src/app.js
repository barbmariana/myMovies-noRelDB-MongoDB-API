import express from "express";
import db from './config/dbConnect.js';
import routes from './routes/index.js'
import cors from 'cors';



//Conection to the database
db.on("error", console.log.bind("connection error"));
db.once("open", () =>{
    console.log("success connection")
});

//Starting Express
const app = express();
app.use(cors({
    origin: 'http://localhost:5173' ,
}));

app.use(express.json());

routes(app);



export default app;


