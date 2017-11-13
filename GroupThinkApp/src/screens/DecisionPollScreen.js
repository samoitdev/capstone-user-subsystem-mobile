import React, { Component } from 'react';
import {
	View,
	Text, 
	Image,
	StyleSheet,
	ScrollView, 
	TouchableOpacity

} from 'react-native';

import Choice from '../components/DecisionPollDetail/Choice';
import UserInformation from '../components/DecisionPollDetail/UserInformation';

import { Fonts } from '../utils/fonts';

import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import { setUserInfo } from '../reducer-actions/user-actions';
import { setFeedOffset } from '../reducer-actions/feed-actions';

import GET_DECISION_POLL_QUERY from '../graphql/queries/getDecisionPoll';

class DecisionPollScreen extends Component {

	render() {

		//User details
		// Title
		//	Paragraph
		// Choices
		//


		return (
			<View style={styles.container}>
				<ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
					<View style={{width: '100%', height: 60, paddingHorizontal: 20, marginTop: 10, flexDirection: 'row'}}>
						<View style={{ flex: 0.16, backgroundColor: 'white', justifyContent: 'center'}}>
							<Image style={{height: 40, width: 40, borderRadius: 20}}source={{ uri: 'https://randomuser.me/api/portraits/women/8.jpg'}}/>
						</View>
						<View style={{ flex: 0.44, backgroundColor: 'white'}}>
							<View style={{flex: 0.5, justifyContent: 'flex-end'}}>
								<Text style={{ fontFamily: Fonts.LatoMedium, fontSize: 15,}}>Illut Tjes</Text>
							</View>
							<View style={{flex: 0.5}}>
								<Text style={{ fontFamily: Fonts.LatoMedium, fontSize: 12, color: '#B2B2B2'}}>1 hour ago</Text>
							</View>
						</View>
						<View style={{ flex: 0.4, backgroundColor: 'white', alignItems: 'flex-end', justifyContent: 'center'}}>
							<TouchableOpacity style={{ height: 30, width: 70, backgroundColor: 'white', borderRadius: 3, borderColor: '#B9C5D0', borderWidth: 1.5, alignItems: 'center', justifyContent: 'center'}}>
								<Text style={{color: '#B9C5D0', fontFamily: Fonts.LatoHeavy}}>Follow</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={{width: '100%', paddingHorizontal: 20,}}>
						<Text style={{fontSize: 20, fontFamily: Fonts.LatoHeavy }}>{this.props.navigation.state.params.title}</Text>
					</View>
					<View style={{width: '100%', paddingHorizontal: 20, marginTop: 5,}}>
						<Text style={{fontSize: 15, fontFamily: Fonts.LatoMedium, }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis in neque eget sollicitudin. Mauris sagittis lacus quis risus vehicula egestas. Phasellus porta tellus eu tortor pulvinar blandit. Vivamus vel pretium urna. Praesent porta mi malesuada iaculis blandit. Suspendisse accumsan dignissim imperdiet. Maecenas laoreet magna viverra lorem malesuada blandit. 
 Vivamus vel pretium urna. </Text>
					</View>
					<View style={{width: '100%',paddingHorizontal: 20, marginTop: 18,}}>
						<View style={{ height: 40, width: '100%', marginTop: 12,}}>
							<TouchableOpacity style={{height: '100%', width: '100%'}}>
								<Choice percentage='64' choice='Yes' />
							</TouchableOpacity>
						</View>
						<View style={{ height: 40, width: '100%', marginTop: 12,}}>
							<Choice percentage='12' choice='No' />
						</View>
						<View style={{ height: 40, width: '100%', marginTop: 12,}}>
							<Choice percentage='24' choice='Idk' />
						</View>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		height: '100%',
		width: '100%'
	},
	scrollViewContent: {


	}
});

export default DecisionPollScreen;