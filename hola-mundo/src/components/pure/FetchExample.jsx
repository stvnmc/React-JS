import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../services/fetchService";

const Fetchexample = () => {

    const [users, setUsers] = useState(0)

    useEffect(() => {
        obtainUsers();
    }, [])

    const obtainUsers = () => {

        getAllUsers()
            .then((response) => {
                console.log('All Users', response.data)
                setUsers(response.data)
            })
            .catch((error) => {
                alert(`Error while retreving the users: ${error}`)
            })
            .finally(() =>
                console.log('Ended obtaining users:'),
                console.table(users)
            )
    }

    return (
        <div>
            <h2>
                Users:
            </h2>
            {
                users.map((user) => (
                    <p>
                        {user.first_name}
                    </p>
                ))
            }
        </div>
    )
}

export default Fetchexample