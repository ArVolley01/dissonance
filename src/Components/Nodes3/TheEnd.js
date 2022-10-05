
const TheEnd = ({ setter, code }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.input === "293748") {
            console.log("congrats, you found the true ending!")
        }
    }

    return (
        <div>
            <p>You made it this far! Congratulations. I suppose I'll let you Blame now. Once I add that functionality, that is.</p>
            <button>Demo version over!</button>
            <button>Wait, that's it?</button>
            <form onSubmit={handleSubmit}>
                <input autoComplete="off" name="input" type="text" placeholder="Who to blame?"></input>
                <button type="submit">True ending!</button>
            </form>
            <button onClick={window.location.reload}>Back to the start, then!</button>
        </div>
    )
}

export default TheEnd;