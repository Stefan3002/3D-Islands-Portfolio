import planeGltf from '../../../assets/models/extra/phoenix_bird.glb'
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {bkPoint} from "../../../../utils/responsiveness.js";

const Bird = ({...props}) => {
    const meshRef = useRef()
    const {scene, animations} = useGLTF(planeGltf)
    const {actions} = useAnimations(animations, meshRef)

    let targetScale = .0015
    const enlargementFactor = .0015

    useEffect(() => {
        actions['Take 001'].play()
        if(window.innerWidth < bkPoint) {
            targetScale = .001
            meshRef.current.position.set(0, 1.2, 0)
        }
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
export default Bird