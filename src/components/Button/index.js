import React from 'react';
// Styles
import './Button.css';


const Button = () => (
  <div className='button_wrapper' type='button'>
    Load More
  </div>
);



// const Button = ({ text, callback }) => (
//   <div className='button_wrapper' type='button' onClick={callback}>
//     {text}
//   </div>
// );

// Button.propTypes = {
//   text: PropTypes.string,
//   callback: PropTypes.func
// };

export default Button;
