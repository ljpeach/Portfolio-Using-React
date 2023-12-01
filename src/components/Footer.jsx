import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className='border border-bottom-0 border-start-0 border-end-0 position-absolute bottom-0 w-100'>
            <ul className='nav text-center'>
                <li className='nav-item col-4'>
                    <Link key={1} to='https://github.com/ljpeach' target='_blank' className='nav-link'>
                        <img className='logo' src="./src/assets/images/github-icons/github-mark.svg" alt="GitHub" />
                    </Link>
                </li>
                <li className='nav-item col-4'>
                    <Link key={2} to='https://www.linkedin.com/in/liam-peachey/' target='_blank' className='nav-link'>
                        <img className='logo' src="./src/assets/images/LinkedIn-Logos/LI-In-Bug.png" alt="LinkedIn" />
                    </Link>
                </li>
                <li className='nav-item col-4'>
                    <Link key={3} to='mailto:liamjpeachey@gmail.com' target='_blank' className='nav-link'>
                        <span className=''>&#9993;</span>
                    </Link>
                </li>
            </ul>
        </footer>
    );
}