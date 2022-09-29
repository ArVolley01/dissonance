import PuzzleThree from "../PuzzleThree"

const ThePlayer = ({ setter, code }) => {

    const handleOne = (num) => {
        setter(<PuzzleThree setter={setter} code={code + num} />)
    }
    const handleTwo = () => {
        setter(<PuzzleThree setter={setter} code={""} />)
    }

    return (
        <div>
            <p>Honestly, I'm not sure why you don't just give up.</p>
            <button id="clear" onClick={handleTwo}>I'll give up for now.</button>
            <button id="1" onClick={() => handleOne("1")}>I can't give up.</button>
        </div>
    )
}

export default ThePlayer;