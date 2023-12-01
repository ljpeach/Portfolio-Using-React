export default function AboutPage() {
    return (
        <section className="p-2">
            <div className="d-md-flex flex-md-column justify-content-md-start m-2">
                <h2>About Liam Peachey</h2>
                <img src="./src/assets/images/portrait.jpg" alt="Portrait of Liam" id="portrait" />
            </div>
            <p className="m-2">
                Liam Peachey is an aspiring software developer with a degree in computer science and Japanese language and linguistics, currently working on a bootcamp certification. Their interest in computer science was piqued in their senior year of high school, and has burned strong in the years since. Working as a tutor for Earlham College's computer science department, they strove to foster a similar passion in others. In their free time, they enjoy playing video games, watching video essays, biking or rollerblading, and reading. They would like to add knitting to their repertoire as well.
            </p>
        </section>
    );
}