import './presentation-page.css'
import Button from "../../Button/button.jsx";
import ArrowUp from "../../../../public/svgs/arrow-up.svg";
import scrollSVG from "../../../../public/svgs/scroll.svg";
const PresentationPage = () => {
    return (
        <div className='about-page slide-left info-page'>
            <span id="top"/>
            <div className="about-page-top">
                <h2 className='about-title'>About me</h2>
                <div className="about-buttons">
                    <Button callback='https://www.linkedin.com/in/%C8%99tefan-secrieru-b0b60b224/' type='anchor'
                            customClass='info-button' text='LinkedIn'/>
                    {/*<Button customClass='info-button' text='LinkedIn'/>*/}
                </div>
                <img src={scrollSVG} alt="" className="scroll-svg"/>
            </div>
            <div className="about-highs wrapper">
                <div className='about-high about-high1'>
                    <p className='about-high-value'>21</p>
                    <p className='about-high-key'>Age</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Romanian</p>
                    <p className='about-high-key'>Nationality</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Master</p>
                    <p className='about-high-key'>Student</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Web admin</p>
                    <p className='about-high-key'>Role</p>
                </div>

            </div>
            <div className="about-page-bottom info-page-bottom wrapper">
                <div className="about-section">
                    <h3 className='about-section-title'>The passion</h3>
                    <p className='about-section-body'><span className="high">The one thing</span> that gives me
                        goosebumps
                        is programming the Web and bending it to my will. I started learning Web technologies
                        in <span className="high">2021</span> on my first faculty year. Since then I learned a lot
                        about how the Web works, finished my <span className="high">Bachelor's studies</span> and
                        got admitted for my Master's ones.
                        I became a Web administrator for my faculty where I mainly work in Wordpress to facilitate
                        easy access to the website, but I have never forgotten the true definition of Web
                        development: <span className="high">programming</span>. This is why I also created apps
                        using React Js and JavaScript for other faculty-related projects.
                    </p>
                </div>
                <div className="about-section">
                    <h3 className='about-section-title'>How it's going</h3>
                    <p className='about-section-body'>
                        I am a working towards my Master's degree in <span className="high">Artificial Intelligence and Distributed Computing</span>,
                        a direction a bit different from the Web technologies that I am used to. I ended up choosing
                        this
                        Master direction because of my dream of becoming a <span
                        className="high">university teacher</span> and doing research work as AI would allow me to enter
                        the research field with ease.
                    </p>
                </div>
                <div className="about-section">
                    <h3 className='about-section-title'>How I hope it will go</h3>
                    <p className='about-section-body'>
                        I hope I will someday be a university teacher to be able to <span className="high">share my passion</span> for
                        the Web with other students.
                    </p>
                </div>
                <a href="#top"><img src={ArrowUp} alt="" className="return-top"/></a>
            </div>
        </div>
    )
}
export default PresentationPage