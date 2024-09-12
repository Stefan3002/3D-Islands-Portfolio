import './info-page.css'
import './about-page.css'
import './education-page.css'
import Button from "../Button/button.jsx";
import ArrowUp from '../../../public/svgs/arrow-up.svg'
import {useEffect} from "react";
import ExperiencePage from "./ExperiencePage/experience-page.jsx";
import ProjectsPage from "./ProjectsPage/projects-page.jsx";
import LegalPage from "./LegalPage/legal-page.jsx";
import SkillsPage from "./SkillsPage/skills-page.jsx";
import EducationPage from "./EducationPage/education-page.jsx";
import PresentationPage from "./PresentationPage/presentation-page.jsx";
import {bkPoint} from "../../../utils/responsiveness.js";
const InfoPage = ({setLastScroll, project, setProject, page, scrollHandler}) => {


    useEffect(() => {
        document.querySelector('.info-page').addEventListener('scroll', scrollHandler)
    }, []);

    let animation = 'slide-left'
    if(window.innerWidth < bkPoint)
        animation = 'slide-up'


    if(page === 0)
        return <PresentationPage animation={animation} />
    else if(page === 1)
        return <EducationPage animation={animation} />
    else if(page === 2)
        return <ExperiencePage animation={animation} />
    else if(page === 3)
        return <ProjectsPage animation={animation} setLastScroll={setLastScroll} project={project} setProject={setProject} />
    else if(page === 4)
        return <SkillsPage animation={animation} />
    else if(page === 5)
        return <LegalPage animation={animation} />
}
export default InfoPage