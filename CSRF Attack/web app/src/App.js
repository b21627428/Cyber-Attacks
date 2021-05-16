import "./App.css";
import Header from "./Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
function App() {
    return (
        <>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/notfound" component={NotFound}></Route>
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
