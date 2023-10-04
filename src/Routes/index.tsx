import { Route, Switch } from "react-router"
import Dashboard from "../Pages/Dashboard"
import Login from "../Pages/Login"
import Register from "../Pages/Register"

const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/'>
            <Dashboard/>
            </Route>
            <Route exact path='/register'>
                <Register/>
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
        </Switch>
    )
}

export default Routes