import planeGltf from '../../../assets/models/extra/plane (2).glb'
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {bkPoint} from "../../../../utils/responsiveness.js";

const Plane3 = ({...props}) => {
    const meshRef = useRef()
    const {scene, animations} = useGLTF(planeGltf)
    const {actions} = useAnimations(animations, meshRef)

    const enlargementFactor = .0035
    let targetScale =.0016

    useEffect(() => {
        actions['Main'].play()
        if(window.innerWidth < bkPoint)
            targetScale = .001

    }, []);

    useFrame((state, delta) => {
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
export default Plane3