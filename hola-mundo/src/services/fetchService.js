import { Email } from "@mui/icons-material";
import { async } from "rxjs";

export const getAllUsers = async () => {


    let response = await fetch('https://reqres.in/api/users');
    console.log('Response:', response)
    console.log('Status:', response.status)
    console.log('OK?:', response.ok)

    // We return the json
    return response.json()
}

export const getAllPagedUsers = async (page) => {


    let response = await fetch(`https://reqres.in/api/users?page=${page}`);
    console.log('Response:', response)
    console.log('Status:', response.status)
    console.log('OK?:', response.ok)

    // We return the json
    return response.json()
}
export const getUserDetails = async (id) => {

    let response = await fetch(`https://reqres.in/api/users/${id}`);
    console.log('Response:', response)
    console.log('Status:', response.status)
    console.log('OK?:', response.ok)

    // We return the json
    return response.json()
}

export const login = async (email, password) => {

    let body = {
        email,
        password
    }

    let response = await fetch('https://reqres.in/api/login', {
        Smethod: 'POST',
        // mode: 'no-cors',
        // credentials: 'omit',
        // cache: 'no-cache',
        // headers: {
        //     'Content-type': 'application/json'
        // },
        body,

    });

    return response.json();

}