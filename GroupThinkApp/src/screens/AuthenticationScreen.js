import React, { Component } from 'react';
import { 
	View,
	TextInput,
	TouchableOpacity,
	StyleSheet } from 'react-native';
import { Text } from 'react-native-animatable';

//Containers
import SignUpForm from './Authentication/SignUpForm';
import SignInForm from './Authentication/SignInForm';

//Components
import DefaultButton from '../components/Buttons/DefaultButton';

import { Fonts } from '../utils/fonts';



const initialState = {
		showSignUpForm: false,
		showSignInForm: false
	} 

class AuthenticationScreen extends Component {
	state = initialState;

	_onShowSignUpPressed = () => this.setState({ showSignUpForm: true });
	_onShowSignInPressed = () => this.setState({ showSignInForm: true });
	_onBackPress = () => this.setState({ ...initialState });

	render() {

		if(this.state.showSignUpForm) {
			return (
				<SignUpForm onBackPress={this._onBackPress}/>
			);
		}

		if(this.state.showSignInForm) {
			return (
				<SignInForm onBackPress={this._onBackPress}/>
			);
		}


		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text
					animation={'fadeInDown'}
					duration={2000}
					style={styles.title}
					>
					GroupThink
					Plain
					</Text>
				</View>
				<View style={styles.actionsContainer}>
					<View style={styles.signupButtonContainer}>
						<DefaultButton
							onPress={this._onShowSignUpPressed}
							text={"Sign Up"}
						/>
					</View>
					<View style={styles.loginButtonContainer}>
						<DefaultButton
							onPress={this._onShowSignInPressed}
							text={"Sign In"}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	actionsContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	loginButtonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	signupButtonContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 30,
		fontFamily: Fonts.LatoHeavy,
		textAlign: 'center'
	}
});

export default AuthenticationScreen;