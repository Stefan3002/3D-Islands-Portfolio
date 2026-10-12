import './skills-page.css'
import Button from "../../Button/button.jsx";
import ArrowUp from "../../../../public/svgs/arrow-up.svg";
import scrollSVG from "../../../../public/svgs/scroll.svg";
const SkillsPage = ({animation}) => {
    const projects = [
        {
            title: 'React Js',
            level: '75%'
        },
        {
            title: 'JavaScript',
            level: '75%'
        },
        {
            title: 'Wordpress',
            level: '75%'
        },
        {
            title: 'SASS / CSS',
            level: '80%'
        },
        {
            title: 'HTML',
            level: '90%'
        },
        {
            title: 'Python',
            level: '60%'
        },
        {
            title: 'Three Js',
            level: '20%'
        },
        {
            title: 'Web design',
            level: '70%'
        },
    ]

    return (
        <div className={`about-page projects-page skills-page ${animation} info-page`}>
            <span id="top" />
            <div className="about-page-top">
                <h2 className='about-title'>My skills</h2>
                <div className="about-buttons">
                    {/*<Button customClass='info-button' text='Resume'/>*/}
                    {/*<Button customClass='info-button' text='LinkedIn'/>*/}
                </div>
                <img src={scrollSVG} alt="" className="scroll-svg"/>
            </div>
            <div className="about-highs wrapper">
                {/*<div className='about-high about-high1'>*/}
                {/*    <p className='about-high-value'>25+</p>*/}
                {/*    <p className='about-high-key'>Projects</p>*/}
                {/*</div>*/}
                {/*<div className='about-high about-high1'>*/}
                {/*    <p className='about-high-value'>Web + tech support</p>*/}
                {/*    <p className='about-high-key'>Related</p>*/}
                {/*</div>*/}
                {/*<div className='about-high about-high1'>*/}
                {/*    <p className='about-high-value'>Web application</p>*/}
                {/*    <p className='about-high-key'>Bachelor's thesis</p>*/}
                {/*</div>*/}
                {/*<div className='about-high about-high1'>*/}
                {/*    <p className='about-high-value'>Web + Health Research</p>*/}
                {/*    <p className='about-high-key'>Master's thesis</p>*/}
                {/*</div>*/}
            </div>
            <div className="about-page-bottom info-page-bottom wrapper">
                <div className="projects-page-bottom">
                    {projects.map((project, index) => {
                        return <div className={`about-section skill-section project-section skill-section${index + 1}`}>
                            <span className="about-section-bg"/>
                            <p className="about-section-title">{project.title}</p>
                            <p className="skill-section-level">{project.level}</p>
                        </div>
                    })}
                </div>
                <section className="recommendations-section">
                    <h3 className="about-section-title">What People I Have Worked With Say About Me</h3>
                    <article className="recommendation">
                        <blockquote className="recommendation-quote">
                            <p>
                                Stefan is a proactive and detail-oriented team member who consistently takes the
                                initiative to contribute across different areas of the product. He often goes beyond
                                his immediate responsibilities to explore new ideas and identify opportunities for
                                improvement!
                            </p>
                            <p>
                                He has a particularly keen eye for detail and a strong understanding of accessibility,
                                consistently advocating for more inclusive and user-friendly experiences. I also really
                                appreciate his enthusiasm for learning, whether it's exploring new technologies,
                                attending conferences, or sharing knowledge with the wider team.
                            </p>
                        </blockquote>
                        <p className="recommendation-author">Anusha Chaturvedi</p>
                        <p className="recommendation-role">Software Engineer, Canonical · Anbox-UI Team</p>
                    </article>
                    <article className="recommendation">
                        <blockquote className="recommendation-quote">
                            <p>
                                I’ve had the pleasure of working with Stefan, and they are genuinely one of those
                                people who bring both curiosity and hard-work to everything they do. They have an
                                impressive ability to take on challenging technical problems, from accessibility and
                                multi-screen experiences to AI tooling and open-source contributions, while always
                                looking for ways to share what they learn with others.
                            </p>
                        </blockquote>
                        <p className="recommendation-author">Nkeiruka Whenu</p>
                        <p className="recommendation-role">Software Engineer, Canonical · LXD-UI Team</p>
                    </article>
                    <article className="recommendation">
                        <blockquote className="recommendation-quote">
                            <p>
                                I am pleased to write a glowing recommendation for Ștefan Secrieru, who plays a pivotal
                                role as the lead website developer on our recent European project Erasmus plus AiRobo
                                “Artificial Intelligence based Robotics” (<a href="https://airobo.info.uvt.ro">AiRobo</a>).
                                His expertise, dedication, and innovative approach significantly contributes to the
                                success of our project. Stefan demonstrated an outstanding ability to grasp the project
                                requirements quickly and translate them into a visually appealing and highly functional
                                website. His technical proficiency in web development was evident throughout the entire
                                development process.
                            </p>
                            <p>
                                What sets Ștefan apart is not just his technical skills, but also his commitment to
                                delivering high-quality results within tight deadlines. He consistently went above and
                                beyond to ensure that our website not only met but exceeded our expectations. His
                                attention to detail, combined with a proactive and solution-oriented mindset, made the
                                collaboration seamless and enjoyable.
                            </p>
                            <p>
                                Furthermore, Ștefan proves to be an excellent communicator, keeping all stakeholders
                                informed about the progress, challenges, and proposed solutions. He is open to feedback
                                and demonstrates a high level of professionalism in all interactions. Our team
                                appreciates his collaborative approach, and he is always willing to go the extra mile
                                to address any concerns or incorporate additional features.
                            </p>
                            <p>
                                I highly recommend Ștefan for any web development projects. His technical expertise,
                                work ethic, and ability to deliver outstanding results make him an invaluable asset. It
                                is a pleasure working with Ștefan, and I have no doubt that he will continue to excel
                                in his future endeavours.
                            </p>
                        </blockquote>
                        <p className="recommendation-author">Isabela Dramnesc</p>
                        <p className="recommendation-role">
                            Associate Professor, Ph.D., Computer Science Dept. · West University of Timisoara
                        </p>
                    </article>
                </section>
                <a href="#top"><img src={ArrowUp} alt="" className="return-top"/></a>
            </div>
        </div>
    )
}
export default SkillsPage