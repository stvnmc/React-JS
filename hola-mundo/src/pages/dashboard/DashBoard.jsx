import React from "react";
import { Button } from "@mui/material";
import Copyright from "../../components/pure/Copyright";
import { useHistory } from 'react-router-dom/cjs/react-router-dom'


const Dashboardpage = () => {

    const history = useHistory();

    const logout = () => {
        history.push('/login')
    }
    return (
        <div>
            <Button variant="contained" onClick={logout}> Logout</Button>
            <Copyright></Copyright>
        </div>
    )
}
export default Dashboardpage