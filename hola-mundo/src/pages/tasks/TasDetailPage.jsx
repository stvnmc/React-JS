import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Taskdetailpage = ({ task }) => {

    const { id } = useParams()

    return (
        <div>
            <h1>Task Detail - {id}</h1>
            {console.log(task)}
        </div>
    )
}

export default Taskdetailpage;