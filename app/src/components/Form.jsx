import { useState } from "react";
import axios from 'axios';


const Form = () => {
    const [title, setTitle] = useState("");
    const [watch_date, setWatchDate] = useState("");
    const [review, setReview] = useState ("");
    const [score, setScore] = useState(0);

      
    const saveMovie = async () => {
      
        const date = new Date();
        const formattedDate = date.toISOString();
      
        setWatchDate(formattedDate);
      
        try { // made a async call, sets will only work after the finish of the call
            const response = await axios.post('http://localhost:4001/movies/', { title, watch_date, review, score });
            console.log("Data from the server", response.data);
            setReview("");
            setTitle("");
            setScore(0);

          } catch (error) {
            console.error("Error saving data: ", error);
          }

          //did't put code here because if the call take too long, this part will be executed while the called is been made.
          // So this part can be executed before the finish of the try catch, even though the program try to wait



      };
      
      
      

    return (
        <div>
            <h1>My Movies</h1>
            <form>
                <fieldset >
                    <label>Title:</label>
                    <input id="newTitle" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="title"></input>
                </fieldset>
                <fieldset >
                    <label>Review:</label>
                    <textarea id="newReview" value={review} onChange={(e)=>{setReview(e.target.value)}} rows={5} cols={20}></textarea>
                </fieldset>
                <fieldset>
                    <label>Score:</label>
                    <input type="range" name="inputRange" id="inputRange" value={score} onChange={(e)=>{setScore(Number(e.target.value))}} min={0} max={10} />
                </fieldset>
                <button type="button" onClick={saveMovie}>Send Movie</button>
            </form>
        </div>
    )
}

export default Form;