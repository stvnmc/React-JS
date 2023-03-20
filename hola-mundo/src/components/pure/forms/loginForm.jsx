// Componente que va acontener un formulario para 
// autenticacion de usuarios.

import React, { useState } from 'react'

export const LoginForm = () => {

    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ]

    const [credentials, setCredentials] = useState(initialCredentials)

    return (
        <div>
            
        </div>
    )
}
