import React, { Component } from 'react';
import {
	View, 
	Text,
	StyleSheet,
} from 'react-native'; 

import DecisionPollCardHeader from './DecisionPollCardHeader';
import DecisionPollCardFooter from './DecisionPollCardFooter';

function DecisionPollCard({ title, user, createdAt }) {
	return (
		<View style={styles.container}>
			<DecisionPollCardHeader title={title} createdAt={createdAt} {...user}/>
			<View style={styles.content}>
				
			</View>
			<DecisionPollCardFooter />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		minHeight: 280,
		backgroundColor: 'red',
		marginTop: 10,
	},
	content: {
		flex: 1,
		backgroundColor: 'green',
	},

});

export default DecisionPollCard;