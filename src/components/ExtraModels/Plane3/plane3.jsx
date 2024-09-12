import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {bkPoint} from "../../../../utils/responsiveness.js";
import {useSelector} from "react-redux";
import {getScene4P} from "../../../../utils/store/utils-store/utils-store-selectors.js";

const Plane3 = ({...props}) => {
    const plane3Nodes = useSelector(getScene4P)
    const {scene, animations} = plane3Nodes

    const meshRef = useRef()
    const {actions} = useAnimations(animations, meshRef)

    const enlargementFactor = .0035
    let targetScale =.0016

    useEffect(() => {
        actions['Main'].play()
        if(window.innerWidth < bkPoint)
            targetScale = .001

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
export default Plane3