//Ejemplo para entender el uso de props.children
import React from 'react'

const Ejemplo4 = (props) => {
    return (
        <div>
            <h2>Ejemplo4 de children Props</h2>
            <h2>
                Nombre:{props.nombre}
            </h2>
            {/* props.children pintara por defecto aquello que se
            encuentre entre las etiquetas de aparertura y cierre de este componente
            desde el componente de order superior */}
            {props.children}
        </div>
    )
}

export default Ejemplo4