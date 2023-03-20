// Ejemplo de uso Hook useState

// crea un componente de tipo funcion y acceder a su estado
//privado atraves de un hook y ademas porder modificarlo

import React, { useState } from 'react'

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0

    //Valor inicial para una persona 
    const personaInicial = {
        nombre: 'Steven',
        email: 'stvnmc123@gmail.com'
    }
    // Queremos que el VALORINICIAL Y PEROSONAINICIAL sean
    //parte del estado de compob=nente para asi poder gestinar su cambio
    // y que este se vea reflejado en la vista del componente.

    // const [nombreVariable, funcionParaCambiiar] = useState(valorInicial)   // 

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)


    //Funcion para actulizar el estado privado
    function incrementarContador() {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }

    //funcion para actulizar el estado de persona en el componente

    function actulizarPersona() {
        setPersona(
            {
                nombre: 'Steve',
                email: 'stvnmc123@gmail.com'
            }
        )
    }


    return (
        <div>
            <h1> Ejemplo de useState</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE:{persona.nombre}</h3>
            <h4>EMAIL:{persona.email}</h4>
            <button onClick={incrementarContador}>incrementar contador</button>
            <button onClick={actulizarPersona}>actulizar persona</button>
        </div>
    )
}
export default Ejemplo1


