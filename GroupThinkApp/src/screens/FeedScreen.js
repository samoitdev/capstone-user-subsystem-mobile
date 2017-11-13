import React, { Component } from 'react';
import {
	View,
	Text, 
	Image,
	FlatList,
	ListItem,
	Animated, 
	StyleSheet,
	Dimensions,
	PanResponder,
	TouchableOpacity,
	Platform

} from 'react-native';

import { graphql, compose, withApollo } from 'react-apollo';
import { connect } from 'react-redux';

import { setUserInfo, logout } from '../reducer-actions/user-actions';
import { setFeedOffset } from '../reducer-actions/feed-actions';

import GET_SOME_DECISION_POLLS_QUERY from '../graphql/queries/getSomeDecisionPolls';
import CURRENT_USER_QUERY from '../graphql/queries/currentUser';

import Loading from '../components/Loading';
import DecisionPollCard from '../components/DecisionPollCards/DecisionPollCard';


class FeedScreen extends Component {

	state = {
		loading: false,
		offset: 0,
		height: 5,
		errorMessage: "",
	}

	componentDidMount() {
		this._getUserInfo();
	}



	_getUserInfo = async () => {
		try {
			const { data } = await this.props.client.query({ query: CURRENT_USER_QUERY });
			if(data.error) {

			}

			if(data.currentUser) {
				this.props.setUserInfo(data.currentUser);
			}
		} catch(error) {
			if(error.message.includes('Unauthorized')) {
				this.props.logout();
			}
			this.setState({ error: error.message });
			throw error;
		}	
	}

	_fetchSomeMoreDecisionPolls = async () => {
	    this.setState({ loading: true });

	    try {

		    this.props.data.fetchMore({
		      variables: {
		        limit: this.props.limit,
		        offset: this.state.offset
		      },
		      updateQuery: (previousResult, { fetchMoreResult }) => {
		        if (!fetchMoreResult) {
		          return previousResult;
		        }
		        return {
		          getSomeDecisionPolls: [
		            ...previousResult.getSomeDecisionPolls,
		            ...fetchMoreResult.getSomeDecisionPolls
		          ]
		        };
		      }
		    });

		} catch (error) {
			if(error.message.includes('Unauthorized')) {
				this.props.logout();
			}
			this.setState({ error: error.message });
		} 
	    this.setState({ loading: false });
	};

	_renderItem = ({ item }) => {
		return (

			<DecisionPollCard {...item}
			/>
		);
	}

	_handleEnd = () => {
	    this.setState(
	      state => ({ offset: this.state.offset + this.props.limit }),
	      () => this._fetchSomeMoreDecisionPolls()
	    );
	};

	render() {

		const isIOS = Platform.OS === 'ios';

		const { data } = this.props;

		if(data.error) {
			if(data.error.message.includes('Unauthorized')) {
				this.props.logout();
			}

		 return (
		 	<Text>{data.error.message}</Text>
		 );
		}

		return (
			<View style={styles.container}>
				<FlatList
					numColumns={1}
					data={data.getSomeDecisionPolls}
					keyExtractor={item => item._id}
					renderItem={this._renderItem}
					showsVerticalScrollIndicator={false}
					onEndReached={() => {
						this._handleEnd()
					}}
					onEndReachedThreshold={isIOS ? 0 : 1}
					ListFooterComponent={() => 
						this.state.loading ? null
						: <Loading size="small" />
					}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#DFE3ea',
	},
});

export default withApollo(compose(
	connect(state => ({
		limit: state.feed.limit,
		offset: state.feed.offset,
	}), { 
		setUserInfo,
		setFeedOffset,
		logout
	}),
	graphql(GET_SOME_DECISION_POLLS_QUERY, {
		options: (ownProps) => ({
			errorPolicy: 'all',
			variables: {
				limit: ownProps.limit,
				offset: 0
			}
		})
	})
	)(FeedScreen));