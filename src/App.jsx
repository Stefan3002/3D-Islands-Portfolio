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
import island3Gltf from "./assets/models/islands/low_poly_island (1).glb";
import plane2Gltf from "./assets/models/extra/dae_the_flying_circus_koi_fish.glb";

import plane3Gltf from "./assets/models/extra/plane (2).glb";
import island4Gltf from "./assets/models/islands/low_poly_island (2).glb";


function App() {
    const [started, setStarted] = useState(false)
    const [night, setNight] = useState(false)

    const [island1Nodes, setIsland1Nodes] = useState(null)
    const [island2Nodes, setIsland2Nodes] = useState(null)
    const [plane1Nodes, setPlane1Nodes] = useState(null)
    const [birdNodes, setBirdNodes] = useState(null)

    const [plane2Nodes, setPlane2Nodes] = useState(null)
    const [island3Nodes, setIsland3Nodes] = useState(null)

    const [island4Nodes, setIsland4Nodes] = useState(null)
    const [plane3Nodes, setPlane3Nodes] = useState(null)

    const { nodes, materials } = useGLTF(islandGLTF)
    const { scene, animations} = useGLTF(planeGltf)

    const gltf2I = useGLTF(islandGltf2)
    const gltf2B = useGLTF(birdGltf)

    const gltf3I = useGLTF(island3Gltf)
    const gltf3P = useGLTF(plane2Gltf)

    const gltf4I = useGLTF(island4Gltf)
    const gltf4P = useGLTF(plane3Gltf)




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



    useEffect(() => {
        setIsland3Nodes({nodes: gltf3I.nodes, materials: gltf3I.materials})
    }, [gltf3I]);

    useEffect(() => {
        setPlane2Nodes({nodes: gltf3P.nodes, materials: gltf3P.materials ,animations: gltf3P.animations})
    }, [gltf3P]);


    useEffect(() => {
        setIsland4Nodes({nodes: gltf4I.nodes, animations: gltf4I.animations, materials: gltf4I.materials})
    }, [gltf4I]);
    useEffect(() => {
        setPlane3Nodes({scene: gltf4P.scene, animations: gltf4P.animations})
    }, [gltf4P]);


    if(started)
        return <HomePage plane3Nodes={plane3Nodes} island4Nodes={island4Nodes} plane2Nodes={plane2Nodes} island3Nodes={island3Nodes} island2Nodes={island2Nodes} birdNodes={birdNodes} plane1Nodes={plane1Nodes} island1Nodes={island1Nodes} night={night} setNight={setNight} />
    else
        return <LandingPage night={night} setNight={setNight} setStarted={setStarted} />
}

export default App
