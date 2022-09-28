
const Beginning = ({setter}) => {

    const handleOne = () => {
        setter(<p>one</p>)
    }
    const handleTwo = () => {
        setter(<p>two</p>)
    }

    return (
        <div>
            <p>Beginning</p>
            <p>To play this game, simply follow the instructions.</p>
            <button onClick = {handleOne}>Hi</button>
            <button onClick={handleTwo}>Bye</button>
        </div>
    )
}

export default Beginning;