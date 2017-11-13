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

import SIGN_IN_MUTATION from '../../graphql/mutations/signin';
import { login } from '../../reducer-actions/user-actions';


import metrics from '../../utils/metrics'
import CustomButton from '../../components/CustomButton';
import DefaultButton from '../../components/Buttons/DefaultButton';
import CustomTextInput from '../../components/CustomTextInput';


class SignInForm extends Component {

	state = { 
		usernameOrEmail: "",
		password: "",
		loading: false,
		error: "",
	}

	_onChangeText = (key, value) => {
		this.setState({ [key]: value});
	}

	_isButtonDisabled = () => {
		const { usernameOrEmail, password} = this.state;

	    if (!usernameOrEmail || !password) {
	      return true;
	    }

	    return false;
	}

	_onSignUpPress = async () => {
	    this.setState({ loading: true });

	    const { usernameOrEmail, password } = this.state;

	    if(!usernameOrEmail || usernameOrEmail.length == 0 || usernameOrEmail == "") {
	    	this.setState({ error: "email required", loading: false});
	    	return false;
	    } 

	    if(usernameOrEmail.length < 2) {
	    	this.setState({ error: "Username or Email must be at least 2 characters", loading: false});
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
	          email: usernameOrEmail,
	          password: password,
	        }
	      });

	     if(data.signin.token) {
	     	await AsyncStorage.setItem('@groupthinkmobileapp', data.signin.token);
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
						placeholder={"Email"}
						onChangeText={text => this._onChangeText("usernameOrEmail", text)}
					/>		
					<CustomTextInput 
						placeholder={"password"}
						onChangeText={text => this._onChangeText("password", text)}
						secureTextEntry={true}
					/>	
					<DefaultButton 
					text={"Login"}
					isEnabled={this._isButtonDisabled}
					onPress={this._onSignUpPress}
					/>
					<Text>Processed Inputs: </Text>
					<Text>{this.state.usernameOrEmail}</Text>
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

export default compose(graphql(SIGN_IN_MUTATION), connect(undefined, { login }))(
  SignInForm,
);