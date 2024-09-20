import './blur.css'
import {useDispatch} from "react-redux";
import {setModal} from "../../utils/store/utils-store/utils-store-actions.js";
const Blur = () => {
    const dispatch = useDispatch()
    const closeModals = () => {
        dispatch(setModal(false))
    }

    return (
        <div onClick={closeModals} className='blur'>

        </div>
    )
}
export default Blur