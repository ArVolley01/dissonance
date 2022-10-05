import PuzzleTwo from "../PuzzleTwo"

const WrongPerson = ({ setter, person }) => {

    const handleOne = () => {
        setter(<PuzzleTwo setter={setter} />)
    }
    const handleTwo = () => {
        setter(<PuzzleTwo setter={setter} />)
    }

    return (
        <div className="useless">
            <p>How dare you blame {person}! You had to blame someone, and you chose {person}? Appalling.</p>
            <button onClick={handleOne}>I'm sorry! I didn't know...</button>
            <button onClick={handleTwo}>This isn't right. I'm not following directions.</button>
        </div>
    )
}

export default WrongPerson;