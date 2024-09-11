import './listener.css'
import {useFrame, useThree} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import {bkPoint} from "../../../utils/responsiveness.js";
const Listener = ({project, scrollHandlerRef, infoVisible, setInfoVisible, island, isRotating, setIsRotating}) => {
    const {gl, viewport, camera} = useThree()
    const canvas = gl.domElement
    const lastPosition = useRef(0)
    const lastPositionY = useRef(0)
    const rotationSpeed = useRef(0)
    const lastScrollY = useRef(0)
    const dampingFactor = .9

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
        document.querySelectorAll('.navigation ul li').forEach(el => {
            if(el.classList.contains('hidden'))
                el.classList.remove('hidden')
        })
    }

    const mouseExitHandler = () => {
        document.querySelectorAll('.navigation ul li').forEach(el => {
            if(!el.classList.contains('hidden'))
                el.classList.add('hidden')
        })
    }

    const scrollHandler = () => {
        const scrollY = window.scrollY
        const delta = scrollY - lastScrollY.current
        island.current.rotation.y += (delta * .0005)

        rotationSpeed.current += (delta * .001)

        lastScrollY.current = scrollY

        if(scrollY > 50) {

            // Remove the links from the navigation bar

            document.querySelectorAll('.navigation ul li').forEach(el => {
                el.classList.add('hidden')
            })

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
        else{
            nav.querySelector('.page-title').style.fontSize = ''

            nav.removeEventListener('mouseenter', mouseEnterHandler)

            nav.removeEventListener('mouseleave', mouseExitHandler)

            // Add the links back to the navigation
            console.log(project)
            if(project === null)
                document.querySelectorAll('.navigation ul li').forEach(el => {
                    el.classList.remove('hidden')
                })


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
    useFrame(() => {
        // console.log(rotationSpeed.current)
        if(Math.abs(rotationSpeed.current) > 0){
            rotationSpeed.current *= dampingFactor
            island.current.rotation.y += rotationSpeed.current
        }
    });
    useEffect(() => {
        canvas.addEventListener('mousemove', parallaxHandler)
        window.addEventListener('scroll', scrollHandler)
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