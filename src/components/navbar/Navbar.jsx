import React from 'react';
import './Navbar.style.css'; // CSS dosyasını import ediyoruz

const Navbar = () => {
    return (
        <div className="fixed-header">
            <nav className="navbar">
                {/* Logo ekleniyor */}
                <img src="../src/assets/logo.png" alt="Logo" className="navbar-logo" />

                <label htmlFor="menu-button">
                    <img className="hamburger-icon" src="../../assets/hamburger-icon.png" alt="Hamburger Icon" />
                </label>
                <input type="checkbox" id="menu-button" className="menu-button" />
                <section className="navbar-right">
                    {/* Linkler ve butonlar ekleniyor */}
                    <a href="#" className="navbar-link">Home</a>
                    <a href="#classes" className="navbar-link">Classes</a>
                    <a href="#training" className="navbar-link">Training</a>
                    <a href="#review" className="navbar-link">Review</a>
                    <a href="#contact" className="navbar-link">Contact</a>
                    <button className="navbar-button">JOIN US</button>
                </section>
            </nav>
        </div>
    );
}

export default Navbar;
