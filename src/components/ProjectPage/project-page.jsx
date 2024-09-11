import './project-page.css'

import img1 from '../../assets/imgs/project1/app-challenge-hard.png'
import img2 from '../../assets/imgs/project1/app-admin-menu.png'
import img3 from '../../assets/imgs/project1/app-challenge-modify.png'
import img4 from '../../assets/imgs/project1/app-challenge-solve.png'
import img5 from '../../assets/imgs/project1/app-challenge.png'
import img6 from '../../assets/imgs/project1/app-contest-submissions.png'
import img7 from '../../assets/imgs/project1/app-profile.png'
import img8 from '../../assets/imgs/project1/landing-slide.png'

import img11 from '../../assets/imgs/project2/Alchemy in Space.png'
import img12 from '../../assets/imgs/project2/Bomb Defuse.png'
import img13 from '../../assets/imgs/project2/Demo of the app for the players.jpg'
import img14 from '../../assets/imgs/project2/Game Manual.png'
import img15 from '../../assets/imgs/project2/Home Page.png'
import img16 from '../../assets/imgs/project2/Gem Inspector.png'
import img17 from '../../assets/imgs/project2/Space Diplomat.png'

import img21 from '../../assets/imgs/project3/robert1.png'
import img22 from '../../assets/imgs/project3/robert2.png'
import img23 from '../../assets/imgs/project3/robert3.png'
import img24 from '../../assets/imgs/project3/robert4.png'

import img31 from '../../assets/imgs/project4/nokia1.jpeg'
import img32 from '../../assets/imgs/project4/nokia2.jpeg'
import img33 from '../../assets/imgs/project4/nokia3.jpeg'
import img34 from '../../assets/imgs/project4/nokia4.jpeg'

import img41 from '../../assets/imgs/project5/airobo1.png'
import img42 from '../../assets/imgs/project5/airobo2.png'
import img43 from '../../assets/imgs/project5/airobo3.png'
import img44 from '../../assets/imgs/project5/airobo4.png'
import img45 from '../../assets/imgs/project5/airobo5.png'

import img51 from '../../assets/imgs/project6/landing1.png'
import img52 from '../../assets/imgs/project6/landing2.png'
import img53 from '../../assets/imgs/project6/landing3.png'
import img54 from '../../assets/imgs/project6/landing4.png'
import img55 from '../../assets/imgs/project6/landing5.png'

import img61 from '../../assets/imgs/project7/educational1.png'
import img62 from '../../assets/imgs/project7/educational2.png'
import img63 from '../../assets/imgs/educational.png'

import img71 from '../../assets/imgs/project8/info1.jpeg'
import img72 from '../../assets/imgs/project8/info2.jpeg'

