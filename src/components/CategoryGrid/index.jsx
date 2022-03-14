import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ALL_CATEGORIES_URL, SEARCH_CATEGORY_URL } from '../../api';
import './CategoryGrid.css'

const index = () => {
    const [categories, setCategories] = useState([]);
    const [categoryUrl, setCategoryUrl] = useState([])

    const fetchCategories = async () => {
        const response = await fetch(`${ ALL_CATEGORIES_URL}`);
        const data = await response.json();
        // console.log(data)
        setCategories(data)
    }

    
    useEffect(() => {
        fetchCategories();
    }, []);
    
    const fetchCategory = async () => {
        const response = await fetch (`${SEARCH_CATEGORY_URL}`);
        const data = await response.json();
        console.log(data.path)
        setCategoryUrl(data.path)
    }

    useEffect(() => {
        fetchCategory();
    }, [])

  return (
      <>
        { categories.length > 0 ? (
            <div className="categoryGrid__cards">
                {categories.map((category) => (
                    <div className="categoryGrid__card">
                        <div className="categoryGrid__card__info">
                            <div>
                                <Link to={`/${categoryUrl}random?category=${category}`} >
                                    {category}
                                </Link>
                            </div>
                        </div>
                    </div>

                ))}
                
            </div>
        ) : (
            <div className="categoryGrid__cards">
                <div className="categoryGrid__card">
                    <div className="categoryGrid__card__info">
                        <div>
                            ANIMAL
                        </div>
                    </div>
                </div>
            </div>
        )}
        
      
      </>
  )
}

export default index