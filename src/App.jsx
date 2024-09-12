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

import island5Gltf from "./assets/models/islands/island_in_the_sky.glb";
import plane4Gltf from "./assets/models/extra/model_plane.glb";

import {
    setScene1I,
    setScene1P,
    setScene2I,
    setScene2P,
    setScene3I, setScene3P, setScene4I, setScene4P, setScene5I, setScene5P
} from "../utils/store/utils-store/utils-store-actions.js";
import {useDispatch} from "react-redux";
import Premounter from "./components/Premounter/premounter.jsx";
import {Canvas} from "@react-three/fiber";


function App() {

    const dispatch = useDispatch()

    const [started, setStarted] = useState(false)
    const [night, setNight] = useState(false)

    const { nodes, materials } = useGLTF(islandGLTF)
    const { scene, animations} = useGLTF(planeGltf)

    const gltf2I = useGLTF(islandGltf2)
    const gltf2B = useGLTF(birdGltf)

    const gltf3I = useGLTF(island3Gltf)
    const gltf3P = useGLTF(plane2Gltf)

    const gltf4I = useGLTF(island4Gltf)
    const gltf4P = useGLTF(plane3Gltf)

    const gltf5I = useGLTF(island5Gltf)
    const gltf5P = useGLTF(plane4Gltf)





    useEffect(() => {
        dispatch(setScene1I({nodes, materials}))
    }, [nodes, materials]);

    useEffect(() => {
        dispatch(setScene2I({nodes: gltf2I.nodes, materials: gltf2I.materials}))
    }, [gltf2I]);

    useEffect(() => {
        dispatch(setScene2P({scene: gltf2B.scene, animations: gltf2B.animations}))
    }, [gltf2B]);

    useEffect(() => {
        dispatch(setScene1P({scene, animations}))
    }, [scene, animations]);



    useEffect(() => {
        dispatch(setScene3I({nodes: gltf3I.nodes, materials: gltf3I.materials}))
    }, [gltf3I]);

    useEffect(() => {
        dispatch(setScene3P({nodes: gltf3P.nodes, materials: gltf3P.materials ,animations: gltf3P.animations}))
    }, [gltf3P]);


    useEffect(() => {
        dispatch(setScene4I({nodes: gltf4I.nodes, animations: gltf4I.animations, materials: gltf4I.materials}))
    }, [gltf4I]);
    useEffect(() => {
        dispatch(setScene4P({scene: gltf4P.scene, animations: gltf4P.animations}))
    }, [gltf4P]);

    useEffect(() => {
        dispatch(setScene5I({nodes: gltf5I.nodes, materials: gltf5I.materials}))
    }, [gltf5I]);
    useEffect(() => {
        dispatch(setScene5P({scene: gltf5P.scene, animations: gltf5P.animations}))
    }, [gltf5P]);


    if(started)
        return <HomePage night={night} setNight={setNight} />
    else
        return <>
            {/*<Canvas>*/}
            {/*    <Premounter />*/}
            {/*</Canvas>*/}
            <LandingPage night={night} setNight={setNight} setStarted={setStarted} />
    </>
}

export default App
