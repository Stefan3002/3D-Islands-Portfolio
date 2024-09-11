import './education-page.css'
import Button from "../../Button/button.jsx";
import ArrowUp from "../../../../public/svgs/arrow-up.svg";
import scrollSVG from "../../../../public/svgs/scroll.svg";
const EducationPage = () => {
    return (
        <div className='about-page education-page slide-left info-page'>
            <span id="top"/>
            <div className="about-page-top">
                <h2 className='about-title'>My education</h2>
                <div className="about-buttons">
                    <Button callback='/resume.pdf' type='anchor' customClass='info-button' text='Resume'/>
                    {/*<Button customClass='info-button' text='LinkedIn'/>*/}
                </div>
                <img src={scrollSVG} alt="" className="scroll-svg"/>
            </div>
            <div className="about-highs wrapper">
            <div className='about-high about-high1'>
                    <p className='about-high-value'>Bachelor's</p>
                    <p className='about-high-key'>Last degree</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Master</p>
                    <p className='about-high-key'>Ongoing degree</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Student</p>
                    <p className='about-high-key'>West University of Timișoara</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>ZTM, Academind</p>
                    <p className='about-high-key'>Online academies</p>
                </div>

            </div>
            <div className="about-page-bottom info-page-bottom wrapper">
                <div className="about-section">
                    <h3 className='about-section-title'>Bachelor's degree</h3>
                    <p className='about-section-body'>
                        I started my Bachelor studies in 2021 and finished them by July 2024 with a <span
                        className="high">GPA of
                            9.56 </span> on a 10-point scale. My Bachelor paper is called: <span className="high">"CodeLighthouse - Automated Online Assessments Platform" </span>
                        and consists of a Web application that allows users to solve online coding challenges directly
                        in their browser.
                        They can also see the result of their code execution, errors, test cases <span className="high">straight in the browser</span>.
                        It features groups, contests, hard-coded tests, randomly generated ones.
                    </p>
                </div>
                <div className="about-section">
                    <h3 className='about-section-title'>Master studies</h3>
                    <p className='about-section-body'>
                        Currently I am a Master student in <span className="high">Artificial Intelligence and Distributed Computing</span> at
                        West University of Timișoara.
                    </p>
                </div>
                <div className="about-section">
                    <h3 className='about-section-title'>Online academies</h3>
                    <p className='about-section-body'>
                        Since 2022 I am also polishing and developing my programming skills using courses from the <span
                        className="high">Zero to Mastery and Academind</span> online academies.
                    </p>
                </div>
                <a href="#top"><img src={ArrowUp} alt="" className="return-top"/></a>
            </div>
        </div>
    )
}
export default EducationPage