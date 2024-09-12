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
            <div className='about-high about-high1'>
                    <p className='about-high-value'>25+</p>
                    <p className='about-high-key'>Projects</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Web + tech support</p>
                    <p className='about-high-key'>Related</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Web application</p>
                    <p className='about-high-key'>Bachelor's thesis</p>
                </div>

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
                <a href="#top"><img src={ArrowUp} alt="" className="return-top"/></a>
            </div>
        </div>
    )
}
export default SkillsPage