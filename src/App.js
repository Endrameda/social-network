import React from 'react';
import { Route, Switch } from "react-router-dom";
import './styles/App.scss';
import Aside from "./Components/Aside/Aside";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Hedaer/HeaderContainer";

const App = () => {
	return (
		<div className="app-wrapper container">
			<HeaderContainer/>
			<Aside/>
			<div className="app-wrapper-content">
				<Switch className="app-wrapper-content">
					<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
					<Route path='/dialogs' render={() => <DialogsContainer/>}/>
					<Route path='/users' render={() => <UsersContainer/>}/>
					<Route path='/news' render={() => <News/>}/>
					<Route path='/music' render={() => <Music/>}/>
					<Route path='/settings' render={() => <Settings/>}/>
					<Route path='/login' render={() => <Login/>}/>
				</Switch>
			</div>
			<Footer/>
		</div>
	)
}

export default App;
