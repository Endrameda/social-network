import React from 'react';
import {Route, Switch} from "react-router-dom";
import './styles/App.scss';
import Header from "./Components/Hedaer/Header";
import Aside from "./Components/Aside/Aside";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Footer from "./Components/Footer/Footer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {
    return (

        <div className="app-wrapper container">
            <Header/>
            <Aside/>
            <Switch className="app-wrapper-content">
                <Route path='/profile'
                       render={() => <Profile
                           store={props.store}/>
                       }/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer
                           store={props.store}/>
                       }/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App;
