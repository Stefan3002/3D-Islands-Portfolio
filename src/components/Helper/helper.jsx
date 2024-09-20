import './helper.css'
import questionSVG from '../../../public/svgs/questionSVG.svg'
import questionNightSVG from '../../../public/svgs/questionNightSVG.svg'
import {setModal} from "../../../utils/store/utils-store/utils-store-actions.js";
import {useDispatch, useSelector} from "react-redux";
import {getNight} from "../../../utils/store/utils-store/utils-store-selectors.js";
const Helper = () => {
    const dispatch = useDispatch()
    const openHelper = () => {
        dispatch(setModal(true))
    }
    const night = useSelector(getNight)
    return (
        <img onClick={openHelper} src={night ? questionNightSVG : questionSVG} className='slide-up helper' />
    )
}
export default Helper