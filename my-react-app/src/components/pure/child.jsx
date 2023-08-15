import React, { useRef } from "react";


const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value)
    }


    return (
        <div>
            <p>
                Hello {name}
            </p>

            <input
                placeholder="Next Stast"
                ref={messageRef}
            />

            <button onClick={() => send(messageRef.current.value)}>
                Send The Stast
            </button>
            <div>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder="New Name" />
                    <button type="submit">Update Name</button>
                </form>
            </div>
        </div>

    )
}

export default Child;