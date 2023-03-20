// Ejemplo de uso de metodos componentDidUpdate en componente de clase
// y uso de hook en componente funcional


import React, { Component, useEffect } from 'react'

export default class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componenete resive nuevos props o cambio en el estado privado')
    }


    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        )
    }
}


export const DidUpdateHook = () => {

useEffect(() => {

})


    return (
        <div>DidUpdate</div>
    )
}