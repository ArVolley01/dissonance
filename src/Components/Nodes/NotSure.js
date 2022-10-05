import Beginning from "../Beginning"


const NotSure = ({ setter }) => {

    const handleOne = () => {
        setter(<Beginning setter={setter} />)
    }
    const handleTwo = () => {
        setter(<Beginning setter={setter} />)
    }

    return (
        <div className="trivial">
            <p>You weren't sure. That's fine, we can start again.</p>
            <button onClick={handleOne}>No, this isn't what I wanted! There was another button!</button>
            <button onClick={handleTwo}>That's right, I wasn't sure. I didn't need to use the console there.</button>
        </div>
    )
}

export default NotSure;