import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../models/fecthService";
import { getAllPagedUsers } from "../../models/fecthService";


const Fetchexample = () => {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState([4]);

    useEffect(() => {
        obtainUsers();
        obtainPagedUsers();
    }, []);

    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                setUsers(response.data)
            })
            .catch(error => console.log(error))
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                setUsers(response.data)
                setPages(response.total_pages)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <h2>
                Users:
            </h2>

            {users.map((users, index) =>
            (<p key={index}>
                {index}
                {users.first_name} {users.last_name}
            </p>)
            )}

            <button onClick={() => obtainPagedUsers(1)}>1</button>
            <button onClick={() => obtainPagedUsers(2)}>2</button>
        </div>
    )
}

export default Fetchexample;

