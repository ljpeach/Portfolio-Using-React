export default function Project({ projectTitle, previewImage, deployLink, gitLink, description }) {
    return (
        <div>
            <section>
                <a href={deployLink}><h3>{projectTitle}</h3></a>
                <a href={gitLink}><img src="#" alt="git" /></a>
                <p>{description}</p>
            </section>
        </div>
    );
}