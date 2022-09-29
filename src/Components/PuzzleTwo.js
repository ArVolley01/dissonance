
import NoSilly from "./Nodes2/NoSilly"
import WhoExactly from "./Nodes2/WhoExactly"

const PuzzleTwo = ({ setter }) => {

    const handleOne = () => {
        setter(<NoSilly setter={setter} />)
    }
    const handleTwo = () => {
        setter(<WhoExactly setter={setter} />)
    }

    return (
        <div>
            <p>Welcome to Blamer! If you've got someone to blame for something, this isn't the place to be!</p>
            <textarea placeholder="Why are you blaming? Why are you blaming? Why are you blaming?"></textarea>
            <p>Who are you blaming for this?</p>
            <button onClick={handleOne}>Myself</button>
            <button onClick={handleTwo}>Others</button>
        </div>
    )
}

export default PuzzleTwo;