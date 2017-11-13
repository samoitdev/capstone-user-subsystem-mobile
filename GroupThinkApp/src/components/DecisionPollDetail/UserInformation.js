import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

class UserInformation extends Component {
	

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.avatarContainer}>
					<Image style={styles.avatar} source={{ uri: 'https://randomuser.me/api/portraits/women/8.jpg'}}/>
				</View>
				<View style={styles.userMetaContainer}>
					<Text style={styles.name}></Text>
				</View>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',

	},
	avatarContainer: {
		position: 'absolute'	
	},
	avatar: {
		height: 40,
		width: 40, 
		borderRadius: 20
	}
});


export default UserInformation;