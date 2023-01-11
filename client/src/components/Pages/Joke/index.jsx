import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API_URL, { ALL_JOKES_URL } from "../../../api"; 

// style?
import './Joke.css';


const Joke = () => {
  const [joke, setJoke] = useState([]);
  // const [likeCount, setLikeCount] = useState(0);
  // const [dislikeCounter, setDislikeCounter] = useState(0);

  const { jokeId } = useParams();

 
  const fetchJoke = async () => {
    const response = await fetch(`${API_URL}${jokeId}`);
    const data = await response.json();
    // console.log(data)
    setJoke(data);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke__cards">
        {joke ? (
            <div className='joke__card'>
                <div id="categories_div">
                  <div>
                    {joke?.categories && (
                      <div>
                        <p id="joke__card__label">{joke.categories}</p>
                      </div>
                    ) }
                  </div>
                  <div>
                    {joke?.categories == '' && (
                      <div>
                        <p id="joke__card__label">"Uncategorized</p>
                      </div>
                    )}
                  </div>
                </div>
                <div id="joke__card__content">
                  <p id="joke__value">{joke.value}</p>
                </div>
            </div>
        ) : (
            <div>
              <p>Joke Not Found</p>
            </div>
        )}        
    </div>
      
  )
}







// const Joke = ({joke: id, categories, value }) => {

//   return (
//     <div className='joke' key={id}>
//       <div>
//         <p>{categories}</p>
//       </div>

//     </div>
//   )
// }

export default Joke;