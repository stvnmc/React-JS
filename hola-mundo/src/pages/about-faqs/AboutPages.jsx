import React from "react";
import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Aboutpage = () => {

    const location = useLocation();
    const history = useHistory();

    console.log('We are in Route:', location.pathname); // 'About | faqs

    const navigate = (path) => {
        history.push(path)
    }
    const goBack = (path) => {
        history.goBack()
    }
    const goForward = (path) => {
        history.goForward()
    }


    return (
        <div>
            <h1>
                About | FAQ Page
            </h1>
            <div>
                <button onClick={() => navigate('/')}>
                    Go To Home
                </button>
                <button onClick={goBack}>
                    Go Back
                </button>
                <button onClick={goForward}>
                    Go Forward
                </button>
            </div>
        </div>
    )
}

export default Aboutpage;