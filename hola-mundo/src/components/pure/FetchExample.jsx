import React, { useState, useEffect } from "react";
import { getAllPagedUsers, getAllUsers, getUserDetails } from "../../services/fetchService";

const Fetchexample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSeletedUser] = useState({})
    const [totalUsers, setTotalUsers] = useState(12);
    const [usersPerPage, setUsersPerPage] = useState(6);
    const [pages, setPages] = useState(2);


    useEffect(() => {
        obtainUsers();
    }, [])

    const obtainUsers = () => {

        getAllUsers()
            .then((response) => {
                console.log('All Users', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
            })
            .catch((error) => {
                alert(`Error while retreving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users:');
                console.table(users);
            })
    }

    const obtainPagedUsers = (pages) => {
        getAllPagedUsers(pages)
            .then((response) => {
                console.log('All Paged Users', response.data);
                setUsers(response.data);
                setPages(response.total_pages);
                setUsersPerPage(response.per_page);
                setTotalUsers(response.total);
            })
            .catch((error) => {
                alert(`Error while retreving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users:');
                console.table(users);
            })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
            .then((response) => {
                console.log('All Paged Users', response.data);
                setSeletedUser(response.data);
            })
            .catch((error) => {
                alert(`Error while retreving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining user:');
                console.table(selectedUser);
            })
    }

    return (
        <div>
            <h2>
                Users:
            </h2>
            {
                users.map((user, index) => (
                    <p key={index} onClick={() => obtainUserDetails(user.id)}>
                        {user.first_name}
                    </p>
                ))
            }
            <p>Showing {usersPerPage} users of {totalUsers} in total.</p>
            <button onClick={() => obtainPagedUsers(1)}>1</button>
            <button onClick={() => obtainPagedUsers(2)}>2</button>
            <div>
                <h2>User Details</h2>
                {selectedUser && (
                    <div>
                        <p> Name:{selectedUser.first_name}</p>
                        <p>Last Name: {selectedUser.last_name}</p>
                        <p>Email: {selectedUser.email}</p>
                        <img alt='Avatar' src={selectedUser.avatar} style={{ height: '50px', width: '50px' }} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Fetchexample