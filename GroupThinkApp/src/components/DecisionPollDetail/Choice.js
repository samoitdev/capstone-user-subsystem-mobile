import React, { Component } from 'react';
import {
	View,
	Text, 
	Image,
	FlatList,
	StyleSheet,
	Animated,
	Dimensions,  
	PanResponder,
  	TouchableOpacity,

} from 'react-native';

import { Fonts } from '../../utils/fonts';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height; 

class Choice extends Component {

	state={ }
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.background}>
					<View style={[{ width: this.props.percentage + '%'}, styles.foreground]}>
					</View>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.choiceText}>{this.props.choice}</Text>
					<Text style={styles.percentageText}>{this.props.percentage}</Text>
				</View>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		flex: 1,
		borderRadius: 3,
		backgroundColor: 'rgb(236, 239, 242)'
		//android only
	},
	foreground: {
		height: '100%',
		borderRadius: 3, 
		//borderTopLeftRadius: 3,
		//borderBottomLeftRadius: 3,
		backgroundColor: 'rgb(185, 197, 209)'
	},
	foregroundContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	textContainer: {
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		bottom: 0,
		justifyContent: 'center',
		backgroundColor: 'transparent',
		padding: 10,
	},
	choiceText: {
		position: 'absolute',
		color: 'white',
		fontFamily: Fonts.LatoHeavy,
		left: 20,
	},
	percentageText: {
		position: 'absolute',
		width: '100%',
		right: 20,
		textAlign: 'right',
		fontFamily: Fonts.LatoHeavy,
		color: 'rgb(185, 197, 209)'
	},
});

export default Choice;
