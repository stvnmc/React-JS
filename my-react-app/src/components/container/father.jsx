import React, { useState } from "react";
import Child from "../pure/child";

const Father = () => {

    const [name, setName] = useState('Martin')

    function showMessage(text) {
        console.log(text)
    }

    function updateName(newname) {
        setName(newname)
    }

    return (
        <div>
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    )
}

export default Father