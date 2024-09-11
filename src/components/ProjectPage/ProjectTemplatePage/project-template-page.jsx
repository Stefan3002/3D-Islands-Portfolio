import './project-template-page.css'

import projectImg from '../../../assets/imgs/Codelighthouse.png'
import {useState} from "react";
import LightBox from "../../LightBox/light-box.jsx";
import closeSvg from "../../../assets/svgs/close.svg";

const ProjectTemplatePage = ({lastScroll, title, setProject, description, imgs}) => {
    const [lightBoxImg, setLightBoxImg] = useState(null)


    const closeProject = () => {
        setProject(null)
        document.querySelector('body').style.minHeight = '200vh'
        window.scrollTo(0, lastScroll)
    }

    return (
        <>
            {lightBoxImg && <LightBox setLightBoxImg={setLightBoxImg} img={lightBoxImg} />}
            <div style={{ background: `linear-gradient(to right, rgba(0, 0, 0, 0), #070F2B), linear-gradient(to bottom, rgba(0, 0, 0, 0), #070F2B)`
            }} className='slide-up project1-page project-page'>
                <img src={closeSvg} onClick={closeProject} className="close-btn"/>

                <div className="project-left">
                    <h2 className='project-title'>{title}</h2>
                </div>

                <div className="wrapper project-right">
                    <div dangerouslySetInnerHTML={{__html: description}} className="project-description">
                        {/*<p dangerouslySetInnerHTML={{__html: description}}></p>*/}
                    </div>

                    <div className="project-gallery">

                        {imgs.map((img, index) => {
                            return (
                                <div onClick={() => setLightBoxImg(img)} className='project-gallery-image'>
                                    <span className="project-gallery-bg">View</span>
                                    <img className='project-gallery-image' src={img} alt=""/>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectTemplatePage