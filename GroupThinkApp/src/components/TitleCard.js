import React, { Component } from 'react';
import {
	View,
	Text, 
	Image,
	StyleSheet,

} from 'react-native';

class TitleCard extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.title}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 80,
		backgroundColor: 'rgb(200,220,226)',
		marginBottom: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: 'white',	
	}

});

export default TitleCard;