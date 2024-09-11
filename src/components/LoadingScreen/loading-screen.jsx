import './loading-screen.css'
import loaderSVG from '../../../public/svgs/loader.svg'
import {Html} from "@react-three/drei";
const LoadingScreen = () => {
    return (
        <Html>
            <div className="loading-screen">
                <img className='loader' src={loaderSVG} alt=""/>
            </div>
        </Html>
    )
}
export default LoadingScreen