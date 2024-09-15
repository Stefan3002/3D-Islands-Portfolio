import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {bkPoint} from "../../../../utils/responsiveness.js";
import {useSelector} from "react-redux";
import {getScene5P} from "../../../../utils/store/utils-store/utils-store-selectors.js";
import plane4Gltf from "../../../assets/models/extra/model_plane.glb";

const Plane4 = ({...props}) => {
    let plane4Nodes = useSelector(getScene5P)

    if(!plane4Nodes)
        plane4Nodes = useGLTF(plane4Gltf)

    const {scene, animations} = plane4Nodes

    const meshRef = useRef()

    const {actions} = useAnimations(animations, meshRef)

    const enlargementFactor = 6.4
    let targetScale = 8

    useEffect(() => {
        actions['Take 001'].play()
        if(window.innerWidth < bkPoint) {
            targetScale = 7
            meshRef.current.position.set(0, 1.5, 0)
        }
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
export default Plane4