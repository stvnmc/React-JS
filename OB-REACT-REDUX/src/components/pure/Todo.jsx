import React from "react";
import PropTypes from "prop-types";


const Todo = ({ onclick, complede, text, id }) => {
    return (
        <li onclick={onclick}
            style={
                {
                    textDecoration: complede ? 'line-through' : 'none',
                    textDecorationColor: complede ? 'green' : 'none',
                    color: complede ? 'green' : 'white'
                }

            }>
            {id} - {text}
        </li>
    );
}

Todo.propTypes = {
    onclick: PropTypes.func.isRequired,
    compleded: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;