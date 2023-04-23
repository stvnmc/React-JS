export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');

    console.log('Response:', response)

    // We return the json
    return response.json()
}