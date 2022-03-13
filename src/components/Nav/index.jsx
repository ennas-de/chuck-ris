import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const index = () => {
  return (
    <nav className="nav container">
        <Link to='/'>
            <p href="/" className='nav__logo'>Chuck-ris Jokes</p>
        </Link>

        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to='/'>
                        <p className="nav__link">
                            <i className='bx bx-home-alt nav__icon'></i>
                            <span className="nav__name">Home</span>
                        </p>
                        
                    </Link>
                </li>
                
                <li className="nav__item">
                    <Link to='/random'>
                        <p className="nav__link">
                        <i className='bx bx-book-alt nav__icon'></i>
                            <span className="nav__name">Random</span>
                        </p>
                    
                    </Link>
                </li>

                {/* <li className="nav__item">
                    <Link to='/about'>
                        <p className="nav__link">
                        <i className='bx bx-briefcase-alt nav__icon'></i>
                            <span className="nav__name">About Us</span>
                        </p>
                    
                    </Link>
                </li> */}

                <li className="nav__item">
                    <Link to='/profile'>
                        <p className="nav__link">
                            <i className='bx bx-user nav__icon'></i>
                            <span className="nav__name">Profile</span>
                        </p>
                    
                    </Link>
                </li>
            </ul>
        </div>

        
    </nav>
  )
}

export default index