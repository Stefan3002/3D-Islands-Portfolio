import './loading-screen.css'
import loaderSVG from '../../../public/svgs/loader.svg'
import {Html, useProgress} from "@react-three/drei";
import {useEffect, useState} from "react";
const LoadingScreen = () => {
    const {active, progress,  loaded, total, item} = useProgress()
    const [assetNumber, setAssetNumber] = useState(0)

    useEffect(() => {
        setAssetNumber(oldAssetNumber => oldAssetNumber  + 1)
    }, [item])


    return (
        // <Html>
            <div className="loading-screen">
                <img className='loader' src={loaderSVG} alt=""/>
                <p className='loader-progress'>{Math.trunc(progress)}%</p>
                <p className='loader-progress'>{loaded} / {total} triangles loaded.</p>
                <p className='loader-progress'>{assetNumber} / 20 models loaded.</p>
                {/*<p className='loader-progress'>{item}</p>*/}
            </div>
        // </Html>
    )
}
export default LoadingScreen