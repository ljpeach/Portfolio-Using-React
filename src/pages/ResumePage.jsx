import { Link } from 'react-router-dom';
export default function ResumePage() {
    return (
        <section id="resume" className="p-2 text-white">
            <h2 className="m-2 text-black">Resume</h2>
            <p>
                Download my <span>
                    <Link
                        to="./src/assets/files/resume.pdf"
                        target='_blank'
                        download
                    >
                        Resume
                    </Link>
                </span>
                !
            </p>
            <h3>Front-End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-End Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </section>
    );
}