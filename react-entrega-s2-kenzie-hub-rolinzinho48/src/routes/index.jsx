import { Switch,Route } from "react-router-dom";
import FirstPage from "../pages/FirstPage/index";
import SignUp from "../pages/SignUp/index";

function Routes(){
    return(
        <Switch>
            <Route exact path='/'>
                <FirstPage></FirstPage>
            </Route>
            <Route path='/signup'>
                <SignUp></SignUp>
            </Route>
        </Switch>
    )
}

export default Routes