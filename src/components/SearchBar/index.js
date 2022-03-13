import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.css';

const index = (props) => {
    // const { options, onInputChange } = props;
    // const ulRef = useRef();
    // const inputRef = useRef();
    // useEffect(() => {
    //     inputRef.current.addEventListener('click', (event) => {
    //     event.stopPropagation();
    //     ulRef.current.style.display = 'flex';
    //     onInputChange(event);
    //     });
    //     document.addEventListener('click', (event) => {
    //     ulRef.current.style.display = 'none';
    //     });
    // }, []);
  return (
    <div className='search__container'>
        <div className='search__contents form-control' id="search-bar">
            <h1 className='search__title'>The Joke Bible</h1>
            <p className='search__paragraph'>
                    Daily Laughs for you and yours
            </p>
        </div>
        
        <input 
            id="search-bar"
            className="search__input form-control" 
            type="text" 
            placeholder="How can we make you laugh today? "
            // ref={inputRef}
            // onChange={onInputChange} 
            
            />
       
        <ul id="results" className="list-group">  {/* ref={ulRef}> */} {/* An element of styling has been removed from this by me. Remember to add back */}
            {/* {options.map((option, index) => {
            return (
                <button
                type="button"
                key={index}
                onClick={(e) => {
                    inputRef.current.value = option;
                }}
                className="list-group-item list-group-item-action"
                >
                {option}
                </button>
            );
            })} */}
        </ul>
    </div>
  )
}

export default index