import React, { Component } from 'react';
import { 
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	AsyncStorage
} from 'react-native';
import { graphql, compose } from 'react-apollo';
import { connect } from 'react-redux';

import SIGN_UP_MUTATION from '../../graphql/mutations/signup';
import { login } from '../../reducer-actions/user-actions';


import metrics from '../../utils/metrics'
import CustomButton from '../../components/CustomButton';
import DefaultButton from '../../components/Buttons/DefaultButton';
import CustomTextInput from '../../components/CustomTextInput';


class SignUpForm extends Component {

	state = { 
		email: "",
		username: "",
		password: "",
		loading: false,
		error: "",
	}

	_onChangeText = (key, value) => {
		this.setState({ [key]: value});
	}

	_isButtonDisabled = () => {
		const { email, password, username } = this.state;

	    if (!email || !password || !username) {
	      return true;
	    }

	    return false;
	}

	_onSignUpPress = async () => {
	    this.setState({ loading: true });

	    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	    const { email, password, username } = this.state;

	    if(!email || email.length == 0 || email == "") {
	    	this.setState({ error: "email required", loading: false});
	    	return false;
	    } 

	    if(emailRegex.test(email) === false) {
	    	this.setState({ error: "Must be a email", loading: false});
	    	return false;
	    }

	    if(!username || username.length == 0 || username == "") {
	    	this.setState({ error: "username required", loading: false});
	    	return false;
	    }

	    if(username.length < 2) {
	    	this.setState({ error: "username must be at least 2 characters", loading: false});
	    	return false;
	    }

		if(!password || password.length == 0 || password == "") {
	    	this.setState({ error: "password required", loading: false});
	    	return false;
	    }

	    if(password.length < 6) {
	    	this.setState({ error: "password must be at least 6 characters long", loading: false});
	    	return false;
	    } 

    	try {
	     const { data } = await this.props.mutate({
	        variables: {
	          email,
	          password,
	          username,
	        },
	      });

	     if(data.signup.token) {
	     	await AsyncStorage.setItem('@groupthinkmobileapp', data.signup.token);
	      	this.setState({ loading: false });
	      	return this.props.login();
	     } else {
	     	this.setState({ error: "Unable to Login", loading: false});
	    	return false;
	     }

	    } catch (error) {
	      //Extract Error
	      if(error.message) {
	      	this.setState({ error: error.message, loading: false});
	      }
	    }
  }

  
	render() {

		const { loading } = this.state;

		if(loading) {
			return (
			<Text>Loading...</Text>
			);
		}

		return (
			<View 
			style={styles.container}
			>	
				<DefaultButton 
				text={"Back"}
				buttonStyle={styles.backButton}
				onPress={this.props.onBackPress}
				/>
				<View style={styles.formWrapper}>
					<CustomTextInput 
						placeholder={"email"}
						onChangeText={text => this._onChangeText("email", text)}
					/>	
					<CustomTextInput 
						placeholder={"username"}
						onChangeText={text => this._onChangeText("username", text)}
					/>	
					<CustomTextInput 
						placeholder={"password"}
						onChangeText={text => this._onChangeText("password", text)}
						secureTextEntry={true}
					/>	
					<DefaultButton 
					text={"SIGN UP"}
					isEnabled={this._isButtonDisabled}
					onPress={this._onSignUpPress}

					/>
					<Text>Processed Inputs: </Text>
					<Text>{this.state.email}</Text>
					<Text>{this.state.username}</Text>
					<Text>{this.state.password}</Text>
				</View>
				{(this.state.error != "") && (
					<Text>{this.state.error}</Text>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		flexDirection: 'column',
		width: metrics.DEVICE_WIDTH,
		height: metrics.DEVICE_HEIGHT,
		paddingTop: 24,
		backgroundColor: 'white',
		padding: 10,
	},
	backButton: {
		flex: 1,
		width: 80,
		marginTop: 10, 
	},
	formWrapper: {
		marginTop: 40,
	}
});

export default compose(graphql(SIGN_UP_MUTATION), connect(undefined, { login }))(
  SignUpForm,
);