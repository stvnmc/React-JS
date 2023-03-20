// Ejemplo de uso del metodo
//de ciclo de vida en componente clase y el hook de ciclo de vida en componete funcional

import React, { Component, useEffect } from 'react'

export default class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea anadido al DOM(renderice)')
    }

    render() {
        return (
            <div>DidMount</div>
        )
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamineto antes de que el componente sea anadido al DOM(renderise)')
    }, [])

    return (
        <div>
            <h1>
                DidMount
            </h1>
        </div>
    )
}
