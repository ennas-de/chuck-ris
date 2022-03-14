import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './JokesGrid.css';
import { ALL_JOKES_URL } from "../../api"; 

const index = () => {
    const [jokes, setJokes] = useState([]);
    // const [searchTerm, setSearchTerm] = useState('');

    const fetchAllJokes = async () => {
        const response = await fetch(`${ALL_JOKES_URL}`)
        const data = await response.json();
        // console.log(data.result);
        setJokes(data.result);
    }

  useEffect(() => {
    fetchAllJokes();
  }, []);


  return (
      <>
            {jokes?.length > 0 ? (
                <div className="jokesGrid__cards">
                    {jokes.map((joke) => (
                        <div className="jokesGrid__card">
                            {/* <img src="" alt="Jokes" className="jokesGrid__card__image" /> */}
                            {joke?.categories[0] ? (
                                <div>
                                    <p id='jokesGrid__card__label'>{joke.categories}</p>
                                </div>
                            ) : (
                                <div>
                                    <p id='jokesGrid__card__label'>Uncategorized</p>
                                </div>
                            )}
                            
                            <div className="jokesGrid__card__content">
                                <p id='jokesGrid__value'>
                                    {joke.value}
                                </p>
                            </div>
                            <div className="jokesGrid__card__info">
                                <div>
                                    <Link to={`/${joke.id}`} className="jokesGrid__card__link" > See Stats </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='jokesGrid__cards'>
                    <p>No Jokes Found</p>
                </div>
            )}
      </>
  )
}

export default index