import React, { useState } from 'react';
import react from '../assets/react.svg';
import styles from './Header.module.css'; // Import the CSS module
import { Link } from 'react-router-dom';

const Header = ({ companyName, width }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.nav}>
              <Link to="/">
            <div className={styles.logoContainer}>
                <img src={react} alt="React Logo" className={styles.logo} />
                <h2 className={styles.companyName}>{companyName}</h2>
            </div>
            </Link>
            {/* Hamburger Icon */}
            <div
                className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
                onClick={toggleMenu}
            >
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            {/* Navigation List */}
            <div className={`${styles.navList} ${isMenuOpen ? styles.open : ''}`}>
                <ul className={styles.navItems}>
                  
                    <Link to="/AboutUs" className={styles.navItem}> About</Link>
                    <Link to="/contact" className={styles.navItem}>Contact</Link>
                    <li className={styles.navItem}>Products</li>
                    <Link to="/PatientEducation" className={styles.navItem}> PatientEducation </Link>
                    <Link to="/ProfessionalEducation" className={styles.navItem}>  ProfessionalEducation </Link>
                    <Link to="/DentalReserch" className={styles.navItem} > DentalReserch </Link>

                </ul>
            </div>
        </nav>
    );
};

export default Header;