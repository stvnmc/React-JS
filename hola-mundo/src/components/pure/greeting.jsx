import React, { Component } from 'react';
import PropTypes from 'prop-types';




class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 29,
            name: "steve"
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Hola! {this.props.name}
                </h1>
                <h2>
                    Tue edad es:{this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                    <button onClick={this.birthday1}>
                        quitar 

                    </button>
                </div>
            </div>
        )
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ))
    }
  
    birthday1 = () => {
        this.setState((prevState) => (
            {
                age: prevState.age - 1
            }
        ))
    }
}

Greeting.propType = {
    name: PropTypes.string,
};

export default Greeting;