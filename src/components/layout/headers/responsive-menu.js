"use client";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const ResponsiveMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };

  const [activeMenus, setActiveMenus] = useState(null);
  const actives = (value) =>
      setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) =>
      value == activeMenus ? { display: "block" } : { display: "none" };
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/pricing-plans">Technologies</Link>
        </li>
        <li>
          <Link to="/history">Industries</Link>
        </li>
        <li>
          <Link to="/team">Team </Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

export default ResponsiveMenu;
