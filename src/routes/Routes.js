import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Main from '../pages/components/Main';
// import Login from '../pages/LoginPage';
// import Signup from '../pages/SignupPage';
// import NewDiary from '../pages/NewDiaryPage';
// import Test from '../pages/Test';
// import MapPage from '../pages/MapPage';



export default class Routes extends Component {
	render() {
		return (
			<Router>
				<Stack key="root" hideNavBar={true}>
					<Scene key="main" component={Main} title="Main"/>
					{/* <Scene key="login" component={Login} title="Login"/>
					<Scene key="Test" component={Test} title="Test"/>
					<Scene key="test" component={Test} title="Test"/>
					<Scene key="signup" component={Signup} title="Signup"/>
					<Scene key="newDiary" component={NewDiary} title="NewDiary"/> */}
				</Stack>
			</Router>
		);
	}
}