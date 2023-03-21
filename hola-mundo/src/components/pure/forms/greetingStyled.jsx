import React, { useState } from "react"

// Definiendo estilo enconstantes:

// EStilo para usuario logueado
const loggerdStyle = {
    color: 'white'
}
// EStilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreentingStyled = (props) => {

    // Generamos un estado para el componente
    // y asi controlar si el usuario esta o no logueado
    const [logged, setLoading] = useState(false)

    const greentingUsuer = () => (<p> Hola, {props.name} </p>)
    const pleaseLogin = () => (<p>Please login</p>)

    return (
        <div style={logged ? loggerdStyle : unloggedStyle}>

            {logged ?
                greentingUsuer()
                :
                pleaseLogin()
            }

            <button onClick={() => {
                console.log('Boton pulsado')
                setLoading(!logged)
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    )
}

export default GreentingStyled