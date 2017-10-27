import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	ActivityIndicator

} from 'react-native';

class Loading extends Component {

	state={ }

	render() {
		return (
			<View style={styles.container}>
		      <ActivityIndicator size={this.props.size} />
		    </View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center',
		justifyContent: 'center'
	}
})


export default Loading;