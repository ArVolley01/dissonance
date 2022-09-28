import NoNeed from "./Noneed"

const Myself = ({ setter }) => {

    const handleOne = () => {
        setter(<NoNeed setter={setter} />)
    }
    const handleTwo = () => {
        setter(<p>two</p>)
    }

    return (
        <div>
            <p>So you've chosen to blame yourself, but do you need others to know?</p>
            <button onClick={handleOne}>I don't need others to know</button>
            <button onClick={handleTwo}>I want others to know that I blame myself</button>
        </div>
    )
}

export default Myself;