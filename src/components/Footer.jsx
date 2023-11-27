import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer>
            <ul>
                <Link key={1} to='https://github.com/ljpeach' target='_blank'>
                    <img src="#" alt="GitHub" />
                </Link>
                <Link key={2} to='https://www.linkedin.com/in/liam-peachey/' target='_blank'>
                    <img src="#" alt="LinkedIn" />
                </Link>
                <Link key={3} to='mailto:liamjpeachey@gmail.com' target='_blank'>
                    <img src="#" alt="Email" />
                </Link>
            </ul>
        </footer>
    );
}