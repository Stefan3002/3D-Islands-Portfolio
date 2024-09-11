import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../general.css'
import '../src/components/LoadingScreen/loading-screen.css'
import HomePage from "./components/HomePage/home-page.jsx";
import LandingPage from "./components/LandingPage/landing-page.jsx";

function App() {
    const [started, setStarted] = useState(false)
    const [night, setNight] = useState(false)
    if(started)
        return <HomePage night={night} setNight={setNight} />
    else
        return <LandingPage night={night} setNight={setNight} setStarted={setStarted} />
}

export default App
