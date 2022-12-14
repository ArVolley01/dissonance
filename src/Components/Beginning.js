import Myself from "./Nodes/Myself"
import Others from "./Nodes/Others"

const Beginning = ({setter}) => {

    const handleOne = () => {
        setter(<Myself setter={setter}/>)
    }
    const handleTwo = () => {
        setter(<Others setter={setter} />)
    }

    return (
        <div>
            <p>Welcome to Blamer! If you've got someone to blame for something, this is the place to be!</p>
            <textarea placeholder="Why are you blaming? Type here."></textarea>
            <p>Who are you blaming for this?</p>
            <button onClick = {handleOne}>Myself</button>
            <button onClick={handleTwo}>Others</button>
        </div>
    )
}

export default Beginning;