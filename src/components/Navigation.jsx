import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Navigation() {
    const [currentPage, setCurrentPage] = useState('about');
    const handleNavActive = (page) => { setCurrentPage(page) };
    return (
        <nav className=''>
            <ul className='navbar-nav d-md-flex justify-content-sm-between flex-sm-row'>
                <li className='nav-item m-2'>
                    <Link
                        key={1}
                        to="/"
                        className={currentPage === 'about' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleNavActive('about')}
                    >
                        About Me
                    </Link>
                </li>
                <li className='nav-item m-2'>
                    <Link
                        key={2}
                        to="/portfolio"
                        className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleNavActive('portfolio')}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className='nav-item m-2'>
                    <Link
                        key={3}
                        to="/contact"
                        className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleNavActive('contact')}
                    >
                        Contact
                    </Link>
                </li>
                <li className='nav-item m-2'>
                    <Link
                        key={4}
                        to="./src/assets/files/resume.pdf"
                        target='_blank'
                        download
                        className='nav-link'
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}