export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');
    return response.json()
}

export const getAllPagedUsers = async (page) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`)
    return response.json()
};