
import PuzzleThree from "../PuzzleThree"

const PieceThree = ({ setter }) => {

    const handleOne = () => {
        setter(<PuzzleThree setter={setter} code={""} />)
    }
    const handleTwo = () => {
        const b = document.getElementById("sorry")

        if (b.textContent === "sorry") {
            setter(<PuzzleThree setter={setter} />)
        }
    }

    return (
        <div>
            <p>So you've figured out the code. Not bad. But that was only the first step!</p>
            <button onClick={handleOne}>I give up.</button>
            <button onClick={handleTwo}>If only this button said "sorry".</button>
        </div>
    )
}

export default PieceThree;