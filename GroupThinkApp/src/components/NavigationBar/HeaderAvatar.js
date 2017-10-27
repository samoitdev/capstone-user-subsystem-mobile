import React, { Component } from 'react';
import {
	Image, 
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import { connect } from 'react-redux';

import {fakeAvatar} from '../../utils/constants';
import Loading from '../Loading';

const AVATAR_SIZE = 30;
const AVATAR_RADIUS = AVATAR_SIZE / 2;

class HeaderAvatar extends Component {
	state = { }


	render() {
		if(!this.props.info) {
			return (
				<TouchableOpacity style={styles.avatarContainer} disabled>
					<Loading size="small"/>
				</TouchableOpacity>
			);
		}

		const avatarSource = this.props.info.avatar == null ? fakeAvatar : info.avatar;

		return (
			<TouchableOpacity style={styles.avatarContainer} onPress={this.props.onPress}>
				<Image style={styles.avatar} source={{ uri: avatarSource }}/>
			</TouchableOpacity>

		);
	} 
}

const styles = StyleSheet.create({
	avatarContainer: {
		marginRight: 15, 
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatar: {
		height: AVATAR_SIZE,
		width: AVATAR_SIZE,
		borderRadius: AVATAR_RADIUS,
	}
});

export default connect(state => ({ info: state.user.info }))(HeaderAvatar);