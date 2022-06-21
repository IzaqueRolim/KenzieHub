import { Switch,Route,useHistory } from "react-router-dom";
import LogIn from "../pages/LogIn/index";
import SignUp from "../pages/SignUp/index";
import FirstPage from '../pages/FirstPage/index'

function Routes(){
   
    return(
        <Switch>
            <Route exact path='/'>
                <LogIn></LogIn>
            </Route>
            <Route exact path='/signup'>
                <SignUp></SignUp>
            </Route>
            <Route path='/:name'>
                <FirstPage></FirstPage>
            </Route>
        </Switch>
    )
}

export default Routes