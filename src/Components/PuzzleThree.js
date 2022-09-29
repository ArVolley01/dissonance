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
            <p>Wecome to Blamer! If youve got someoe to blamefor something t his isnt the placeto be! {code}</p>
            <textarea placeholder="Help can be found in the most mysterious of places. Not here." value="I keep messing up Blamer" readOnly></textarea>
            <p>Who to blame? That's right, blame yourself. This is all your fault.</p>
            <button onClick={handleOne}>The Player</button>
            <button onClick={handleTwo}>The Game</button>
        </div>
    )
}

export default PuzzleThree;