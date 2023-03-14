import React from 'react'
import PropTypes from 'prop-types'
import { ComponenteB } from '../../models/componenteB'

const ComponenteA = ({ ComponenteB }) => {
    return (
        <div>
            <h2>
                Nombre: {ComponenteB.name}
            </h2>
            <h3>
                Apellido:{ComponenteB.apellido}
            </h3>
            <h4>
                Email:{ComponenteB.email}
            </h4>
            <h5>
                Conectado : {ComponenteB.conectado}
            </h5>
        </div>
    )
}

ComponenteA.propTypes = {
    task: PropTypes.instanceOf(ComponenteB)
}

export default ComponenteA