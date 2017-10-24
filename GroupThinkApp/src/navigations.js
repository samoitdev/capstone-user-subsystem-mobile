import React, { Component } from 'react';
import { Platform } from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import FeedScreen from './screens/FeedScreen';
import CreateScreen from './screens/CreateScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tabs = TabNavigator({
	FeedScreen: {
		screen: FeedScreen,
		navigationOptions: () => ({
				headerTitle: 'Feed',
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



const AppMainNavigation = Platform.select({
	ios: StackNavigator({
		Home: {
			screen: Tabs
		}
		},
			{ 
				cardStyle: {
					backgroundColor: 'white'
				},
				navigationOptions: () => ({
					headerStyle: {
						backgroundColor: 'white'
					},
					headerTitleStyle: {
						color: 'black'
					}
				})

			}


		),	
	android: StackNavigator({
		Home: {
			screen: Tabs,
		}
		},
			{ 
				cardStyle: {
					backgroundColor: 'white'
				},
				navigationOptions: () => ({
					headerStyle: {
						backgroundColor: 'white'
					},
					headerTitleStyle: {
						color: 'black'
					}
				})

			}


		), 
});



/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

class AppNavigator extends Component {
	render() {
		const navigation = addNavigationHelpers({
			dispatch: this.props.dispatch,
			state: this.props.navigation
		});
		return <AppMainNavigation navigation={navigation} />
	}
}

export default connect(
	state => ({
		navigation: state.navigation
	}))(AppNavigator);

export const router = AppMainNavigation.router;