import './light-box.css'
import closeSvg from '../../assets/svgs/close.svg'
const LightBox = ({img, setLightBoxImg}) => {
    return (
        <div className="light-box">
            <img src={closeSvg} onClick={() => setLightBoxImg(null)} className="close-btn" />
            <img src={img} alt=""/>
        </div>
    )
}
export default LightBox