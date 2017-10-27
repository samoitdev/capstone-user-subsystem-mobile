import React, { Component } from 'react';
import { 
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Platform, 
	Keyboard, 
	StyleSheet,
	AsyncStorage } from 'react-native';

import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';
import { login } from '../../reducer-actions/user-actions';

import REGISTRATION_MUTATION from '../../graphql/mutations/register';

import Loading from '../Loading';



class RegistrationForm extends Component {
	state = { 
		username: '',
		email: '',
		password: '',
		loading: false, 
	};

	onChangeText = (text, type) => this.setState({ [type]: text });

	onSignUpPress = async () => {

		this.setState({ loading: true })

		const { username, email, password } = this.state;



		try {

			const { data } =  await this.props.mutate({
				variables: {
					username, 
					email,
					password
				}
			});

			await AsyncStorage.setItem('@groupthinkmobileapp', data.signup.token); 
			this.setState({ loading: false }); 

			return this.props.login();
		} catch(error) {
			throw error;
		}

	}


	render() {
		if(this.state.loading) {
			return <Loading size="small"/>
		}
		return (
			<View style={styles.container}>
				<TouchableOpacity 
				style={styles.backButtonContainer}
				onPress={this.props.onBackPress}
				>
					<Text>Back</Text>
				</TouchableOpacity>
				<View style={styles.inputContainer}>
					<TextInput
					style={styles.inputContainer}
					 placeholder="Username" onChangeText={text => this.onChangeText(text, 'username')}/>
					
					<TextInput
					style={styles.inputContainer} placeholder="Email" onChangeText={text => this.onChangeText(text, 'email')}/>
					<TextInput
					style={styles.inputContainer} placeholder="Password" onChangeText={text => this.onChangeText(text, 'password')}/>
					<TouchableOpacity 
					style={styles.submitButtonContainer}
					onPress={this.onSignUpPress}>
						<Text>Submit</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative', 
	},
	backButtonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		backgroundColor: '#C2A1A1',
		top: '10%',
		left: '5%',
		padding: 10,
		borderRadius: 10,
	},
	submitButtonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#C2A1A1',
		padding: 10,
		borderRadius: 10,
		marginTop: 10,
	},
	inputContainer: {
		position: 'absolute',
		top: '30%',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		width: '100%',
	},
	inputContainer: {
		marginTop: 10,
		width: '100%',
	}
});

export default compose(
	graphql(REGISTRATION_MUTATION),
	connect(undefined, { login }))
	(RegistrationForm);