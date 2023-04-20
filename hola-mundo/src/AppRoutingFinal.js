
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom/cjs/react-router-dom.min";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPages from "./pages/auth/LoginPage";
import Dashboardpage from "./pages/dashboard/DashBoard";


function AppRoutingFinal() {
    let loggedIn = true;





    return (
        <Router>
            {/* Router SWitch */}
            <Switch>
                {/* Redirections to protect our roputes */}
                <Route exact path='/'>
                    {
                        loggedIn ?
                            (<Redirect from='/' to='/dashboard' />)
                            :
                            (<Redirect from='/' to='/login' />)
                    }
                </Route>
                {/* Login Router */}
                <Route exact path='/login' component={LoginPages}/>
                {/* DashBoard Route */}
                <Route exact path='/dashboard'>
                    {
                        loggedIn ?
                            (<Dashboardpage />)
                            :
                            (<createRoot from='/' to='/login' />)
                    }
                </Route>

                <Route><NotFoundPage /></Route>
            </Switch>
        </Router>
    )
}

export default AppRoutingFinal;