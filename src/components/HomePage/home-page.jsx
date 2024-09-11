import './home-page.css'
import {Suspense, useEffect, useRef, useState} from "react";
import {Canvas, useThree} from '@react-three/fiber'
import Island1 from "../Islands/Island1/island1.jsx";
import LoadingScreen from "../LoadingScreen/loading-screen.jsx";
import Listener from "../Listener/listener.jsx";
import Navigation from "../Navigation/navigation.jsx";
import InfoPage from "../InfoPage/info-page.jsx";
import Island2 from "../Islands/Island2/island2.jsx";
import Plane from "../ExtraModels/Plane/plane.jsx";
import Bird from "../ExtraModels/Bird/bird.jsx";
import Island3 from "../Islands/Island3/island3.jsx";
import Plane2 from "../ExtraModels/Plane2/plane2.jsx";
import Island4 from "../Islands/Island4/island4.jsx";
import Plane3 from "../ExtraModels/Plane3/plane3.jsx";
import Island5 from "../Islands/Island5/island5.jsx";
import Plane4 from "../ExtraModels/Plane4/plane4.jsx";
import ProjectsPage from "../InfoPage/ProjectsPage/projects-page.jsx";
import ProjectPage from "../ProjectPage/project-page.jsx";
const HomePage = ({night, setNight}) => {
    const [isRotating, setIsRotating] = useState(false);
    const island = useRef()
    const [page, setPage] = useState(0)
    const [infoVisible, setInfoVisible] = useState(false)
    const [project, setProject] = useState(null)
    const scrollHandler = useRef()
    const [lastScroll, setLastScroll] = useState(0)

    const [ready, setReady] = useState(false)
    const spotLightRef = useRef()

    const canvasCreated = ({camera, viewport, gl}) => {
        camera.rotation.set(-.4,0,0)
        camera.position.set(0, 2, 4)
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    useEffect(() => {
        if(spotLightRef.current)
            setReady(true)
    }, [spotLightRef]);


    return (
        <div className='home-page'>
            {/*<LoadingScreen />*/}
            <Suspense fallback={<LoadingScreen />}>
                <Navigation scrollListener={scrollHandler.current} page={page} setPage={setPage} setNight={setNight} night={night} />

                <Canvas className='slide-down-canvas' camera={{
                near: .1,
                far: 100,
            }} onCreated={canvasCreated}>

                    {/*<ambientLight intensity={.1}/>*/}
                    {!night ? <>
                        <directionalLight intensity={3}/>
                        <hemisphereLight intensity={1.5} groundColor='#070F2B' skyColor='#FCFF4B'/>
                    </> :
                        page === 0 ?
                            <>
                                <hemisphereLight intensity={.5} groundColor='#070F2B' skyColor='#FCFF4B'/>
                                <spotLight intesity={1} position={[1.7, 1.5, 1]}/>
                                <spotLight intesity={1} position={[-1.7, 1.5, 1]}/>
                                {/*{ready && <spotLightHelper args={[spotLightRef.current, 2]}/>}*/}
                            </> :
                            page === 1 ?
                                <>
                                    <hemisphereLight intensity={.5} groundColor='#070F2B' skyColor='#FCFF4B'/>
                                    <pointLight intensity={2.5} position={[0, 1.5, 0]}/>
                                    <spotLight intensity={3} position={[3, 1.5, 1]}/>
                                    <spotLight intensity={3} position={[-3, 1.5, 1]}/>
                                </>
                                : page === 2 ?
                                    <>
                                        <hemisphereLight intensity={.5} groundColor='#070F2B' skyColor='#FCFF4B'/>
                                        <spotLight intesity={11} position={[2, 2, 1]}/>
                                        <spotLight intesity={11} position={[-2, 2, 1]}/>
                                        <pointLight intensity={2.5} position={[0, 1.5, 0]}/>
                                    </>
                                    : page === 3 ?
                                        <>
                                            <hemisphereLight intensity={.5} groundColor='#070F2B' skyColor='#FCFF4B'/>
                                            <spotLight intesity={11} position={[2, 2, 1]}/>
                                            <spotLight intesity={11} position={[-2, 2, 1]}/>
                                            <pointLight intensity={2.5} position={[0, 1.5, 0]}/>
                                        </>
                                        : page === 4 ?
                                            <>
                                                <hemisphereLight intensity={.5} groundColor='#070F2B' skyColor='#FCFF4B'/>
                                                <spotLight intesity={11} position={[2, 2, 1]}/>
                                                <spotLight intesity={11} position={[-2, 2, 1]}/>
                                                <pointLight intensity={2.5} position={[0, 1.5, 0]}/>
                                            </>
                                            : page === 5 ?
                                                <>
                                                    <hemisphereLight intensity={.5} groundColor='#070F2B' skyColor='#FCFF4B'/>
                                                    <spotLight intesity={1} position={[1.7, 1.5, 1]}/>
                                                    <spotLight intesity={1} position={[-1.7, 1.5, 1]}/>
                                                    {/*{ready && <spotLightHelper args={[spotLightRef.current, 2]}/>}*/}
                                                </> : null

                    }
                    {page === 0 ?
                        <>
                            <pointLight intensity={2.5} position={[0, 1, 0]}/>
                            <Island1 scrollHandler={scrollHandler.current} mesh={island} position={[0, 0, 0]} scale={[0, 0, 0]} rotation={[0, -2, 0]}/>
                            <Plane position={[0, 1.5, 0]} rotation={[0, 20, 0]} scale={[0, 0, 0]}/>
                        </>
                        : page === 1 ?
                            <>
                                {/*<pointLight intensity={2.5} position={[-2, 1, 0]}/>*/}
                                <Island2 scrollHandler={scrollHandler.current} mesh={island} position={[-.2, -.8, 0]} scale={[0, 0, 0]}
                                         rotation={[0, -2, 0]}/>
                                <Bird scale={[0, 0, 0]} position={[-.2, 2.3, 0]}/>
                            </>
                            : page === 2 ?
                                <>
                                    {/*<pointLight intensity={2.5} position={[-2, 1, 0]}/>*/}
                                    <Island3 scrollHandler={scrollHandler.current} mesh={island} position={[0, 1, 0]} scale={[0, 0, 0]}
                                             rotation={[0, 0, 0]}/>
                                    <Plane2 scale={[0, 0, 0]} position={[-.2, 2.3, 0]} rotation={[0, -21, 0]}/>
                                </> : page === 3 ?
                                    <>
                                        {/*<pointLight intensity={2.5} position={[-2, 1, 0]}/>*/}
                                        <Island4 scrollHandler={scrollHandler.current} mesh={island} position={[-.2, 1, 0]} scale={[0, 0, 0]}
                                                 rotation={[0, -.5, 0]}/>
                                        <Plane3 scale={[0, 0, 0]} rotation={[0, 4, 0]} position={[-.2, 2, 0]}/>
                                    </> : page === 4 ?
                                        <>
                                            {/*<pointLight intensity={2.5} position={[-2, 1, 0]}/>*/}
                                            <Island5 scrollHandler={scrollHandler.current} mesh={island} position={[-.2, .4, 0]} scale={[0, 0, 0]}
                                                     rotation={[0, -4, 0]}/>
                                            <Plane4 scale={[0, 0, 0]} position={[-.2, 2, 0]} rotation={[0, 2.5, 0]}/>
                                        </> : page === 5 ?
                                            <>
                                                <pointLight intensity={2.5} position={[0, 1, 0]}/>
                                                <Island1 scrollHandler={scrollHandler.current} mesh={island} position={[0, 0, 0]} scale={[0, 0, 0]} rotation={[0, -2, 0]}/>
                                                <Bird position={[0, 2, 0]} rotation={[0, 6.5, 0]} scale={[0, 0, 0]}/>
                                            </> : null
                    }
                    <Listener project={project} scrollHandlerRef={scrollHandler} infoVisible={infoVisible} setInfoVisible={setInfoVisible}
                              island={island} isRotating={isRotating} setIsRotating={setIsRotating}/>

            </Canvas>
                {infoVisible && project === null && <InfoPage setLastScroll={setLastScroll} project={project} setProject={setProject} scrollHandler={scrollHandler.current} page={page} />}
                {project !== null && <ProjectPage lastScroll={lastScroll} project={project} setProject={setProject} />}
            </Suspense>

        </div>
    )
}
export default HomePage