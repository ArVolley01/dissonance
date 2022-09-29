
import NotSure from "./NotSure"
import PieceOne from "./PieceOne"

const YesNeed = ({ setter }) => {

    const handleOne = () => {
        setter(<NotSure setter={setter} />)
    }
    const handleTwo = () => {
        setter(<PieceOne setter={setter} />)
    }

    const scramble = () => {
        document.getElementById("piece1").remove()
    }

    return (
        <div>
            <p>You want others to know you blame yourself. Why? There's no reason for that. Let me make sure you want this.</p>
            <button onFocus={scramble} id="piece1" onMouseEnter={scramble} onClick={handleTwo}>I want this.</button>
            <button onClick={handleOne}>You're right, I should stop</button>
        </div>
    )
}

export default YesNeed;