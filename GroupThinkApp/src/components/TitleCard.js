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
		flex: 1,
		height: 80,
		backgroundColor: 'rgb(200,220,200)',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5, 
		padding: 5,
		width: '100%'
	},
	title: {
		color: 'white',	
	}

});

export default TitleCard;