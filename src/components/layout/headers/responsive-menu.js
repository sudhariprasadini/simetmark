"use client"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) =>
    value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) =>
    value == activeMenus ? { display: "block" } : { display: "none" };
  return (
    <>    
    <ul>
        <li className='menu-item-has-children'><Link to='/'>Home</Link>
            <ul className='sub-menu' style={activeSubMenu("home")}>
                <li><Link to='/'>Main Business</Link></li>
                <li><Link to='/home-two'>Consulting Business</Link></li>
                <li><Link to='/home-three'>Business Solutions</Link></li>
            </ul>
            <a className={`mean-expand ${activeIcon("home")}`} onClick={() => active("home")}></a>
        </li>  
        <li className='menu-item-has-children'><Link to='/about-us'>Pages</Link>
            <ul className='sub-menu' style={activeSubMenu("pages")}>
                <li><Link to='/about-us'>About Us</Link></li>
                <li><Link to='/pricing-plans'>Price Plans</Link></li>
                <li><Link to='/faq'>FAQ's</Link></li>
                <li><Link to='/testimonial'>Testimonials</Link></li>
				<li className='menu-item-has-children'><Link to='/team'>Teams</Link>
                    <ul className='sub-menu' style={activeSubMenus("team")}>
						<li><Link to='/team-filter'>Team Filter</Link></li>
						<li><Link to='/team'>Team 01</Link></li>
						<li><Link to='/team-two'>Team 02</Link></li>
						<li><Link to='/team-three'>Team 03</Link></li>
						<li><Link to='/team/grace-elizabeth'>Team Single</Link></li>
					</ul>
                    <a className={`mean-expand ${activeIcons("team")}`} onClick={() => actives("team")}></a>
				</li>
                <li><Link to='/request-quote'>Request Quote</Link></li>
                <li><Link to='/404-error'>404 Page</Link></li>
            </ul>
            <a className={`mean-expand ${activeIcon("pages")}`} onClick={() => active("pages")}></a>
        </li>
		<li className='menu-item-has-children'><Link to='/services'>Services</Link>
            <ul className='sub-menu' style={activeSubMenu("services")}>
				<li><Link to='/services'>Services 01</Link></li>
				<li><Link to='/services-two'>Services 02</Link></li>
				<li><Link to='/services/business-model'>Services Details</Link></li>
			</ul>
            <a className={`mean-expand ${activeIcon("services")}`} onClick={() => active("services")}></a>
		</li>
        <li className='menu-item-has-children'><Link to='/portfolio/3-columns'>Project</Link>
            <ul className='sub-menu' style={activeSubMenu("project")}>
				<li><Link to='/portfolio-filter'>Project Filter</Link></li>
				<li className='menu-item-has-children'><Link to='#'>Project Grid</Link>
                    <ul className='sub-menu' style={activeSubMenus("grid")}>
						<li><Link to='/portfolio/2-columns'>2 Columns</Link></li>
						<li><Link to='/portfolio/3-columns'>3 Columns</Link></li>
						<li><Link to='/portfolio/4-columns'>4 Columns</Link></li>
					</ul>
                    <a className={`mean-expand ${activeIcons("grid")}`} onClick={() => actives("grid")}></a>
				</li>
                <li><Link to='/portfolio/business-analytics'>Project Details</Link></li>
            </ul>
            <a className={`mean-expand ${activeIcon("project")}`} onClick={() => active("project")}></a>
        </li>
        <li className='menu-item-has-children'><Link to='/blog'>Blog</Link>
            <ul className='sub-menu' style={activeSubMenu("blog")}>
                <li><Link to='/blog'>Blog Grid</Link></li>
                <li><Link to='/blog-standard'>Blog Standard</Link></li>
                <li><Link to='/blog/revamp-your-business-with-expert-consulting'>Blog Details</Link></li>
            </ul>
            <a className={`mean-expand ${activeIcon("blog")}`} onClick={() => active("blog")}></a>
        </li>
        <li className='menu-item-has-children'><Link to='/contact'>Contact</Link>
            <ul className='sub-menu' style={activeSubMenu("contact")}>
                <li><Link to='/contact'>Contact Style 01</Link></li>
                <li><Link to='/contact-two'>Contact Style 02</Link></li>
                <li><Link to='/contact-three'>Contact Style 03</Link></li>
                <li><Link to='/contact-four'>Contact Style 04</Link></li>
            </ul>
            <a className={`mean-expand ${activeIcon("contact")}`} onClick={() => active("contact")}></a>
        </li>      
    </ul>  
    </>
  );
};

export default ResponsiveMenu;