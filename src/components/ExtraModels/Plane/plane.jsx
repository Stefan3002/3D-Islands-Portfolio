import planeGltf from '../../../assets/models/extra/stylized_ww1_plane.glb'
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";

const Plane = ({...props}) => {
    const meshRef = useRef()
    const {scene, animations} = useGLTF(planeGltf)
    const {actions} = useAnimations(animations, meshRef)

    const enlargementFactor = 1

    useEffect(() => {
        actions['Take 001'].play()
    }, []);

    useFrame((state, delta) => {
        meshRef.current.rotation.z = Math.cos(state.clock.getElapsedTime()) * .4

        if(meshRef.current.scale.x < .7)
            meshRef.current.scale.x += enlargementFactor * delta
        if(meshRef.current.scale.y < .7)
            meshRef.current.scale.y += enlargementFactor * delta
        if(meshRef.current.scale.z < .7)
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