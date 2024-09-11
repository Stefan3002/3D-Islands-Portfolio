import './landing-page.css'
import Button from "../Button/button.jsx";
const LandingPage = ({night, setNight, setStarted}) => {

    const startJourney = () => {
        document.querySelector('.landing-title').classList.add('fade-out')
        document.querySelector('.landing-description').classList.add('fade-out')
        document.querySelector('.start-button').classList.add('fade-out')
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
        <div className='landing-page'>
            <section className="wrapper">
                <h1 className='landing-title'>Ștefan Secrieru</h1>
                <p className='landing-description'>Master student and Web Administrator. Web technologies are my passion.</p>
                {/*<h2 className='landing-catch'>How about you explore my life?</h2>*/}
                <div className="color-scheme-landing">
                    <p onClick={() => changeColorScheme()}>Light</p>
                    <p onClick={() => changeColorScheme()}>Dark</p>
                </div>
                <Button callback={startJourney} customClass='start-button' text='Start journey' />
            </section>
        </div>
    )
}
export default LandingPage