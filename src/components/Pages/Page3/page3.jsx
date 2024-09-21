import './page3.css'
import Island4 from "../../Islands/Island4/island4.jsx";
import Plane2 from "../../ExtraModels/Plane2/plane2.jsx";
const Page3 = ({scrollHandler, island}) => {
    return (
        <>
            <Island4 scrollHandler={scrollHandler.current} mesh={island} position={[-.2, 1, 0]} scale={[0, 0, 0]}
                     rotation={[0, -.5, 0]}/>
            <Plane2 scale={[0, 0, 0]} position={[-.2, 2.1, 0]} rotation={[0, -21, 0]}/>
        </>
    )
}
export default Page3