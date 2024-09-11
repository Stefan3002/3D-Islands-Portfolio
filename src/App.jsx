import {useEffect, useState} from 'react'
import './App.css'
import '../general.css'
import '../src/components/LoadingScreen/loading-screen.css'
import HomePage from "./components/HomePage/home-page.jsx";
import LandingPage from "./components/LandingPage/landing-page.jsx";
import {useGLTF} from "@react-three/drei";
import islandGLTF from "./assets/models/islands/low_poly_floating_island.glb";
import planeGltf from "./assets/models/extra/stylized_ww1_plane.glb";

function App() {
    const [started, setStarted] = useState(false)
    const [night, setNight] = useState(false)

    const [island1Nodes, setIsland1Nodes] = useState(null)
    const [plane1Nodes, setPlane1Nodes] = useState(null)

    const { nodes, materials } = useGLTF(islandGLTF)
    const { scene, animations} = useGLTF(planeGltf)

    useEffect(() => {
        setIsland1Nodes({nodes, materials})
    }, [nodes, materials]);

    useEffect(() => {
        setPlane1Nodes({scene, animations})
    }, [scene, animations]);


    if(started)
        return <HomePage plane1Nodes={plane1Nodes} island1Nodes={island1Nodes} night={night} setNight={setNight} />
    else
        return <LandingPage night={night} setNight={setNight} setStarted={setStarted} />
}

export default App
