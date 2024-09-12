import './projects-page.css'
import Button from "../../Button/button.jsx";
import ArrowUp from "../../../../public/svgs/arrow-up.svg";
import scrollSVG from "../../../../public/svgs/scroll.svg";
const ProjectsPage = ({animation, setLastScroll, project, setProject}) => {

    const projects = [
        {
            title: 'CodeLighthouse'
        },
        {
            title: 'Open Robotics Intelligent Grid'
        },
        {
            title: 'Ora lui Robert'
        },
        {
            title: 'Romanian Society of Medical Informatics'
        },
        {
            title: 'AiRobo'
        },
        {
            title: 'Nokia Overflow'
        },
        {
            title: 'Landing Pages'
        },
        {
            title: 'Educational Apps'
        },
        {
            title: 'Infocentre Automation'
        }
    ]

    const openProject = (index) => {
        setProject(index)
        window.scrollTo(0, 0)
        setLastScroll(window.scrollY)
        document.querySelector('body').style.minHeight = '100vh'
    }

    return (
        <div className={`about-page projects-page ${animation} info-page`}>
            <span id="top" />
            <div className="about-page-top">
                <h2 className='about-title'>My projects</h2>
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
                        return <div onClick={() => openProject(index)} className={`about-section project-section project-section${index + 1}`}>
                            <span className="about-section-bg"/>
                            <p className="about-section-title">{project.title}</p>
                        </div>
                    })}

                </div>
                <a href="#top"><img src={ArrowUp} alt="" className="return-top"/></a>
            </div>
        </div>
    )
}
export default ProjectsPage