import {useEffect, useState} from 'react'
import './App.css'
import '../general.css'
import '../src/components/LoadingScreen/loading-screen.css'
import HomePage from "./components/HomePage/home-page.jsx";
import LandingPage from "./components/LandingPage/landing-page.jsx";
import {useGLTF} from "@react-three/drei";
import islandGLTF from "./assets/models/islands/low_poly_floating_island.glb";
import planeGltf from "./assets/models/extra/stylized_ww1_plane.glb";
import islandGltf2 from "./assets/models/islands/low_poly_forest.glb";
import birdGltf from "./assets/models/extra/phoenix_bird.glb";

function App() {
    const [started, setStarted] = useState(false)
    const [night, setNight] = useState(false)

    const [island1Nodes, setIsland1Nodes] = useState(null)
    const [island2Nodes, setIsland2Nodes] = useState(null)
    const [plane1Nodes, setPlane1Nodes] = useState(null)
    const [birdNodes, setBirdNodes] = useState(null)

    const { nodes, materials } = useGLTF(islandGLTF)
    const { scene, animations} = useGLTF(planeGltf)

    const gltf2I = useGLTF(islandGltf2)
    const gltf2B = useGLTF(birdGltf)


    useEffect(() => {
        setIsland1Nodes({nodes, materials})
    }, [nodes, materials]);

    useEffect(() => {
        setIsland2Nodes({nodes: gltf2I.nodes, materials: gltf2I.materials})
    }, [gltf2I]);

    useEffect(() => {
        setBirdNodes({scene: gltf2B.scene, animations: gltf2B.animations})
    }, [gltf2B]);

    useEffect(() => {
        setPlane1Nodes({scene, animations})
    }, [scene, animations]);


    if(started)
        return <HomePage island2Nodes={island2Nodes} birdNodes={birdNodes} plane1Nodes={plane1Nodes} island1Nodes={island1Nodes} night={night} setNight={setNight} />
    else
        return <LandingPage night={night} setNight={setNight} setStarted={setStarted} />
}

export default App
