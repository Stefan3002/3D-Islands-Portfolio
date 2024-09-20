import './clickable-box.css'
import {useDispatch, useSelector} from "react-redux";
import {getClickable, getNight} from "../../../utils/store/utils-store/utils-store-selectors.js";
import {setClickable} from "../../../utils/store/utils-store/utils-store-actions.js";
import {Color} from "three";
const ClickableBox = ({clickableIndex}) => {
    const clickable = useSelector(getClickable)
    const dispatch = useDispatch();
    const night = useSelector(getNight)

    console.log(night)
    const clickableHandler = (clickable) => {
        dispatch(setClickable(1))
    }


    if(window.scrollY <= 50 && clickable !== clickableIndex)
        return <mesh
            onClick={() => clickableHandler(1)}
            scale={[.15, .15, .15]}
            position={[0, .6, 0]}
        >
            <sphereGeometry/>
            <meshBasicMaterial color={new Color(night ? 0xf5f5f5 : 0x383838)}
            />
        </mesh>
    else
        return null
}
export default ClickableBox