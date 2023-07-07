import express from "express";

const app = express();

const movies = [
    {id:1, titulo:"O lado bom da vida"},
    {id:2, titulo: "Cisne Negro"}
]

app.get('/', (req,res) => {
    res.status(200).send("Mongo API")
});

app.get('/movies', (req, res) => {
    res.status(200).json(filmes)
});

app.post('/movies', (req,res) =>{
    movies.push(req.body);
    res.status(201).send("movie add")

});

export default app;


