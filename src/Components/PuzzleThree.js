import ThePlayer from "./Nodes3/ThePlayer"


const PuzzleThree = ({ setter, code }) => {

    if (!code) code = ""

    const handleOne = () => {
        setter(<ThePlayer setter={setter} code={code} />)
    }
    const handleTwo = () => {
        setter(<p>two</p>)
    }

    return (
        <div>
            <p>Welcome two Blamer, the best social network! If you've got someone to blame, don't weight! Blame now!</p>
            <textarea placeholder={"Help can be found in the most mysterious of places. Not here though. Unless...? " + code} value="I keep messing up Blamer" readOnly></textarea>
            <p>Who to blame? That's right, blame yourself. This is all your fault.</p>
            <button onClick={handleOne}>The Player</button>
            <button onClick={handleTwo}>The Game</button>
        </div>
    )
}

export default PuzzleThree;