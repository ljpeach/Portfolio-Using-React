import { Project } from "../components";
export default function PortfolioPage() {
    return (
        <div id="portfolio">
            <h2 className="m-2">Portfolio</h2>
            <div className="d-flex flex-wrap text-center justify-content-around p-2">
                {[
                    {
                        projectTitle: 'Social Task App',
                        previewImage: 'https://raw.githubusercontent.com/Seidler93/Social-Task-App/main/public/images/tasks-img.png',
                        deployLink: 'https://ljpeach.github.io/Portfolio/#',
                        gitLink: 'https://github.com/Seidler93/Social-Task-App',
                        description: 'Node, Express, Bootstrap, Sequelize, REST'
                    },
                    {
                        projectTitle: 'Flight Travel Finder',
                        previewImage: 'https://raw.githubusercontent.com/ljpeach/Flight-Travel-Finder/main/assets/images/preview.png',
                        deployLink: 'https://ljpeach.github.io/Portfolio/#',
                        gitLink: 'https://github.com/ljpeach/Flight-Travel-Finder',
                        description: 'HTML, Tailwind, JavaScript, 3rd Party API'
                    },
                    {
                        projectTitle: 'Senior CS Capstone',
                        previewImage: 'https://raw.githubusercontent.com/ljpeach/Portfolio/main/assets/images/maze.png',
                        deployLink: 'https://portfolios.cs.earlham.edu/index.php/students/2022-2/cs488/liam-peachey/',
                        gitLink: 'https://github.com/ljpeach/SpecificDifficultyMazeGenerator',
                        description: 'C++, Python, '
                    },
                    {
                        projectTitle: 'Tech Blog',
                        previewImage: 'https://raw.githubusercontent.com/ljpeach/Tech-Blog/main/assets/preview.png',
                        deployLink: 'https://young-lowlands-76151-0436989f82f6.herokuapp.com/',
                        gitLink: 'https://github.com/ljpeach/Tech-Blog',
                        description: 'Node, Express, Bootstrap, Sequelize, REST'
                    },
                    {
                        projectTitle: 'Hedron Collider',
                        previewImage: 'https://raw.githubusercontent.com/ljpeach/Portfolio/main/assets/images/hedron.png',
                        deployLink: 'https://play.unity.com/mg/other/hedron-collider',
                        gitLink: 'https://github.com/ljpeach/Hedron-Collider',
                        description: 'C#, Unity'
                    },
                    {
                        projectTitle: 'Social Network Back End',
                        previewImage: 'https://raw.githubusercontent.com/ljpeach/Portfolio/main/assets/images/filler_clouds.jpg',
                        deployLink: 'https://youtu.be/rQTliNys_20',
                        gitLink: 'https://github.com/ljpeach/Social-Network-API',
                        description: 'Node, Express, MongoDB, REST'
                    }
                ].map((project, i) => <Project key={i} {...project} />)}
            </div>
        </div>
    );
}