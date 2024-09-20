import './navigation.css'
import {useEffect, useRef, useState} from "react";
import darkSVG from "../../../public/svgs/darkSVG.svg";
import sunSVG from "../../../public/svgs/sunSVG.svg";
import cDownSVG from "../../../public/svgs/caret-down.svg";
import {useDispatch, useSelector} from "react-redux";
import {getNight, getProject} from "../../../utils/store/utils-store/utils-store-selectors.js";
import {setClickable, setNight} from "../../../utils/store/utils-store/utils-store-actions.js";
const Navigation = ({page, setPage, scrollListener}) => {
    const project = useSelector(getProject)
    const dispatch = useDispatch()
    const menuItems = [
        'Presentation', 'Education', 'Experience', 'Projects', 'Skills', 'Legal'
    ]
    const night = useSelector(getNight)

    const goDark = () => {
        dispatch(setNight(!night))
        if(!night)
            document.querySelector('body').classList.add('dark')
        else
            document.querySelector('body').classList.remove('dark')
    }

    const changePage = (index) => {
        dispatch(setClickable(null))
        setPage(index)
        if(!scrollListener)
            return
        scrollListener()
    }

    const closeNav = () => {
        document.querySelector('.navigation ul').classList.add('hidden')
        document.querySelector('.menu-controls').classList.add('hidden')
    }

    return (
        <div className={`navigation ${night ? 'nav-dark' : ''}`}>
            <ul>
                {menuItems.map((menuItem, index) => {
                    return <li className={`${page === index && 'selected'}`}
                               onClick={() => changePage(index)}>{menuItem}</li>
                })}
                <li onClick={() => goDark()}><img className='scheme-option' src={!night ? darkSVG : sunSVG}/></li>
            </ul>
            <h1 className='page-title'>{menuItems[page]} Island</h1>
            {project !== null && <img src={cDownSVG} className='menu-controls' onClick={closeNav} />}
        </div>
    )
}
export default Navigation