import ProjectTemplatePage from "./ProjectTemplatePage/project-template-page.jsx";
import {useState} from "react";
const ProjectPage = ({lastScroll, project, setProject}) => {
    let imgs, description, title, cover

    switch(project) {
        case 0:
            imgs = [img1, img2, img3, img4, img5, img6, img7, img8]
            description = '<p>\n' +
                '                            <span className="high">CodeLighthouse</span> is my Bachelor\'s thesis that I have developed\n' +
                '                            and\n' +
                '                            documented in 2024 in order to finish my Undergraduate studies.\n' +
                '                        </p>\n' +
                '                        <p>\n' +
                '                            Automated Online Assessments Platform (referred to as CodeLighthouse) is a web application\n' +
                '                            that\n' +
                '                            allows users to hone their coding skills in a pleasant and community-based way. The users\n' +
                '                            are\n' +
                '                            able to check their proposed solutions for coding challenges that are offered by the\n' +
                '                            application, directly into their browser. The platform offers automatic solution verifying.\n' +
                '                        </p>\n' +
                '                        <p>\n' +
                '                            In addition, the application offers support for creating groups of people (referred to as\n' +
                '                            Lighthouses) that can either be Private (joining will be done with the help of a randomly\n' +
                '                            generated code), or Public (referred to as Communities in the following). The enrollment\n' +
                '                            code of\n' +
                '                            a community is public and can be used to join the group. One proposed usage scenario for\n' +
                '                            communities is to be used as a way of checking out what certain institutions are up to, for\n' +
                '                            example: Universities or Big tech companies (via interview questions).\n' +
                '                        </p>\n' +
                '                        <p>\n' +
                '                            Running contests on the platform is also possible. An admin can create either a private\n' +
                '                            contest\n' +
                '                            and upload a custom participants list to then have accounts automatically created and sent\n' +
                '                            (via\n' +
                '                            e-mail) to each and every one of them or a public contest (open contest), that allows any\n' +
                '                            user\n' +
                '                            on the platform to participate. One identified usage scenario is for tech companies that\n' +
                '                            want to\n' +
                '                            run talent acquisition-like campaigns.\n' +
                '                        </p>\n' +
                '                        <p>\n' +
                '                            The solution is initially presented from an architectural perspective that is followed by\n' +
                '                            the\n' +
                '                            features and use cases of the application.\n' +
                '                        </p>\n' +
                '                        <p>\n' +
                '                            Keywords: automated assessments, coding challenges, web application, competitive\n' +
                '                            programming.\n' +
                '                        </p>'
            title = 'CodeLighthouse - Automated Online Assessments Platform'
            break
        case 1:
            imgs = [img11, img12, img13, img14, img15, img16, img17]
            description = '' +
                '<p>I have designed and developed the application that competitors will interact with after retrieving the secrets using the robots. These users are called the <span class="high">human players.</span>\n</p>' +
                '\n' +
                '<p>The application consists of 4 different mini-games that human players must solve quickly while using a game manual to reveal some secrets.\n</p>' +
                '<p>All of the 4 mini-games were designed and developed entirely by me.\n</p>' +
                '\n' +
                '<p><span class="high">These include:</span>\n</p>' +
                '<ul>' +
                '<li>"Alchemy" - like game where you must combine different elements to try and obtain a target one.\n</li>' +
                '<li>"Papers please!" - like game where you are given a gem and must determine wheter it is authentic or fake by running some tests with given tools and comparing their results to you handbook.\n</li>' +
                '<li>"Bomb defusal" - like game where you are given the connectors of a bomb and 4 buttons that must be pressed in a certain order influenced by the wire connections.\n</li>' +
                '<li>"Space diplomat" game where two factions collide and demand some resources. Based on your available resources, you must decide on 3 possible actions based on the game manual.\n</>' +
                '</ul>' +
                '\n' +
                '<p>The games were designed to be solvable in 15-30 seconds if the manual was studied prior to the game.\n</p>' +
                '\n' +
                '<p>Whenever a game is completed, a piece of a secret is revealed and the players are then returned to the home page where they are prompted to enter a new code. If the code is correct, they will be given a new mini-game to solve.</p>'
            title = 'Open Robotics Intelligent Grid'
            break
        case 2:
            imgs = [img21, img22, img23, img24]
            description = `<p> I have revised and optimised the website <span class="high">"Ora lui Robert"</span> from Jul 2023 to Nov 2023.</p>
<p> My effort includes:</p>
<ul>
<li>Creating a Parallax effect for the hero section</li>
<li>Creating a SEO plan for the web app</li>
<li>Adding the responsiveness needed for widescreens / desktops / tablets / phones</li>
<li>Fixing the visual symmetry of the site</li>
<li>Adding new menus to make navigation on longer pages simpler.</li>
<li>Customizing the individual post page to make it a lot more attractive.</li>
<li>Fixing many other bugs</li>
<li>Performance optimizations:</li>
<ul>
<li>Caching.</li>
<li>Image compressing to WebP automatically (and a batch job for the old ones).</li>
<li>Minify for CSS and JS automatically.</li>
</ul>
</ul>
<p> Starting from 01/02/2024 I am the official <span class="high">Web Developer</span> for the "Ora lui Robert" NGO.</p>
<p> My responsibilities include:</p>
<ul>
<li>
Facelifting and creating a new design for the website.
</li>
</ul>
<p> (07.08.2024) The website was subject to another facelifting to be on par with the specified requirements.</p>`
            title = 'Ora lui Robert NGO'
            break
        case 4:
            imgs = [img41, img42, img43, img44, img45]
            description = `<p>Following a recruitment process I have been selected to be part of the AiRobo implementation team as the <span class="high">Web Developer.</span>

<p>Since 1st of May 2024, my assignments changed from being a Web Developer to a Web Administrator.</p>
<p>I continue to administer the website that I have developed by posting new content, updating old one, improving and running continuous SEO campaigns, managing social media and YouTube accounts.</p>

<p><span class="high">My responsibilities include:</span></p>
<ul>
<li>Designing the web app.</li>
<li>Developing the web app.</li>
<li>Creating a SEO plan.</li>
<li>Administrating the application by maintaining it and keeping its information up to date.</li>
<li>Designing a visual identity that reflects the project goals.</li>
<li>Collaborating with international partners to keep everything in check and updated on the website.</li>
</ul>
<p><span class="high">Extra responsibilities:</span></p>
<ul>
<li>Managing the virtual identity of the project.</li>
<li>Managing the LinkedIn, Facebook, YouTube profiles.</li>
</ul>
<p><span class="high">Features I have implemented for this project:</span></p>
<ul>
<li>MailChimp integration.</li>
<li>Google Analytics integration.</li>
<li>Cookies policity to keep things in check with GDPR.</li>
</ul>
<p><span class="high">Milestones achieved:</span></p>
<ul>
<li>First position in SERP.</li>
<li>48% CTR in the first few months from the launch of the site.</li>
</ul>
<p>I have also helped with organising the first meeting that was held at WUT, 18 December 2023 by being present at the registrations desk.</p>

<p>Throughout the week I had the honour of discussing various details related to the website with the international partners at the first meeting of the project that was held at WUT.</p>

<p>The Website was developed in collaboration with the project Manager: Isabela Drămnesc.</p>`
            title = 'AiRobo Erasmus+ Project'
            break
        case 5:
            imgs = [img31, img32, img33, img34]
            description = `This project was built in collaboration with <span class="high">Nokia Romania.</span>
Personally I created the front-end of the app while being the leader of a team composed of 2 other people. The back-end was created by my colleagues.
The project involved more than just coding. It involved the entire <span class="high">SDLC scheme:</span>
<ul>
<li>Requirements</li>
<li>Design</li>
<li>Testing</li>
</ul>

Tech used in the front-end:
<ul>
<li>React JS.</li>
</ul>
In the back-end:
<ul>
<li>Java Spring</li>
</ul>

<span class="high">Features:</span>
<ul>
<li>Create a profile and see centralised info about your activity</li>
<li>Ask questions and get answers fast</li>
<li>Answer questions</li>
<li>Log in using your Google Account or GitHub Account, no need to remember another set of credentials</li>
<li>Add code to your posts in a dedicated editor</li>
<li>Pin favourites questions</li>
<li>Highlight pieces of code from your answers using three backticks \`\`\` like this\`\`\`. Let the automatic parser handle the rest for you.</li>
<li>PWA compliant</li>
<li>Lazy loading for questions to increase performance.</li>
<li>Personalised feed computed based on your selected interests and then sorted by their impact on the platform.</li>
<li>Like or dislike questions</li>
<li>Select and change the categories of questions you are interested in to change the personalised feed.</li>
</ul>

<span class="high">Collaborators:</span>
<ul> 
<li>Roxana Goina (backend)</li>
<li>Lazar Iasmina (backend)</li>
<li>Ligia-Tabita Pintea (Nokia coordinator)</li>
</ul> 
`
            title = 'Nokia Overflow'
            break
        case 6:
            imgs = [img51, img52, img53, img54, img55]
            description = `
            <p>While learning Web Development I have design and developed a plethora of landing pages to get a good <span class="high">grip</span>
            of how CSS and JS work.      </p>      
            <p>Some of my best works include:</p>
            <ul>
            <li>DelDrone</li>
            <li>Space | Planets | Life</li>
</ul>
`
            title = 'Landing Pages'
            break
        case 7:
            imgs = [img61, img62, img63]
            description = `
            <p>As a bachelor student, I chose to develop educational apps for most of my semester projects.</p>
            <p>These include:</p>
            <ul>
            <li><a href="https://stefan3002.github.io/SortAlgs/">SortAlgs</a> - Visualize sorting algorithms</li>
            <li><a href="https://boisterous-stroopwafel-5eb152.netlify.app/">RBTree Visualizer</a> - Visualize how a red-black tree works</li>
            <li><a href="https://benevolent-dolphin-774c88.netlify.app/">MinMax - AlphaBetaPruning Visualizer</a> - Visualize how the alpha-beta pruning algorithm works</li>
</ul>
`
            title = 'Educational Apps'
            break
        case 8:
            imgs = [img71, img72]
            description = `<p><span class="high">(June 2024)</span></p>
<p>
I created another script for automating the process of verifying the date of the last possible day to grade students in the electronic catalogue and sending e-mails as reminders.</p>

<p><span class="high">(July - September 2023)</span></p>
<p>As a WEB Administrator for FMI WUT I also developed 3 Google Scripts that help the University Infocentre in managing e-mails for a large amount of incoming requests.</p>
<p><span class="high">The 3 scripts include:</span></p>
<ul>
<li>Automatic e-mail sender and custom view of the student's data for applications for re-registration.</li>
<li>Automatic e-mail sender and custom view of the student's data for schooling extension requests.</li>
<li>Automatic e-mail sender and custom view of the student's data for repeating studies requests.</li>
</ul>
<p><span class="high">The scripts: </span></p>
<ul>
<li>Can run through multiple Google Sheet files from your Drive and multiple sheets that each file may have. This way, one script will account for all 12 faculties (each with its own file) of the University.</li>
<li>Verify certain conditions for multiple columns of a Google Sheet. </li>
<li>Account for unexpected errors that may occur and retry to send the e-mails the next time they are run.</li>
<li>Verify more than one sheet on the provided Google Sheet. (e.g: Master students, Bachelor students)</li>
<li>Take into account that the rows may not all be in the same state (e.g: some may be at step one (as they were just added) while others may be at step 3).</li>
<li>Provide error handling to account for misspelling sheet / file names. (e.g: the script will not crash if you misspell a file name)</li>
</ul>
<p>The scripts were designed to be used with an automatic trigger that will keep running them to watch for new data that may have appeared.</p>

<p><span class="high">Tech stack used:</span></p>
<ul>
<li>JavaScript</li>
<li>Google Scripts APIs</li>
</ul>
<p>This project was done in collaboration with the head of the infocentre who provided all of the data necessary.</p>`
            title = 'Infocentre Automations'
            break
    }


    return <ProjectTemplatePage lastScroll={lastScroll} title={title} description={description} imgs={imgs} setProject={setProject}/>

}
export default ProjectPage