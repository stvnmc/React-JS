import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Profilepage = ({ user }) => {
    const history = useHistory();

    const navigateTo = (path) => {
        history.push(path)
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => navigateTo('/tasks') }>Task</button>
            <button onClick={goBack}>Go back</button>
        </div>
    )
}
export default Profilepage