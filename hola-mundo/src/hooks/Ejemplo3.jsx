// //Ejemplo Hooks:
// -useState
// -useContext()

import React, { useState, useContext } from 'react'
// returns componente 1
// Dispone de un conecto que va a tener un valor
//que recibe desde el padre


const miContexto = React.createContext(null)

function Componente1() {

    //Inicializamos un estado vacio que va arellenarse con los
    //datos del contexto del padre
    const state = useContext(miContexto)

    return (
        <div>
            <h1>
                El Token es:{state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    )
}




function Componente2() {

    const state = useContext(miContexto)

    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    )
}

export default function MicomponenteConContexto() {

    const estadoInicial = {
        token: '123456',
        sesion: 1
    }
    //Creamos el estado de este componente

    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion() {
        setSessionData(
            {
                token: 'JMWKALA23234',
                sesion: sessionData.sesion + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que este aqui dentrop puede leer los datos  de sessionData
            Ademas, si se actualiza,los componenetes de aqui , tambien lo actualiza */}
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>actualizar Sesion</button>
        </miContexto.Provider>
    )
}