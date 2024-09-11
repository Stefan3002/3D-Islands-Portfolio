import './experience-page.css'
import Button from "../../Button/button.jsx";
import ArrowUp from "../../../assets/svgs/arrow-up.svg";
import scrollSVG from "../../../assets/svgs/scroll.svg";
const ExperiencePage = () => {
    return (
        <div className='about-page education-page slide-left info-page experience-page'>
            <span id="top" />
            <div className="about-page-top">
                <h2 className='about-title'>Professional experience</h2>
                <div className="about-buttons">
                    <Button callback='https://info.uvt.ro/staff/stefan-secrieru/' type='anchor'
                            customClass='info-button' text='Work page'/>
                    {/*<Button customClass='info-button' text='LinkedIn'/>*/}
                </div>
                <img src={scrollSVG} alt="" className="scroll-svg"/>
            </div>
            <div className="about-highs wrapper">
            <div className='about-high about-high1'>
                    <p className='about-high-value'>Web admin</p>
                    <p className='about-high-key'>WUT</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Student member</p>
                    <p className='about-high-key'>RSMI</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Freelancer</p>
                    <p className='about-high-key'>Ora lui Robert</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Web dev</p>
                    <p className='about-high-key'>AiRobo-Erasmus+</p>
                </div>

            </div>
            <div className="about-page-bottom info-page-bottom wrapper">
                <div className="about-section">
                    <h3 className='about-section-title'>Web admin @ WUT IMF</h3>
                    <p className='about-section-body'>
                        Since May 2023 I am the <span className="high">Web administrator</span> of the Faculty of Mathematics and Computer Science, West University of Timișoara.
                        I have administrated, developed, changed, modified the websites of the faculty since then. This position also allowed me to participate in many other projects, contests, conferences as a member of the <span className="high">organising committees.</span>
                    </p>
                </div>
                <div className="about-section">
                    <h3 className='about-section-title'>Freelancing</h3>
                    <p className='about-section-body'>
                        I also got a taste of the freelancing industry by developing the official <span className="high"><a
                        href="https://oraluirobert.com/">"Ora lui Robert"</a></span> NGO website.
                    </p>
                </div>
                <div className="about-section">
                    <h3 className='about-section-title'>Extra projects</h3>
                    <p className='about-section-body'>
                        In december 2023, following a recruitment interview I was selected
                        as the official Web developer for the implementation team of the
                        <span className="high"> <a href="https://airobo.info.uvt.ro">Artificial Intelligence based Robotics, KA220-HED-000152418</a></span> Erasmus+ project.
                    </p>
                </div>
                <a href="#top"><img src={ArrowUp} alt="" className="return-top"/></a>
            </div>
        </div>
    )
}
export default ExperiencePage