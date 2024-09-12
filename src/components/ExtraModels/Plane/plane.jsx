// import planeGltf from '../../../assets/models/extra/stylized_ww1_plane.glb'
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {useSelector} from "react-redux";
import {getScene1P} from "../../../../utils/store/utils-store/utils-store-selectors.js";

const Plane = ({...props}) => {
    const plane1Nodes = useSelector(getScene1P)
    const meshRef = useRef()
    const {scene, animations} =  plane1Nodes
    const {actions} = useAnimations(animations, meshRef)
    const  targetScale = .7
    const enlargementFactor = 1

    useEffect(() => {
        actions['Take 001'].play()
    }, []);

    useFrame((state, delta) => {

        if(meshRef.current.scale.x > targetScale)
            meshRef.current.scale.x = targetScale
        if(meshRef.current.scale.y > targetScale)
            meshRef.current.scale.y = targetScale
        if(meshRef.current.scale.z > targetScale)
            meshRef.current.scale.z = targetScale

        meshRef.current.rotation.z = Math.cos(state.clock.getElapsedTime()) * .4

        if(meshRef.current.scale.x < targetScale)
            meshRef.current.scale.x += enlargementFactor * delta
        if(meshRef.current.scale.y < targetScale)
            meshRef.current.scale.y += enlargementFactor * delta
        if(meshRef.current.scale.z < targetScale)
            meshRef.current.scale.z += enlargementFactor * delta
    })

    return (
        <mesh ref={meshRef} {...props}>
            <primitive object={scene}>

            </primitive>
        </mesh>
    )
}
export default Plane