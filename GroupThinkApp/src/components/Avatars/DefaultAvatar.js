import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import CustomTouchableImage from '../CustomTouchableImage';

const DefaultAvatar = ({ source, onPress, isEnabled, isLoading, touchableStyle, imageStyle, spinnerHeight, ...otherProps }) => {
	return (
		<CustomTouchableImage
			source={source}
			onPress={onPress}
			isEnabled={isEnabled}
			isLoading={isLoading}
			touchableStyle={[touchableStyle, styles.touchable]}
			imageStyle={[imageStyle, styles.image]}
			spinnerHeight={spinnerHeight}
			{...otherProps}
		/>
	);
}

const styles = StyleSheet.create({
	touchable: {
	},
	image: {
		height: 30,
		width: 30,
		borderRadius: 15, 
	}
});

export default DefaultAvatar;