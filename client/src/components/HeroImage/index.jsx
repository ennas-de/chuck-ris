import React, { useState } from 'react';
// SearchBar
import SearchBar from '../SearchBar';
import './HeroImage.css';

// const defaultOptions = [];
// for (let i = 0; i < 10; i++) {
//   defaultOptions.push(`option ${i}`);
//   defaultOptions.push(`suggesstion ${i}`);
//   defaultOptions.push(`advice ${i}`);
// }

const index = () => {
  // const [options, setOptions] = useState([]);
  // const onInputChange = (event) => {
  //   setOptions(
  //     defaultOptions.filter((option) => option.includes(event.target.value))
  //   );
  // };

  return (
    <div className='heroimage_wrapper'>
    <SearchBar />    {/*options={options} onInputChange={onInputChange} /> */}
    </div>
  )
}

export default index;