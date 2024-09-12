import './premounter.css'
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import Island1 from "../Islands/Island1/island1.jsx";
import {getScene1I, getScene1P} from "../../../utils/store/utils-store/utils-store-selectors.js";
import Plane from "../ExtraModels/Plane/plane.jsx";

const Premounter = () => {
    const [mounting,  setMounting] = useState(false)
    const [scene, setScene] = useState(null)

    const scene1I = useSelector(getScene1I)
    const scene1P = useSelector(getScene1P)

    const mesh = useRef()

    useEffect(() => {
        if(scene1I && mounting === false)
            setScene(<Island1 mesh={mesh} scrollHandler={() => {}}/>)
    }, [mounting, scene1I])

    useEffect(() => {
        if(scene1P && mounting === false)
            setScene(<Plane/>)
    }, [mounting, scene1P])

    return scene

}
export default Premounter