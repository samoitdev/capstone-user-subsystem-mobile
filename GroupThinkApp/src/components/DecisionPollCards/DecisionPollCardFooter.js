import React, { Component } from 'react';
import {
	View, 
	Text,
	StyleSheet,
} from 'react-native'; 

function DecisionPollCard() {
	return (
		<View style={styles.container}>
			<Text>To Do</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		minHeight: 40,
		backgroundColor: 'white',
	},
});

export default DecisionPollCard;