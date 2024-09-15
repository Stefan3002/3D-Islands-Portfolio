import './landing-page.css'
import Button from "../Button/button.jsx";
import darkSVG from '../../../public/svgs/darkSVG.svg'
import sunSVG from '../../../public/svgs/sunSVG.svg'
import {useGLTF} from "@react-three/drei";


import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {
    setScene2I,
    setScene2P,
    setScene3I,
    setScene3P,
    setScene4I, setScene4P, setScene5I, setScene5P
} from "../../../utils/store/utils-store/utils-store-actions.js";
import Preloader from "../Preloader/preloader.jsx";

const LandingPage = ({night, setNight, setStarted}) => {





    const startJourney = () => {
        document.querySelector('.landing-title').classList.add('fade-out')
        document.querySelector('.landing-description').classList.add('fade-out')
        document.querySelector('.start-button').classList.add('fade-out')
        document.querySelectorAll('.scheme-option').forEach(el => {
            el.classList.add('fade-out')
        })
        document.querySelector('body').style.minHeight = '200vh'
        setTimeout(() => setStarted(true), 400)
    }

    const goDark = () => {
        setNight(!night)
        if(!night)
            document.querySelector('body').classList.add('dark')
        else
            document.querySelector('body').classList.remove('dark')
    }

    const changeColorScheme = (color) => {
        goDark()
    }

    return (
        <>
            <div className='landing-page'>
                <section className="wrapper">
                    <h1 className='landing-title'>Ștefan Secrieru</h1>
                    <p className='landing-description'>Master student and Web Administrator. Web technologies are my passion.</p>
                    {/*<h2 className='landing-catch'>How about you explore my life?</h2>*/}
                    <div className="color-scheme-landing">
                        <img className='scheme-option' src={sunSVG} onClick={() => changeColorScheme()}/>
                        <img className='scheme-option' src={darkSVG} onClick={() => changeColorScheme()}/>
                    </div>
                    <Button callback={startJourney} customClass='start-button' text='Start journey' />
                </section>
            </div>
        </>
    )
}
export default LandingPage