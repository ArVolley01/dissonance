import PieceTwo from "./PieceTwo"
import WrongPerson from "./WrongPerson"

const WhoExactly = ({ setter }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.input.value === "someone"){
            setter (<PieceTwo setter={setter} />)
        }
        else {
            setter(<WrongPerson setter={setter} person={e.target.input.value} />)
        }
    }

    return (
        <div>
            <p>You have to blame someone. But who?</p>
            <form onSubmit={handleSubmit}>
                <input autoComplete="off" name="input" type="text" placeholder="Who to blame?"></input>
                <button type="submit">BLAME!</button>
            </form>
        </div>
    )
}

export default WhoExactly;