import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-text">
                    <p >Footer Text</p>
                    <p >Footer Text</p>
                </div>
                <div className="social-icons">
                    <Link to={'/'}>
                        <FaFacebook className="social-icon" />
                    </Link>
                    <Link to={'/'}>
                        <FaTwitter className="social-icon" />
                    </Link>
                    <Link to={'/'}>
                        <FaInstagram className="social-icon" />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
