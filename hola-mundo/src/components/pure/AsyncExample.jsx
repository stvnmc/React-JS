import React from "react";

const Asyncexample = () => {

    async function generateNumber() {
        return 1;
    }

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }

    function obtainNumber() {
        generateNumber()
            .then((response) => alert(`Reponse: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }


    function obtainPromiseNumber() {
        generatePromiseNumber()
            .then((response) => alert(`Reponse: ${response}`))
            .catch((error) => alert(`Something went wrong: ${error}`));
    }


    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Martin')
            .then((response) => {
                let value = response;
                alert(`Save Name: ${value}`)
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
            })
            .finally(() => {
                console.log('SUCCESS: Name saved and retreived')
            })
    }

    async function obtainMessage() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hello Word'), 2000)
        })

        let message = await promise;

        await alert(`Message received: ${message}`)
    }

    return (
        <div>
            <h1>async, Promise Examples</h1>
            <button onClick={obtainNumber}>Obtain Number</button>
            <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
            <button onClick={showStorage}> Save Name and Show </button>
            <button onClick={obtainMessage}>Receive Message in 2 seconds</button>
        </div>
    )
}

export default Asyncexample