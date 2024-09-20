import './modal.css'
import {useSelector} from "react-redux";
import {getNight} from "../../../utils/store/utils-store/utils-store-selectors.js";
const Modal = () => {

    const night = useSelector(getNight)

    return (
        <div style={{background: night ? '#5B2333' : '', color: night ? 'wheat' : ''}} className='slide-down-nav modal'>
            <ul>
                <li>Drag the island around!</li>
                <li>Click on the sphere above the plane to discover a fun fact about me.</li>
                <li>Choose an island and start scrolling</li>
            </ul>
        </div>
    )
}
export default Modal