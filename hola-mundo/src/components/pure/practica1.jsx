import React, { useState } from "react"

export const Practica10 = () => {

    // const [isShown, setIsShown] = useState()
    const [access, setAccess] = useState(false)

    const OnMouseEnter = () => {
        setAccess(true)
    }

    const OnMouseLeave = () => {
        setAccess(false)
    }

    function generarNumero(numero) {
        return (Math.random() * numero).toFixed(0);
    }

    function colorRGB() {
        var coolor = "(" + generarNumero(255) + "," + generarNumero(255) + "," + generarNumero(255) + ")";
        return "rgb" + coolor;
    }

    const cuadradoStyle2 = {
        width: '255px',
        height: '255px',
        background: `${colorRGB()}`
    }

    const Cuadrado = () => {
        return (
            <div>
                <div style={cuadradoStyle2}
                    onMouseEnter={OnMouseEnter}
                    onMouseLeave={OnMouseLeave}></div>
            </div>
        )
    }
    return (

        <div>
            <Cuadrado></Cuadrado>
        </div>
    )
}