import React, { Component } from 'react';
import {
	View, 
	Text,
	StyleSheet,
	FlatList,
} from 'react-native'; 

import DecisionPollCardHeader from './DecisionPollCardHeader';
import DecisionPollCardFooter from './DecisionPollCardFooter';
import ChoiceSlider from './ChoiceSlide/ChoiceSlider';

import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../utils/metrics';

function DecisionPollCard({ title, user, createdAt, choices }) {

	_renderItem = ({ item }) => {
        return (
            <View 
            style={styles.slide}
            id={item._id}
            >
                <Text style={styles.title}>{ item.imageURL }</Text>
            </View>
        );
    }

	return (
		<View style={styles.container}>
			<DecisionPollCardHeader title={title} createdAt={createdAt} {...user}/>
			<View style={styles.content}>
				<ChoiceSlider 
					choices={choices}
				/>
			</View>
			<DecisionPollCardFooter />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		minHeight: 280,
		width: DEVICE_WIDTH,
		backgroundColor: 'red',
		marginTop: 10,
	},
	content: {
		width: '100%',
		backgroundColor: 'green',
	},
	list: {
		width: '100%',
		height: 200,
	},
	listContainer: {

	},
	slide: {
		height: 400, 
		marginRight: 20,
		padding: 10,
		width: DEVICE_WIDTH
	},

});

export default DecisionPollCard;