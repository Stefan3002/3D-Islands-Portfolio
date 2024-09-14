import './project-page.css'

import img1 from '/imgs/project1/app-challenge-hard.webp'
import img2 from '/imgs/project1/app-admin-menu.webp'
import img3 from '/imgs/project1/app-challenge-modify.webp'
import img4 from '/imgs/project1/app-challenge-solve.webp'
import img5 from '/imgs/project1/app-challenge.webp'
import img6 from '/imgs/project1/app-contest-submissions.webp'
import img7 from '/imgs/project1/app-profile.webp'
import img8 from '/imgs/project1/landing-slide.webp'

import img11 from '/imgs/project2/Alchemy in Space.webp'
import img12 from '/imgs/project2/Bomb Defuse.webp'
import img13 from '/imgs/project2/Demo of the app for the players.webp'
import img14 from '/imgs/project2/Game Manual.webp'
import img15 from '/imgs/project2/Home Page.webp'
import img16 from '/imgs/project2/Gem Inspector.webp'
import img17 from '/imgs/project2/Space Diplomat.webp'

import img21 from '/imgs/project3/robert1.webp'
import img22 from '/imgs/project3/robert2.webp'
import img23 from '/imgs/project3/robert3.webp'
import img24 from '/imgs/project3/robert4.webp'

import img31 from '/imgs/project4/nokia1.webp'
import img32 from '/imgs/project4/nokia2.webp'
import img33 from '/imgs/project4/nokia3.webp'
import img34 from '/imgs/project4/nokia4.webp'

import img41 from '/imgs/project5/airobo1.webp'
import img42 from '/imgs/project5/airobo2.webp'
import img43 from '/imgs/project5/airobo3.webp'
import img44 from '/imgs/project5/airobo4.webp'
import img45 from '/imgs/project5/airobo5.webp'

import img51 from '/imgs/project6/landing1.webp'
import img52 from '/imgs/project6/landing2.webp'
import img53 from '/imgs/project6/landing3.webp'
import img54 from '/imgs/project6/landing4.webp'
import img55 from '/imgs/project6/landing5.webp'

import img61 from '/imgs/project7/educational1.webp'
import img62 from '/imgs/project7/educational2.webp'
import img63 from '/imgs/educational.webp'

import img71 from '/imgs/project8/info1.webp'
import img72 from '/imgs/project8/info2.webp'

import img81 from '/imgs/project9/rsmi1.webp'
import img82 from '/imgs/project9/rsmi2.webp'
import img83 from '/imgs/project9/rsmi3.webp'
import img84 from '/imgs/project9/rsmi4.webp'
import img85 from '/imgs/project9/rsmi5.webp'
import img86 from '/imgs/project9/rsmi6.webp'

import img91 from '/imgs/project10/shopnall1.webp'
import img92 from '/imgs/project10/shopnall2.webp'
import img93 from '/imgs/project10/shopnall3.webp'

import img101 from '/imgs/project11/minigames1.webp'

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