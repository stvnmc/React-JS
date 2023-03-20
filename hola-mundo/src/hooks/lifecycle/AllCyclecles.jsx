import React, { useEffect } from 'react'

export const AllCyclecles = () => {


    useEffect(() => {

        console.log('Componente creado')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualizacion del componente')
        }, 1000)

        return () => {
            console.log('Componente actualizado')
            document.title = 'Tiempo detenido'
            clearInterval( intervalID)
        }
    }, [])


    return (
        <div>AllCyclecles</div>
    )
}
