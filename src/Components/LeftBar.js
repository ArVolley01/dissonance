
const LeftBar = () => {

    const handleClick = (inputid, messageid) => {

        const p = document.createElement('p')
        p.className = "sent-message"
        p.textContent = `${document.getElementById(inputid).value}`

        document.getElementById(messageid).append(p)

        document.getElementById(inputid).value = ''
    }

    return (
        <div id="left-bar">
            <div id="messages">
                <p>Messages</p>
                <div className="message-box">
                    <div id="message1">
                        <p>Guy from that one thing</p>
                        <p className="rec-message">you blame me?</p>
                        <p className="sent-message">It was your fault!</p>
                        <p className="rec-message">no it wasn't</p>
                        <p className="sent-message">yes it was</p>
                    </div>  
                    <input id="input1"></input>
                    <button onClick={() => handleClick("input1", "message1")} type="submit">Send</button>
                </div>

                <div className="message-box">
                    <div id="message2">
                        <p>Friendly dude</p>
                        <p className="sent-message">wow really</p>
                        <p className="sent-message">you're blaming me for that?</p>
                        <p className="rec-message">nah I was just joking</p>
                        <p className="sent-message">oh ok</p>
                    </div>
                    <input id="input2"></input>
                    <button onClick={() => handleClick("input2", "message2")} type="submit">Send</button>
                </div>

                <div className="message-box">
                    <div id="message3">
                        <p>Certified Douchebag</p>
                        <p className="rec-message">I hate you</p>
                        <p className="rec-message">Your project sucks</p>
                    </div>
                    <input id="input3"></input>
                    <button onClick={() => handleClick("input3", "message3")} type="submit">Send</button>
                </div>

            </div>
        </div>
    )

}

export default LeftBar;