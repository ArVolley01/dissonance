import PuzzleTwo from "../PuzzleTwo"

const NoSilly = ({ setter }) => {

    const handleOne = () => {
        setter(<PuzzleTwo setter={setter} />)
    }

    return (
        <div>
            <p>Blame yourself? No way! It's gotta be someone!</p>
            <button onClick={handleOne}>Ok, I'll try again</button>
        </div>
    )
}

export default NoSilly;