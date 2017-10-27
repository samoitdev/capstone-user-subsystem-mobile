import React, { Component } from 'react';
import {
	Image, 
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import { fakeAvatar } from '../../utils/constants';

const LOGO_SIZE = 30;

class HeaderLogo extends Component {
	state = { }
	render() {
		return (
			<Image style={styles.logo} source={{ uri: fakeAvatar }}/>
		);
	} 
}

const styles = StyleSheet.create({
	logo: {
		alignSelf: 'center',
		height: LOGO_SIZE,
		width: LOGO_SIZE,
	}
});

export default HeaderLogo;