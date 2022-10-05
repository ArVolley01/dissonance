import { useState, useEffect } from "react"
import Beginning from "./Beginning"
import PuzzleThree from "./PuzzleThree"
import PuzzleTwo from "./PuzzleTwo"

const Routing = () => {

    const [comp, setComp] = useState(<></>)

    useEffect(() => {
        setComp(<Beginning setter={setComp} />)
    }, [])


    return (
        <div id="route-box">
            {comp}
        </div>
    )
}

export default Routing;