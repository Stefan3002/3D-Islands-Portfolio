import './navigation.css'
import {useEffect, useRef} from "react";
import darkSVG from "../../../public/svgs/darkSVG.svg";
import sunSVG from "../../../public/svgs/sunSVG.svg";
import {useSelector} from "react-redux";
import {getProject} from "../../../utils/store/utils-store/utils-store-selectors.js";
const Navigation = ({night, setNight, page, setPage, scrollListener}) => {
    const menuItems = [
        'Presentation', 'Education', 'Experience', 'Projects', 'Skills', 'Legal'
    ]


    const goDark = () => {
        setNight(!night)
        if(!night)
            document.querySelector('body').classList.add('dark')
        else
            document.querySelector('body').classList.remove('dark')
    }

    const changePage = (index) => {
        setPage(index)
        if(!scrollListener)
            return
        scrollListener()

        // document.querySelector('.info-page').classList.remove('slide-left')
        // document.querySelector('.info-page').classList.add('slide-left2')
    }
    // console.log('bbbb', project)
    return (
        <div className={`navigation ${night ? 'nav-dark' : ''}`}>
            <ul>
                {menuItems.map((menuItem, index) => {
                    return <li className={`${page === index && 'selected'}`}
                               onClick={() => changePage(index)}>{menuItem}</li>
                })}
                <li><img className='scheme-option' src={!night ? darkSVG : sunSVG} onClick={() => goDark()}/></li>
            </ul>
            <h1 className='page-title'>{menuItems[page]} Island</h1>
        </div>
    )
}
export default Navigation