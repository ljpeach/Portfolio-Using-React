export default function Project({ projectTitle, previewImage, deployLink, gitLink, description }) {
    return (
        <div className="col-12 col-md-6 position-relative">
            <section className="project-section position-absolute">
                <a href={deployLink} target="_blank"><h3>{projectTitle}</h3></a>
                <a href={gitLink} target="_blank"><img src="./src/assets/images/github-icons/github-mark.svg" alt="git" /></a>
                <p>{description}</p>
            </section>
            <img src={previewImage} alt="background preview image" className="project-section" />
        </div >
    );
}