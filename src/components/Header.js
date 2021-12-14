import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="py-4">
            <div className="container-cs">
                <nav className="grid grid-cols-2">
                    <div>
                        <h1 className="text-2xl fw-bold"><Link to="/">Sabbir Ahammad</Link></h1>
                    </div>
                    <div>
                        <ul className='text-right'>
                            <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
                            <li className='nav-item'><Link to="/about" className='nav-link'>About</Link></li>
                            <li className='nav-item'><Link to="/services" className='nav-link'>Services</Link></li>
                            <li className='nav-item'><Link to="/blogs" className='nav-link'>Blogs</Link></li>
                            <li className='nav-item'><Link to="/contact" className='nav-link'>Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;