import './page4.css'
import Plane4 from "../../ExtraModels/Plane4/plane4.jsx";
import Island5 from "../../Islands/Island5/island5.jsx";
const Page4 = ({scrollHandler, island}) => {
    return (
        <>
            <Island5 scrollHandler={scrollHandler.current} mesh={island} position={[-.2, .4, 0]} scale={[0, 0, 0]}
                     rotation={[0, -4, 0]}/>
            <Plane4 scale={[0, 0, 0]} position={[-.2, 2, 0]} rotation={[0, 2.5, 0]}/>
        </>
    )
}
export default Page4