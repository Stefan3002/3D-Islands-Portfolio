import './loading-screen.css'
import loaderSVG from '../../../public/svgs/loader.svg'
import {Html, useProgress} from "@react-three/drei";
import {useEffect} from "react";
const LoadingScreen = () => {
    const {active, progress} = useProgress()

    return (
        // <Html>
            <div className="loading-screen">
                <img className='loader' src={loaderSVG} alt=""/>
                <p className='loader-progress'>{Math.trunc(progress)}%</p>
            </div>
        // </Html>
    )
}
export default LoadingScreen