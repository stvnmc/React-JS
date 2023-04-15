import React from 'react'
import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Homepage = () => {


    const location = useLocation();
    const history = useHistory();

    console.log('We are in Route:', location.pathname); // 'About | faqs

    const navigate = (path) => {
        history.push(path)
    }

    const navigateProps = (path) => {
        history.push({
            pathname: path,
            search: '?online=treu', //Query Params
            state: {
                online: true
            }
        })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigate('/profile')}>
                Go To Profile
            </button>
            <h1>StatePage</h1>
            <button onClick={() => navigateProps('/online-state')}>
                Go To StatePage
            </button>

        </div>
    )
}

export default Homepage