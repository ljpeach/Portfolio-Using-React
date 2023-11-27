import { Link } from 'react-router-dom';
export default function Navigation() {
    return (
        <nav className=''>
            <div>
                <ul>
                    <Link key={1} to="/">
                        About Me
                    </Link>
                    <Link key={2} to="/portfolio">
                        Portfolio
                    </Link>
                    <Link key={3} to="/contact">
                        Contact
                    </Link>
                    <Link key={4} to="./src/assets/files/resume.pdf" target='_blank' download>
                        Resume
                    </Link>
                </ul>
            </div>
        </nav>
    );
}