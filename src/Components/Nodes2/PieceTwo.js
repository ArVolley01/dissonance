import PuzzleTwo from "../PuzzleTwo"
import PuzzleThree from "../PuzzleThree"

const PieceTwo = ({ setter }) => {

    const handleOne = () => {
        setter(<PuzzleTwo setter={setter} />)
    }
    const handleTwo = () => {
        const b = document.getElementById("myButton")

        if (b.textContent.includes("I win")) {
            setter (<PuzzleThree setter={setter} />)
        }
    }

    return (
        <div className="action">
            <p>So, you can follow directions. Okay then, why don't you click my button that says "I win", if you're so smart?</p>
            <button onClick={handleOne}>I give up.</button>
            <button id="myButton" onClick={handleTwo}>I lose!</button>
        </div>
    )
}

export default PieceTwo;