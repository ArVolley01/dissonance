import Beginning from "../Beginning"


const Others = ({ setter }) => {

    const handleOne = () => {
        setter(<Beginning setter={setter} />)
    }
    const handleTwo = () => {
        setter(<Beginning setter={setter} />)
    }

    return (
        <div className="useless">
            <p>So you've chosen to blame others. Unfortunately, I can't quite let you do that yet. You must first prove yourself!</p>
            <button onClick={handleOne}>I must use my programming skills.</button>
            <button onClick={handleTwo}>I will find a way to advance!</button>
        </div>
    )
}

export default Others;