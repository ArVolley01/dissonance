import PuzzleTwo from "../PuzzleTwo"

const PieceOne = ({ setter }) => {

    const handleOne = () => {
        setter(<PuzzleTwo setter={setter} />)
    }
    const handleTwo = () => {
        setter(<PuzzleTwo setter={setter} />)
    }

    return (
        <div>
            <p>So, you like to play games, huh? This is only the first piece of the puzzle. You'll never figure it all out.</p>
            <button onClick={handleOne}>Wait, what?</button>
            <button onClick={handleTwo}>Something has changed.</button>
        </div>
    )
}

export default PieceOne;