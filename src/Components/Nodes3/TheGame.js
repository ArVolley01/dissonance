import PuzzleThree from "../PuzzleThree"

const TheGame = ({ setter, code }) => {

    const handleOne = (num) => {
        setter(<PuzzleThree setter={setter} code={""} />)
    }

    return (
        <div>
            <p>You can't blame the game. That would be petty and childish and foolish and dumb. Unless you messed up, I suppose.</p>
            <button onClick={handleOne}>Then what?</button>
            <button onClick={handleOne}>Why is this here... ?</button>
        </div>
    )
}

export default TheGame;