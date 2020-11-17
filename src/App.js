import React from 'react';
import { Route, Switch } from "react-router-dom";
import './styles/App.scss';
import Header from "./Components/Hedaer/Header";
import Aside from "./Components/Aside/Aside";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Footer from "./Components/Footer/Footer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = (props) => {
	return (
		<div className="app-wrapper container">
			<Header/>
			<Aside/>
			<Switch className="app-wrapper-content">
				<Route path='/profile' render={() => <Profile/>}/>
				<Route path='/dialogs' render={() => <DialogsContainer/>}/>
				<Route path='/users' render={() => <UsersContainer/>}/>
				<Route path='/news' render={() => <News/>}/>
				<Route path='/music' render={() => <Music/>}/>
				<Route path='/settings' render={() => <Settings/>}/>
			</Switch>
			<Footer/>
		</div>
	)
}

export default App;
