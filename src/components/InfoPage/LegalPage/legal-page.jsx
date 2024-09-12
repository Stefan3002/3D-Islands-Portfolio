import './legal-page.css'
import Button from "../../Button/button.jsx";
import ArrowUp from "../../../../public/svgs/arrow-up.svg";
import scrollSVG from "../../../../public/svgs/scroll.svg";
const LegalPage = ({animation}) => {
    return (
        <div className={`about-page projects-page ${animation} info-page legal-page`}>
            <span id="top" />
            <div className="about-page-top">
                <h2 className='about-title'>Legal</h2>
                <div className="about-buttons">
                    {/*<Button customClass='info-button' text='Resume'/>*/}
                    {/*<Button customClass='info-button' text='LinkedIn'/>*/}
                </div>
                <img src={scrollSVG} alt="" className="scroll-svg"/>
            </div>
            <div className="about-highs wrapper">
            <div className='about-high about-high1'>
                    <p className='about-high-value'>Sketchfab</p>
                    <p className='about-high-key'>3D models</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Joshua's World</p>
                    <p className='about-high-key'>Inspiration</p>
                </div>
                <div className='about-high about-high1'>
                    <p className='about-high-value'>Inside Out</p>
                    <p className='about-high-key'>Inspiration</p>
                </div>

            </div>
            <div className="about-page-bottom info-page-bottom wrapper">
                <div className="about-section">
                    <h3 className='about-section-title'>Inspiration</h3>
                    <p className='about-section-body'>
                        This 3D portfolio experience was inspired by the awesome work of Joshua for his <span
                        className="high"><a
                        href="https://www.joshuas.world/">"Joshua's World"</a></span> experience.
                        The idea of the different islands representing different areas of my life is inspired by the
                        Pixar's <span className="high"><a
                        href="https://www.imdb.com/title/tt2096673/">"Inside Out"</a></span>
                        movies.
                    </p>
                </div>
                <div className="about-section">
                    <h3 className='about-section-title'>3D Models</h3>
                    <p className='about-section-body'>
                        All models used were taken from Sketchfab. Many <span className="high">thanks</span> to the following authors that made this experience possible:
                        <ul>
                            <li>"Low poly floating island" (https://skfb.ly/6Utoq) by JavierG is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</li>
                            <li>"Low poly forest" (https://skfb.ly/6WSIq) by konstaintin is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</li>
                            <li>"Stylized WW1 Plane" (https://skfb.ly/6ZFnM) by AntijnvanderGun is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</li>
                            <li>"phoenix bird" (https://skfb.ly/6vLBp) by NORBERTO-3D is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</li>
                            <li>"Low poly island" (https://skfb.ly/6X7SH) by Niraj is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</li>
                            <li>"DAE The Flying Circus Koi Fish" (https://skfb.ly/oFz9s) by Petru Grati is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</li>
                            <li>"low poly island" (https://skfb.ly/6YVAH) by exhaustedbagel is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</li>
                            <li>"Plane" (https://skfb.ly/JoXO) by osmosikum is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</li>
                            <li>"Island in the sky" (https://skfb.ly/6XYHv) by tab1bit0 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</li>
                            <li>"Model Plane" (https://skfb.ly/oCuO6) by profmarau is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</li>
                        </ul>
                    </p>
                </div>
                <a href="#top"><img src={ArrowUp} alt="" className="return-top"/></a>
            </div>
        </div>
    )
}
export default LegalPage