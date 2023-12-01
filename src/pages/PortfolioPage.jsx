import { Project } from "../components";
export default function PortfolioPage() {
    return (
        <div>
            <h2>Portfolio</h2>
            <div className="d-flex flex-wrap text-center">
                {[
                    {
                        projectTitle: 'Social Task App',
                        previewImage: 'https://raw.githubusercontent.com/Seidler93/Social-Task-App/main/public/images/tasks-img.png',
                        deployLink: 'https://ljpeach.github.io/Portfolio/#',
                        gitLink: 'https://github.com/Seidler93/Social-Task-App',
                        description: 'test project, portfolio'
                    },
                    {
                        projectTitle: 'Flight Travel Finder',
                        previewImage: './src/assets/react.svg',
                        deployLink: 'https://ljpeach.github.io/Portfolio/#',
                        gitLink: 'https://github.com/ljpeach/Flight-Travel-Finder',
                        description: 'test project, portfolio'
                    },
                    {
                        projectTitle: 'Senior CS Capstone',
                        previewImage: './src/assets/react.svg',
                        deployLink: 'https://portfolios.cs.earlham.edu/index.php/students/2022-2/cs488/liam-peachey/',
                        gitLink: 'https://github.com/ljpeach/SpecificDifficultyMazeGenerator',
                        description: 'test project, portfolio'
                    },
                    {
                        projectTitle: 'Tech Blog',
                        previewImage: './src/assets/react.svg',
                        deployLink: 'https://young-lowlands-76151-0436989f82f6.herokuapp.com/',
                        gitLink: 'https://github.com/ljpeach/Tech-Blog',
                        description: 'test project, portfolio'
                    },
                    {
                        projectTitle: 'Hedron Collider',
                        previewImage: './src/assets/react.svg',
                        deployLink: 'https://play.unity.com/mg/other/hedron-collider',
                        gitLink: 'https://github.com/ljpeach/Hedron-Collider',
                        description: 'test project, portfolio'
                    },
                    {
                        projectTitle: 'Social Network Back End',
                        previewImage: './src/assets/react.svg',
                        deployLink: 'https://youtu.be/rQTliNys_20',
                        gitLink: 'https://github.com/ljpeach/Social-Network-API',
                        description: 'test project, portfolio'
                    }
                ].map((project, i) => <Project key={i} {...project} />)}
            </div>
        </div>
    );
}