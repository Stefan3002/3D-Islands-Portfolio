import './overlay.css'
import {useDispatch, useSelector} from "react-redux";
import {getClickable, getNight} from "../../../utils/store/utils-store/utils-store-selectors.js";
import {setClickable} from "../../../utils/store/utils-store/utils-store-actions.js";
import Button from "../Button/button.jsx";
import OverlayCard from "./OverlayCard/overlay-card.jsx";
import controllerSVG from '../../../public/svgs/controller.svg'
import tvSVG from '../../../public/svgs/tv.svg'
const Overlay = () => {
    const clickable = useSelector(getClickable)
    const dispatch = useDispatch()
    const closeClickable = () => {
        dispatch(setClickable(null))
    }
    const night = useSelector(getNight)

    const scrollDown = () => {
        window.scrollTo(0, 51)
    }

    switch (clickable){
        case 1:
            const passionsCards = [{
                title: 'Video Games',
                description: 'When I get the chance I like to play video games. The reason is simple: just like books, they represent one of the few ways that one can experience what multiple timelines, history, many places of the world, unreal worlds and so on have to offer.',
                img: controllerSVG,
                highlight: 'Favourite game: TLOU2'
            }, {
                title: 'TV-Series',
                description: 'Watching TV-Series is a super nice way of spending time with family, that is why I love to do so in holidays.',
                img: tvSVG,
                highlight: 'Favourite show: Dark'
            }]
            return <div style={{background: night ? 'rgba(91,35,51,0.5)' : '', color: night ? 'wheat' : ''}} className='slide-left clickable-overlay'>
                <p onClick={closeClickable}>Close</p>
                <div className="overlay-cards">
                    {passionsCards.map(passionCards => {
                        const {title, description, img, highlight} = passionCards
                        return <OverlayCard highlight={highlight} img={img} title={title} description={description}/>
                    })}

                </div>

                <Button text='See more' customClass='overlay-btn' callback={scrollDown}/>
            </div>
        default:
            return null
    }
}
export default Overlay