import React, { Component } from 'react';
import {
	View,
	Text, 
	Image,
	StyleSheet,
	FlatList

} from 'react-native';

import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import CustomTouchableImage from '../components/CustomTouchableImage';
import Loading from '../components/Loading';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../utils/metrics';

class ProfileScreen extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>Profile Screen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%'

	},
});

export default ProfileScreen;