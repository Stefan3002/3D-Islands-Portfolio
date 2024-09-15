import {useGLTF} from "@react-three/drei";
import {useEffect} from "react";
import {
    setScene1I,
    setScene1P,
} from "../../../utils/store/utils-store/utils-store-actions.js";
import islandGLTF from "../../assets/models/islands/low_poly_floating_island.glb";
import planeGltf from "../../assets/models/extra/stylized_ww1_plane.glb";
import {useDispatch} from "react-redux";

const Preloader = ({type}) => {
    const dispatch = useDispatch()

    if(type === 0) {
        const {nodes, materials} = useGLTF(islandGLTF)
        const {scene, animations} = useGLTF(planeGltf)

        useEffect(() => {
            dispatch(setScene1I({nodes, materials}))
        }, [nodes, materials]);

        useEffect(() => {
            dispatch(setScene1P({scene, animations}))
        }, [scene, animations]);
    }

    return null
}
export default Preloader