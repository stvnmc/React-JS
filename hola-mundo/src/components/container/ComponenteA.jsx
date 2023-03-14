import React from 'react'
import { DISPONIBILIDAD } from '../../models/disponibilidad'
import { ComponenteB } from '../../models/componenteB'
import ComponenteA from '../pure/ComponenteA'


const Usuario = () => {
    const defaultTask = new ComponenteB('Steven', 'Marchena', 'stvnmc123@gmail.com', DISPONIBILIDAD.ONLINE)

    return (
        <div>
            <div>
                Este Usuario es:
            </div>
            <ComponenteA ComponenteB={defaultTask}></ComponenteA>
        </div>
    )
}


export default Usuario