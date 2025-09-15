import { Link } from 'react-router-dom';
import React from 'react';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className='menu-item-has-children'><Link to='/'>Home</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/'>Home 01</Link></li>
                        <li><Link to='/home-two'>Home 02</Link></li>
                        <li><Link to='/home-three'>Home 03</Link></li>
                        <li><Link to='/home-four'>Home 04</Link></li>
                    </ul>
                </li>  
                <li className='menu-item-has-children'><Link to='/about-us'>Pages</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/history'>Company History</Link></li>
                        <li className='menu-item-has-children'><Link to='/services'>Services</Link>
                            <ul className='sub-menu'>
                                <li><Link to='/services'>Services</Link></li>
                                <li><Link to='/services/building-architecture'>Services Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/testimonial'>Testimonials</Link></li>
                        <li><Link to='/pricing-plans'>Price Plans</Link></li>
                        <li><Link to='/faq'>FAQ's</Link></li>
                        <li className='menu-item-has-children'><Link to='/team'>Teams</Link>
                            <ul className='sub-menu'>
                                <li><Link to='/team'>Team 01</Link></li>
                                <li><Link to='/team-two'>Team 02</Link></li>
                                <li><Link to='/team-three'>Team 03</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/request-quote'>Request Quote</Link></li>
                        <li><Link to='/404-error'>404 Page</Link></li>
                    </ul>
                </li>
                <li className='menu-item-has-children'><Link to='/portfolio/3-columns'>Portfolio</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/gallery'>Filterable Gallery</Link></li>
                        <li className='menu-item-has-children'><Link to='#'>Project Grid</Link>
                            <ul className='sub-menu'>
                                <li><Link to='/portfolio/2-columns'>2 Columns</Link></li>
                                <li><Link to='/portfolio/3-columns'>3 Columns</Link></li>
                                <li><Link to='/portfolio/4-columns'>4 Columns</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/portfolio/healthcare-facility'>Project Details</Link></li>
                    </ul>
                </li>
                <li className='menu-item-has-children'><Link to='/blog'>Blog</Link>
                    <ul className='sub-menu'>
                        <li><Link to='/blog'>Blog Grid</Link></li>
                        <li><Link to='/blog-standard'>Blog Standard</Link></li>
                        <li><Link to='/blog/key-steps-to-ensure-a-smooth-building-process'>Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link to='/contact-us'>Contact Us</Link></li>      
            </ul>  
        </>
    );
};

export default MainMenu;