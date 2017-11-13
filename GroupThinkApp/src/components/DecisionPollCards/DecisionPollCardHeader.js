import React, { Component } from 'react';
import {
	View, 
	Text,
	Image,
	StyleSheet,
} from 'react-native'; 

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

function DecisionPollCardHeader({ title, avatar, createdAt }) {
	return (
		<View style={styles.container}>
			<View style={styles.avatarContainer}>
				<Image style={styles.avatar} source={{ uri: avatar }}/>
			</View>
			<View style={styles.metaContainer}>
				<View style={styles.metaTopContainer}>
					<Text style={styles.metaUsername}>
					{title}
					</Text>
				</View>
				<View style={styles.metaBottomContainer}>
					<Text style={styles.metaTime}>
					{distanceInWordsToNow(createdAt)} ago
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	avatarContainer: {
		flex: 0.2,
		backgroundColor: 'white',
		alignSelf: 'stretch',
		justifyContent: 'center',
		paddingLeft: 10,
	},

	avatar: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	metaContainer: {
		flex: 1,
		backgroundColor: 'white',
		alignSelf: 'stretch'
	},
	metaTopContainer: {
		flex: 1,
		alignSelf: 'stretch',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	metaUsername: {
		fontSize: 14,
	},
	metaBottomContainer: {
		flex: 0.8,
		alignSelf: 'stretch',
		backgroundColor: 'white',
	},
	metaTime: {
		fontSize: 14,
	}


});

export default DecisionPollCardHeader;