import PuzzleTwo from "../PuzzleTwo"
import PuzzleThree from "../PuzzleThree"

const PieceTwo = ({ setter }) => {

    const handleOne = () => {
        setter(<PuzzleTwo setter={setter} />)
    }
    const handleTwo = () => {
        const b = document.getElementById("sorry")

        if (b.textContent === "sorry") {
            setter (<PuzzleThree setter={setter} />)
        }
    }

    return (
        <div>
            <p>You think you're clever? You think you're cool? I'll let you out if you say sorry.</p>
            <button onClick={handleOne}>I give up.</button>
            <button id="sorry" onClick={handleTwo}>If only this button said "sorry".</button>
        </div>
    )
}

export default PieceTwo;