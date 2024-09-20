import './listener.css'
import {invalidate, useFrame, useThree} from "@react-three/fiber";
import {useEffect, useRef, useState} from "react";
import {bkPoint} from "../../../utils/responsiveness.js";
import {useDispatch, useSelector} from "react-redux";
import { gsap } from "gsap";
import {Vector3} from "three";
import {getClickable, getProject, getScene1P} from "../../../utils/store/utils-store/utils-store-selectors.js";
import plane from "../ExtraModels/Plane/plane.jsx";
import {setClickable} from "../../../utils/store/utils-store/utils-store-actions.js";
const Listener = ({orbitControls, scrollHandlerRef, infoVisible, setInfoVisible, island, isRotating, setIsRotating}) => {
    const {gl, viewport, camera} = useThree()
    const canvas = gl.domElement
    const mouseIsDown = useRef(false)
    const dragged = useRef(false)
    const project = useSelector(getProject)

    const dispatch = useDispatch()
    const lastPosition = useRef(0)
    const lastPositionY = useRef(0)
    const rotationSpeed = useRef(0)
    const lastScrollY = useRef(0)
    const dampingFactor = .9

    const topNav = document.querySelector('.top-navigation')

    const clickable = useSelector(getClickable)
    useEffect(() => {
        console.log('ssss', clickable)
        switch (clickable){
            case 1:
                orbitControls.current.enabled = false
                // Plane1
                if(dragged.current)
                    animateCameraToOrigin(false)

                gsap.to(orbitControls.current.target, {
                    x: 0,
                    y: 1.5,
                    z: 0,
                    duration: 1,
                    ease: "sine.in",
                })

                gsap.to(camera.position, {
                    duration: 1,
                    z: 1,
                    // y: 3,
                    ease: "sine.in",
                    delay: `${dragged.current ? 1 : 0}`,
                })
                break
            case null:
                animateCameraToOrigin()
                break
        }
    }, [clickable]);

    // const [target, setTarget] = useState({
    //     x: camera.rotation.x,
    //     y: camera.rotation.y,
    //     z: camera.rotation.z,
    // })

    const animateCameraToOrigin = (lookAtCenter = true) => {
        // DISABLE THEM TO NOT OVERWRITE YOUR SETTINGS ANYMORE!!!
        if(lookAtCenter) {
            gsap.to(orbitControls.current.target, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1,
                ease: "sine.in",
            })
        }

        orbitControls.current.enabled = false
        const targetRotation = {
            x: camera.rotation.x,
            y: camera.rotation.y,
            z: camera.rotation.z,
        }
        gsap.to(targetRotation, {
            x: -.4,
            y: 0,
            z: 0,
            duration: 1,
            ease: "sine.in",
            onUpdate: () => {
                camera.rotation.set(targetRotation.x, targetRotation.y, targetRotation.z)
            }
        })

        gsap.to(camera.position, {
            x: 0,
            y: 2,
            z: 4,
            ease: "sine.in",
            duration: 1
        })
        dragged.current = false


        orbitControls.current.enabled = true
        topNav.classList.remove('slide-up')
    }

    const setRecenter = () => {
        // Dragged controllers
        if(mouseIsDown.current === true) {
            dragged.current = true
            topNav.classList.add('slide-up')
            topNav.addEventListener('click', animateCameraToOrigin)
        }
    }

    const parallaxHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()


        if(!island || !island.current)
            return
        if(!isRotating)
            setIsRotating(true)

        const delta = (e.clientX - lastPosition.current) / viewport.width
        island.current.rotation.y += (.0005 * delta * Math.PI)

        // camera.rotation.x += ((e.clientY - lastPositionY.current) / viewport.width) * .0005


        lastPosition.current = e.clientX
        lastPositionY.current = e.clientY
    }
    const nav = document.querySelector('.navigation')

    const mouseEnterHandler = () => {
        document.querySelectorAll('.navigation ul').forEach(el => {
            if(el.classList.contains('hidden'))
                el.classList.remove('hidden')
        })
    }

    const mouseExitHandler = () => {
        document.querySelectorAll('.navigation ul').forEach(el => {
            if(!el.classList.contains('hidden'))
                el.classList.add('hidden')
        })
    }
    let singleAction = 1
    const scrollHandler = () => {
        const scrollY = window.scrollY
        const delta = scrollY - lastScrollY.current
        const navUl = document.querySelector('.navigation ul')
        island.current.rotation.y += (delta * .0005)

        rotationSpeed.current += (delta * .001)

        lastScrollY.current = scrollY


        if(scrollY > 50) {
            if(singleAction) {
                dispatch(setClickable(null))
                singleAction -= 1
            }

            topNav.classList.add('scroll-hide')
            // No rotation manually
            orbitControls.current.enabled = false
            // Remove the links from the navigation bar
            navUl?.classList.add('hidden')

            nav.querySelector('.page-title').style.fontSize = '1.3rem'

            nav.addEventListener('mouseenter', mouseEnterHandler)

            nav.addEventListener('mouseleave', mouseExitHandler)


            nav.style.bottom = 'unset'
            nav.style.top = '0'
            nav.classList.add('slide-down-nav')
            nav.classList.remove('slide-up-nav')
        //     Canvas

            if(window.innerWidth >= bkPoint) {
                canvas.classList.add('slide-right-canvas')
                canvas.classList.remove('slide-down-canvas')
            }

            canvas.style.position = 'fixed'

            if(window.innerWidth < bkPoint){
                canvas.style.top = '0'
                canvas.style.left = '50%'
                canvas.style.transform = 'translateX(-50%)'

                // canvas.style.width = `${window.innerWidth}px`
                // canvas.style.height = `${window.innerHeight / 2}px`
                // camera.aspect = (window.innerWidth) / (window.innerHeight / 2)
            }
            else{
                canvas.style.left = '0'
                canvas.style.top = '50%'
                canvas.style.transform = 'translateY(-50%)'
            }

            if(window.innerWidth > bkPoint)
            if(window.innerWidth < 2000) {
                canvas.style.width = `${window.innerWidth / 2}px`
                canvas.style.height = `${window.innerHeight / 2}px`
                camera.aspect = (window.innerWidth / 2) / (window.innerHeight / 2)
            }
            else{
                canvas.style.width = `${window.innerWidth * .7}px`
                canvas.style.height = `${window.innerHeight * .7}px`
                camera.aspect = (window.innerWidth * .7) / (window.innerHeight* .7)
            }

            // canvas.width = 600
            // canvas.height = 600


            setInfoVisible(true)
            // const infoPage = document.querySelector('.info-page')
            // infoPage.classList.add('slide-left')
            // infoPage.classList.remove('slide-right')
        }
        else if(scrollY <= 50){
            if(!singleAction)
                singleAction++

            topNav.classList.remove('scroll-hide')
            orbitControls.current.enabled = true
            nav.querySelector('.page-title').style.fontSize = ''

            nav.removeEventListener('mouseenter', mouseEnterHandler)

            nav.removeEventListener('mouseleave', mouseExitHandler)

            // Add the links back to the navigation
            if(project === null) {
                navUl?.classList.remove('hidden')
            }


            nav.style.top = 'unset'
            nav.style.bottom = '0'
            nav.classList.remove('slide-down-nav')
            nav.classList.add('slide-up-nav')


            if(window.innerWidth >= bkPoint) {
                canvas.classList.add('slide-down-canvas')
                canvas.classList.remove('slide-right-canvas')
            }

            canvas.style.position = ''
            canvas.style.width = `${window.innerWidth}px`
            canvas.style.height = `${window.innerHeight}px`
            canvas.style.transform = 'translateY(0)'
            camera.aspect = (window.innerWidth) / (window.innerHeight)

            setInfoVisible(false)
        }
    }

    const mouseDownHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        mouseIsDown.current = true
    }

    const mouseUpHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        mouseIsDown.current = false
        // topNav.removeEventListener('click', animateCameraToOrigin)
    }

    useFrame(() => {
        // console.log(rotationSpeed.current)
        if(Math.abs(rotationSpeed.current) > 0){
            rotationSpeed.current *= dampingFactor
            island.current.rotation.y += rotationSpeed.current
        }
        // console.log(target)
        // console.log(target.y, target.y !== 0)
        // if(target.y !== 0)
        //     camera.rotation.set(target.x, target.y, target.z)

    });
    useEffect(() => {
        canvas.addEventListener('mousemove', setRecenter)
        canvas.addEventListener('touchmove', setRecenter)
        window.addEventListener('scroll', scrollHandler)
        canvas.addEventListener('mousedown', mouseDownHandler)
        canvas.addEventListener('touchstart', mouseDownHandler)
        canvas.addEventListener('mouseup', mouseUpHandler)
        canvas.addEventListener('touchend', mouseUpHandler)

        scrollHandlerRef.current = scrollHandler
        scrollHandler()
    }, []);
    // useEffect(() => {
    //     if(project !== null){
    //         canvas.style.left = '50%'
    //         canvas.style.transform = 'translateX(-50%)'
    //         canvas.style.top = '200px'
    //     }
    // }, [project]);

    return null
}
export default Listener