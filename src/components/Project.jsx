export default function Project({ projectTitle, previewImage, deployLink, gitLink, description }) {
    return (
        <div className="col-12 col-md-5 position-relative m-2 text-start project-box">
            <div className="position-absolute bottom-50 h-auto col-9 project-desc text-white">
                <section className="d-flex flex-row justify-content-start p-2 m-0">
                    <a href={deployLink} target="_blank" className="p-0 m-2 h-auto align-self-center text-white">
                        <h3 className="m-0 h-auto">
                            {projectTitle}
                        </h3>
                    </a>
                    <a href={gitLink} target="_blank" className=""><img src="./src/assets/images/github-icons/github-mark.svg" alt="git" className="git-icon" /></a>
                </section>
                <p className="p-2 m-0">{description}</p>
            </div>
            <img src={previewImage} alt="background preview image" className="project-section" />
        </div >
    );
}