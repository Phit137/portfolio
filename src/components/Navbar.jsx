import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.nav}>
            <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : undefined}>
                Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : undefined}>
                Projects
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : undefined}>
                Contact
            </NavLink>
        </nav>
    );
}

export default Navbar;
