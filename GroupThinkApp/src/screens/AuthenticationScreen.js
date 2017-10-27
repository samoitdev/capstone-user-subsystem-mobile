import React, { Component } from 'react';
import styled from 'styled-components/native';
import Touchable from '@appandflow/touchable';

import SignUpForm from '../../components/Authentication/SignUpForm';
//import LoginForm from '../../components/Authentication/LoginForm';

import { Fonts } from '../../utils/fonts';

const Root = styled.View`
	flex: 1;
	position: relative;
`;

const T = styled.Text`
fontFamily: ${Fonts.Lato};
color: white;

`;

const ButtonSignUp= styled(Touchable).attrs({
	feedback: 'opacity'
})`
	height: 45; 
	width: 150; 
	borderRadius: 15px;
	backgroundColor: #C2A1A1;
	alignItems: center;
	justifyContent: center;
	alignSelf: center;
	position: absolute; 
	top:40%;


`;

const ButtonLogin= styled(Touchable).attrs({
	feedback: 'opacity'
})`
	height: 45; 
	width: 150; 
	borderRadius: 15px;
	backgroundColor: #C2A1A1;
	alignItems: center;
	justifyContent: center;
	alignSelf: center;
	position: absolute; 
	top:48%;


`;

const initialState = {
		showSignUpForm: false,
		showLoginForm: false
	} 

class AuthenticationScreen extends Component {
	state = initialState;

	_onShowSignUpPressed = () => this.setState({ showSignUpForm: true });
	_onShowLoginPressed = () => this.setState({ showLoginForm: true });
	_onBackPress = () => this.setState({ ...initialState });

	render() {
		if(this.state.showSignUpForm) {
			return (
				<Root>
					<SignUpForm onBackPress={this._onBackPress} />
				</Root>
			)
		}

		if(this.state.showLoginForm) {
			return (
				<Root>
					<LoginForm  onBackPress={this._onBackPress}/>
				</Root>
			)
		}
		return (
			<Root>
				<ButtonSignUp onPress={this._onShowSignUpPressed}>
					<T>Sign Up</T>
				</ButtonSignUp>
				<ButtonLogin onPress={this._onShowLoginPressed}>
					<T>Login</T>
				</ButtonLogin>

			</Root>
		);
	}
}

export default AuthenticationScreen;