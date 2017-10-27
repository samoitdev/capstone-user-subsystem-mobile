import React, { Component } from 'react';
import {
	View,
	Text, 
	Image,
	FlatList,
	StyleSheet,

} from 'react-native';

import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import { setUserInfo } from '../reducer-actions/user-actions';

import GET_DECISION_POLLS_QUERY from '../graphql/queries/getDecisionPolls';
import CURRENT_USER_QUERY from '../graphql/queries/currentUser';

import TitleCard from '../components/TitleCard';
import Loading from '../components/Loading';

class FeedScreen extends Component {

	state={ }

	componentDidMount() {
		this.getUserInfo();
	}

	getUserInfo = async () => {
		const { data } = await this.props.client.query({ query: CURRENT_USER_QUERY });
		if(data.error) {

		}

		if(data.currentUser) {
			this.props.setUserInfo(data.currentUser);
		}
	}

	renderTitleCard = ({ item }) => <TitleCard {...item}/>

	render() {
		const { data } = this.props;
		if(data.loading) {
			return (
				<View style={styles.container}>
					<Loading size="large"/>
				</View>
			);
		} else if(data.error) {
			return(
				<View>
					<Text>Error</Text>
				</View>
			);
		}
		return (
			<View style={styles.container}>
				<FlatList 
				contentContainerStyle={{alignSelf: 'stretch'}}
				data={data.getDecisionPolls}
				keyExtractor={item => item._id}
				renderItem={this.renderTitleCard}

				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});

export default withApollo(compose(
	connect(undefined, { setUserInfo }),
	graphql(GET_DECISION_POLLS_QUERY)
	)(FeedScreen));