import React, { Component } from 'react';
import { 
	Platform,
	Image,
} from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import FeedScreen from './screens/FeedScreen';
import CreateScreen from './screens/CreateScreen';
import ProfileScreen from './screens/ProfileScreen';

import HeaderAvatar from './components/NavigationBar/HeaderAvatar';
import HeaderLogo from './components/NavigationBar/HeaderLogo';

import RegistrationForm from './components/Authentication/RegistrationForm';

/*
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
});*/



const AppMainNavigation = StackNavigator({
		Feed: {
			screen: FeedScreen,
			navigationOptions: ({ navigation }) => ({
				headerRight: <HeaderAvatar 
				onPress={() => navigation.navigate('Profile')}
				/>,
				headerTitle: 'Feed'
			})
		},
		Profile: {
			screen: ProfileScreen,
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

		if(!this.props.user.isAuthenticated) {
			return <RegistrationForm />
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