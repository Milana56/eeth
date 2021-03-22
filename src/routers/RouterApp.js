import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import HomeScreen from "../components/HomeScreen/HomeScreen";
import PortfolioScreen from '../components/PortfolioScreen/PortfolioScreen';
import SkillsScreen from '../components/SkillsScreen/SkillsScreen';
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import NavBar from "../components/ui/NavBar";

const RouterApp =()=>{
    return(
        <Router>
            <div>

                <Header/>
                <NavBar/>

                <Switch>
                    <Route exact path="/portfolio" component={PortfolioScreen} />
                    <Route exact path="/skills" component={SkillsScreen} />
                    <Route path="/" component={HomeScreen}/>

                    <Redirect to="/" />
                </Switch>
                
                <Footer/>
                
            </div>
        </Router>
    );
}

export default RouterApp;