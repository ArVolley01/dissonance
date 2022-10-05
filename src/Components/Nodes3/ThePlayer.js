import PuzzleThree from "../PuzzleThree"
import TheEnd from "./TheEnd"

const ThePlayer = ({ setter, code }) => {

    const handleOne = (num) => {
        setter(<PuzzleThree setter={setter} code={code + num} />)
    }
    const handleThree = () => {
        if (code === "2218") {
            setter(<TheEnd setter={setter} code={""} />)
        } else {
            setter(<PuzzleThree setter={setter} code={code} />)
        }
    }

    return (
        <div>
            <p>Honestly, I'm not sure why you don't just give up.</p>
            <button id="1" onClick={() => handleOne("1")}>I can't give up.</button>
            <button id="4" onClick={() => handleOne("4")}>I don't want to let you win.</button>
            <button id="7" onClick={() => handleOne("7")}>I'm better than that.</button>
            <button id="3" onClick={() => handleOne("3")}>There's nothing I can't do.</button>
            <button id="5" onClick={() => handleOne("5")}>You'll never stop me, not the other way around.</button>
            <button id="9" onClick={() => handleOne("9")}>This isn't even hard.</button>
            <button id="2" onClick={() => handleOne("2")}>I will find the answer.</button>
            <button id="6" onClick={() => handleOne("6")}>Why are there so many buttons here, anyways?</button>
            <button id="0" onClick={() => handleOne("0")}>They can't all do the same thing.</button>
            <button id="8" onClick={() => handleOne("8")}>Something is changing.</button>
            <button id="enter" onClick={handleThree}>Why would I give up when I know the answer?</button>
        </div>
    )
}

export default ThePlayer;