// import planeGltf from '../../../assets/models/extra/stylized_ww1_plane.glb'
import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {useDispatch, useSelector} from "react-redux";
import {getClickable, getScene1P} from "../../../../utils/store/utils-store/utils-store-selectors.js";
import {setClickable, setScene1P} from "../../../../utils/store/utils-store/utils-store-actions.js";
import ClickableBox from "../../ClickableBox/clickable-box.jsx";

const Plane = ({...props}) => {
    const plane1Nodes = useSelector(getScene1P)
    const dispatch = useDispatch()
    if(!plane1Nodes)
        return null

    const meshRef = useRef()
    const {scene, animations} =  plane1Nodes
    const {actions} = useAnimations(animations, meshRef)
    const  targetScale = .7
    const enlargementFactor = 1

    useEffect(() => {
        actions['Take 001'].play()
    }, []);

    const scene1P = useSelector(getScene1P)
    useEffect(() => {
        if(scene1P === null && meshRef?.current)
            dispatch(setScene1P(meshRef.current))
        console.log(meshRef?.current?.position)
    }, [meshRef])

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
            <ClickableBox clickableIndex={1} />
            <primitive object={scene}>

            </primitive>
        </mesh>
    )
}
export default Plane