import NotFoundPage from './pages/404/NotFoundPage'
import Homepage from './pages/home/HomePages'
import Aboutpage from './pages/about-faqs/AboutPages'
import Profilepage from './pages/profile/ProfilePage'
import TaskListComponent from './components/container/task_list';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import Taskdetailpage from './pages/tasks/TasDetailPage';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import LoginPages from './pages/auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';




function AppRoutingOne() {

    let logged = false;

    let taskList = [
        {
            id: 1,
            name: 'Task 1',
            description: 'My fist Task'
        },
        {
            id: 2,
            name: 'Task 2',
            description: 'My second Task'
        }
    ]




    useEffect(() => {
        logged = localStorage.getItem('credentials');
        console.log('Use Logged?', logged)
    }, [])

    return (

        <Router>
            <div>
                <aside>
                    <Link to='/'>| HOME |</Link>
                    <Link to='/about'>| ABOUT |</Link>
                    <Link to='/faqs'>| FAQs |</Link>
                    <Link to='/task/1'>| Task 1 |</Link>
                    <Link to='/task/2'>| Task 2 |</Link>
                    <Link to='/about404'>| 404 - Page Not Found |</Link>
                    <Link to='/login'>| login |</Link>
                </aside>

                <main>
                    <Switch>
                        <Route exact path="/"><Homepage /></Route>
                        <Route exact path="/online-state"><StatePage /></Route>
                        <Route path="/login">
                            {
                                logged ?
                                    () => {
                                        alert('You are logged in.Redicting to login..')
                                        return (
                                            <Redirect to='/' />
                                        )
                                    }
                                    :
                                    () => {
                                        return (<LoginPages></LoginPages>)
                                    }
                            }</Route>
                        <Route path="/profile">
                            {
                                logged ? <Profilepage />
                                    :
                                    () => {
                                        alert('You must be logged in.Redicting to home..')
                                        return (
                                            <Redirect to='/login' />
                                        )
                                    }
                            }
                        </Route>
                        <Route path='/about' ><Aboutpage /></Route>
                        <Route path='/faqs' ><Aboutpage /></Route>
                        <Route path='/tasks' ><TaskListComponent /></Route>
                        <Route exact
                            path='/task/:id'
                            render={
                                ({ match }) => (<Taskdetailpage task={taskList[match.id - 1]}
                                />)
                            }
                        />
                        {/* 404 -page No Found*/}
                        <Route><NotFoundPage /></Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default AppRoutingOne;