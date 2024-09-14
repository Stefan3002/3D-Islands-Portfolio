import './project-page.css'

import img1 from '/imgs/project1/app-challenge-hard.png'
import img2 from '/imgs/project1/app-admin-menu.png'
import img3 from '/imgs/project1/app-challenge-modify.png'
import img4 from '/imgs/project1/app-challenge-solve.png'
import img5 from '/imgs/project1/app-challenge.png'
import img6 from '/imgs/project1/app-contest-submissions.png'
import img7 from '/imgs/project1/app-profile.png'
import img8 from '/imgs/project1/landing-slide.png'

import img11 from '/imgs/project2/Alchemy in Space.png'
import img12 from '/imgs/project2/Bomb Defuse.png'
import img13 from '/imgs/project2/Demo of the app for the players.jpg'
import img14 from '/imgs/project2/Game Manual.png'
import img15 from '/imgs/project2/Home Page.png'
import img16 from '/imgs/project2/Gem Inspector.png'
import img17 from '/imgs/project2/Space Diplomat.png'

import img21 from '/imgs/project3/robert1.png'
import img22 from '/imgs/project3/robert2.png'
import img23 from '/imgs/project3/robert3.png'
import img24 from '/imgs/project3/robert4.png'

import img31 from '/imgs/project4/nokia1.jpeg'
import img32 from '/imgs/project4/nokia2.jpeg'
import img33 from '/imgs/project4/nokia3.jpeg'
import img34 from '/imgs/project4/nokia4.jpeg'

import img41 from '/imgs/project5/airobo1.png'
import img42 from '/imgs/project5/airobo2.png'
import img43 from '/imgs/project5/airobo3.png'
import img44 from '/imgs/project5/airobo4.png'
import img45 from '/imgs/project5/airobo5.png'

import img51 from '/imgs/project6/landing1.png'
import img52 from '/imgs/project6/landing2.png'
import img53 from '/imgs/project6/landing3.png'
import img54 from '/imgs/project6/landing4.png'
import img55 from '/imgs/project6/landing5.png'

import img61 from '/imgs/project7/educational1.png'
import img62 from '/imgs/project7/educational2.png'
import img63 from '/imgs/educational.png'

import img71 from '/imgs/project8/info1.jpeg'
import img72 from '/imgs/project8/info2.jpeg'

import img81 from '/imgs/project9/rsmi1.png'
import img82 from '/imgs/project9/rsmi2.png'
import img83 from '/imgs/project9/rsmi3.jpg'
import img84 from '/imgs/project9/rsmi4.jpg'
import img85 from '/imgs/project9/rsmi5.jpg'
import img86 from '/imgs/project9/rsmi6.jpg'

import img91 from '/imgs/project10/shopnall1.png'
import img92 from '/imgs/project10/shopnall2.png'
import img93 from '/imgs/project10/shopnall3.png'

import img101 from '/imgs/project11/minigames1.png'

import ProjectTemplatePage from "./ProjectTemplatePage/project-template-page.jsx";
import {useEffect, useState} from "react";
import {projectsInfo} from "../../../utils/info/projectsInfo.js";
const ProjectPage = ({lastScroll, project}) => {
    let imgs, description, title, cover

    switch(project) {
        case 0:
            imgs = [img1, img2, img3, img4, img5, img6, img7, img8]
            description = projectsInfo[0]
            title = 'CodeLighthouse - Automated Online Assessments Platform'
            break
        case 1:
            imgs = [img11, img12, img13, img14, img15, img16, img17]
            description = projectsInfo[1]
            title = 'Open Robotics Intelligent Grid'
            break
        case 2:
            imgs = [img21, img22, img23, img24]
            description = projectsInfo[2]
            title = 'Ora lui Robert NGO'
            break
        case 3:
            imgs = [img81, img82, img83, img84, img85, img86]
            description = projectsInfo[3]
            title = 'Romanian Society of Medical Informatics Web Site + Conferences Tech Support'
            break
        case 4:
            imgs = [img41, img42, img43, img44, img45]
            description = projectsInfo[4]
            title = 'AiRobo Erasmus+ Project'
            break
        case 5:
            imgs = [img31, img32, img33, img34]
            description = projectsInfo[5]
            title = 'Nokia Overflow'
            break
        case 6:
            imgs = [img51, img52, img53, img54, img55]
            description = projectsInfo[6]
            title = 'Landing Pages'
            break
        case 7:
            imgs = [img61, img62, img63]
            description = projectsInfo[7]
            title = 'Educational Apps'
            break
        case 8:
            imgs = [img71, img72]
            description = projectsInfo[8]
            title = 'Infocentre Automations'
            break
        case 9:
            imgs = [img91, img92, img93]
            description = projectsInfo[9]
            title = 'Shop-n-all E-commerce Website'
            break
        case 10:
            imgs = [img101]
            description = projectsInfo[10]
            title = 'Mini Games'
            break

    }


    return <ProjectTemplatePage lastScroll={lastScroll} title={title} description={description} imgs={imgs}/>

}
export default ProjectPage