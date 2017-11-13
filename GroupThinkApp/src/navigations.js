import React, { Component } from 'react';
import { 
	Platform,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
} from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';


import AuthenticationScreen from './screens/AuthenticationScreen';
import FeedScreen from './screens/FeedScreen';
import CreateScreen from './screens/CreateScreen';
import ProfileScreen from './screens/ProfileScreen';
import DecisionPollScreen from './screens/DecisionPollScreen';

import HeaderAvatar from './components/NavigationBar/HeaderAvatar';
import HeaderLogo from './components/NavigationBar/HeaderLogo';


const Tabs = TabNavigator({
	FeedScreen: {
		screen: FeedScreen,
			navigationOptions: ({ navigation }) => ({
				headerTitle: 'Feed'
			})
	},
	CreateScreen: {
		screen: CreateScreen,
		navigationOptions: () => ({
				headerTitle: 'Create',
		})
	},
	ProfileScreen: {
		screen: ProfileScreen,
		navigationOptions: () => ({
				headerTitle: 'Profile',
		})
	},
}, { 
	lazy: true,
	tabBarPosition: 'bottom',
	swipeEnabled: false, 
});



const AppMainNavigation = StackNavigator({
		Feed: {
			screen: Tabs,
		},
		Profile: {
			screen: ProfileScreen,
		},
		},
			{ 
				cardStyle: {
					backgroundColor: 'white'
				},

			});	

class AppNavigator extends Component {
	render() {
		const navigation = addNavigationHelpers({
			dispatch: this.props.dispatch,
			state: this.props.navigation
		});

		if(!this.props.user.isAuthenticated) {
			return <AuthenticationScreen />
		}

		return <AppMainNavigation navigation={navigation} />
	}
}


export default connect(
	state => ({
		navigation: state.navigation,
		user: state.user,
	}))(AppNavigator);

export const router = AppMainNavigation.router;