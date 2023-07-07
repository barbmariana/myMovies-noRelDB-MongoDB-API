import app from './src/app.js';


const port = process.env.PORT || 4001 ; //Here I use a condition to use the port that the server choose

app.listen(port, () => {
    console.log("server listening at " + port + " port")
})