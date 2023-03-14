import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Greentingf = (props) => {

    //Breve introduccion a useState
    //const [variable, metodo para actualizarlo] = useState(valor incial)
    const [age, setage] = useState(29);

    const birthday = () => {
        //actualizarmos el State
        setage(age + 1)
    }
    const birthday1 = () => {

        setage(age - 1)
    }

    return (
        <div>
            <h1>
                Hola! {props.name} desde componente funcional!
            </h1>
            <h2>
                Tue edad es:{age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir años
                </button>
                <button onClick={birthday1}>
                    quitar

                </button>
            </div>
        </div>
    );
};

Greentingf.prototypes = {
    name: PropTypes.string
}

export default Greentingf;
