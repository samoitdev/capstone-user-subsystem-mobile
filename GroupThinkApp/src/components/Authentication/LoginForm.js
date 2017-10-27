import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Fonts } from '../../utils/fonts';
import Touchable from '@appandflow/touchable';
const Root = styled.View`
	flex: 1;
	position: relative; 



`;

const T = styled.Text`
fontFamily: ${Fonts.Lato};
color: white;

`;

const BackButton = styled(Touchable).attrs({
	feedback: 'opacity'
})`
	justifyContent: center;
	alignItems: center;
	position: absolute;
	backgroundColor: #C2A1A1;
	top: 10%;
	left: 5%;
	padding: 10px;
	borderRadius: 10;

`;

const SubmitButton = styled(Touchable).attrs({
	feedback: 'opacity'
})`
justifyContent: center;
	alignItems: center;
	backgroundColor: #C2A1A1;
	padding: 10px;
	borderRadius: 10;
	marginTop: 10px; 
`;


const InputContainer = styled.View`
	position: absolute;
	top: 30%;
	alignItems: center;
	justifyContent: center;
	alignSelf: center;
	width: 100%;
`;

const Input = styled.TextInput`
	marginTop: 10px; 
	width: 100%;
`;


class LoginForm extends Component {
	state = { }
	render() {
		return (
			<Root>
				<BackButton onPress={this.props.onBackPress}>
					<T>Back</T>
				</BackButton>
				<InputContainer>
					<Input placeholder="Username or Email"/>
					<Input placeholder="Password"/>
					<SubmitButton>
						<T>Submit</T>
					</SubmitButton>
				</InputContainer>
			</Root>
		);
	}
}

export default LoginForm;