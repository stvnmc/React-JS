//Ejemplo de componente de tipo clase que dispone delos metodos de ciclo de vida

import Reac, { Component } from "react";


class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('constructor: cuando se instancia el componente')
    }

    componentWillUMount() {
        console.log('WillUMount: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DidMount: Justo al acabar el montaje del componente,antes de pintarlo')
    }

    componentWillReceiveProps(nextPros) {
        console.log('WillReceiveProps: si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextPros, nextState) {
        //return true / false
        //Controlar si el componente debe o noactulizarse
    }

    componentWillUpdate(nextPros, nextState) {
        console.log('WillUpdate: Justo antes de actualizarse')
    }

    componentDidUpdate(nextPros, nextState) {
        console.log('DidUpdate: Justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }


}