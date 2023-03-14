import { DISPONIBILIDAD } from "./disponibilidad";

export class ComponenteB {
    nombre = ''
    apellido = ''
    email = ''
    conectado = DISPONIBILIDAD.OFFLINE

    constructor(name, apellido, email, conectado) {
        this.name = name
        this.apellido = apellido
        this.email = email
        this.conectado = conectado
    }
}