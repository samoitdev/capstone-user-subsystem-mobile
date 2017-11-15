import React, { Component } from 'react';
import { 
	Animated, 
	Easing, 
	View, 
	Image, 
	Dimensions, 
	ScrollView, 
	TouchableOpacity, 
	Text, 
	StyleSheet } 
from 'react-native';

const deviceWidth = Dimensions.get('window').width

class ChoiceSlide extends Component {

  state = {
    checked: false,
  }

  _unCheck = () => {
    this.setState({ checked: false });
  }
  _check = () => {
    this.setState({ checked: true });
  }

  render() {
    return (
        <TouchableOpacity
          onPress={() => this.props.slidePressed(this)}
          activeOpacity={1}

        >
          <Image
            source={{uri: this.props.source}}
            style={styles.image}
          />
          {(this.state.checked) && (
          <Text style={styles.text}>Checked</Text>
          )}
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
	image: {
		height: '100%',
		width: deviceWidth,
	},
	 text: {
	   position: 'absolute',
	   top: '5%',
	   left: '5%',
	   color: 'white',
	   backgroundColor: 'green'
	}
});


export default ChoiceSlide;