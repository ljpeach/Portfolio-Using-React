import { Link, useLocation } from 'react-router-dom';
export default function Navigation({ setCurrentPage }) {
    const handleNavActive = (page) => { };
    const currentPage = useLocation().pathname;
    console.log(currentPage);
    return (
        <nav className=''>
            <ul className='navbar-nav d-md-flex justify-content-sm-around flex-sm-row'>
                <li className='nav-item m-2'>
                    <Link
                        key={1}
                        to="/"
                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleNavActive('about')}
                    >
                        About Me
                    </Link>
                </li>
                <li className='nav-item m-2'>
                    <Link
                        key={2}
                        to="/portfolio"
                        className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleNavActive('portfolio')}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className='nav-item m-2'>
                    <Link
                        key={3}
                        to="/contact"
                        className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleNavActive('contact')}
                    >
                        Contact
                    </Link>
                </li>
                <li className='nav-item m-2'>
                    <Link
                        key={4}
                        to="/resume"
                        className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
                        onClick={() => handleNavActive('resume')}
                    >
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    );
}