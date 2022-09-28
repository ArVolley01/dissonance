import Beginning from "../Beginning";

const NoNeed = ({ setter }) => {

    const handleOne = () => {
        setter(<Beginning setter={setter}/>)
    }

    return (
        <div>
            <p>Congratulations! You've blamed yourself, and nobody else needs to know, so we won't tell anyone.</p>
            <p>We at Blamer won't keep track of it either, since we don't need to know.</p>
            <button onClick={handleOne}>My work here is done.</button>
        </div>
    )
}

export default NoNeed;