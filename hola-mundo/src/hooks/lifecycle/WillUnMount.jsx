//Ejemplo de uso del metodo componentWillUnmount para compenente clase 
//Ejemplo de uso del hooks para compenente funcional
//(Cuando el componente va a desaparecer)


import React, { Component, useEffect } from 'react'

export default class WillUnMount extends Component {
    componentWillUnmount() {
        console.log("comportamiento antes de que el componente desaparezca")
    }

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        )
    }
}


export const WillUnMount = () => {

    useEffect(() => {
        //Aqui no ponemos nada
        return () => {
            console.log("comportamiento antes de que el componente desaparezca")
        }
    }, [])

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    )
}
