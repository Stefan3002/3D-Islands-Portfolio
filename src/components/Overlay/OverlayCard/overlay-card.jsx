import './overlay-card.css'
import {useSelector} from "react-redux";
import {getNight} from "../../../../utils/store/utils-store/utils-store-selectors.js";
const OverlayCard = ({highlight, title, description, img}) => {
    const night = useSelector(getNight)

    return (
        <div style={{background: night ? '#5B2333' : ''}} className="overlay-card">
            <div className="overlay-card-content">
                <h3>{title}</h3>
                <img src={img} alt=""/>
                <p>{description}</p>
            </div>
            <div style={{background: night ? '#38182F' : ''}} className="overlay-card-highlight">
                <p>{highlight}</p>
            </div>
        </div>
    )
}
export default OverlayCard