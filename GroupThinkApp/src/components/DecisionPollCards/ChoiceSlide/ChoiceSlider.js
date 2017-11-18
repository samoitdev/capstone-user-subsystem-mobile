import React, { Component } from 'react'
import { Animated, Easing, View, Image, Dimensions, ScrollView, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native'

import ChoiceSlide from './ChoiceSlide';

const deviceWidth = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Choice extends Component {

  //ZOOM VIEW
  animZoomVal = new Animated.Value(0) 

  animTranslateY = this.animZoomVal.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 175],
  })

  //SCROLLBAR
  animScrollBarOpacityVal = new Animated.Value(1)
  animScrollOpacityUpTiming = Animated.timing(this.animScrollBarOpacityVal, {
    toValue: 1,
    duraton: 300,
    easing: Easing.inOut(Easing.quad),
  })
  animScrollOpacityDownTiming = Animated.timing(this.animScrollBarOpacityVal, {
    toValue: 0,
    duraton: 300,
    easing: Easing.inOut(Easing.quad),
  })

  //CLOSE BUTTON
  animCloseOpacityVal = new Animated.Value(0)
  animCloseOpacityUpTiming = Animated.timing(this.animCloseOpacityVal, {
    toValue: 1,
    duraton: 300,
    easing: Easing.inOut(Easing.quad),
  })
  animCloseOpacityDownTiming = Animated.timing(this.animCloseOpacityVal, {
    toValue: 0,
    duraton: 300,
    easing: Easing.inOut(Easing.quad),
  })

  animScrollXVal = new Animated.Value(0)

  // To get clamp to work on the right edge we have to clamp using the indicator's left position
  scrollXVal = this.animScrollXVal.interpolate({
    inputRange: [0, deviceWidth * (this.props.choices.length - 1)],
    outputRange: [0, (deviceWidth / this.props.choices.length) * (this.props.choices.length - 1)],
    extrapolate: 'clamp',
  })

  state = { }
  
  renderSlide = ({ item }) => {
    return (
      <ChoiceSlide
        source={"https://i.ytimg.com/vi/7I8OeQs7cQA/maxresdefault.jpg"}
        slidePressed={this._slidePressed}
        ref={(ref) => this.slideRefs = {...this.slideRefs, [`${item._id}`]: ref}}
      />
    )
  }

  _slidePressed = (pressedReference) => {
    for(var id in this.slideRefs) {
      this.slideRefs[id]._unCheck();
    }
    pressedReference._check();
  }

  render() {

    return (
      <View
        style={styles.container}
      >
            <FlatList
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animScrollXVal } } }]
            )}
            data={this.props.choices}
            renderItem={this.renderSlide}

            keyExtractor={(item, index) => index}
          />
          <View
            style={{
              width: deviceWidth,
              height: 5,
            }}
          >

            <Animated.View
              style={{
                backgroundColor: '#E5E5E5',
                opacity: this.animScrollBarOpacityVal,
              }}
            >
              <Animated.View
                style={{
                  backgroundColor: '#111111',
                  width: deviceWidth / this.props.choices.length,
                  height: 5,
                  transform: [
                    {
                      translateX: this.scrollXVal,
                    },
                  ]
                }}
              />
            </Animated.View>
          </View>
    
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: 400,
      alignItems: 'center',
      justifyContent: 'flex-start',
  },
});

export default Choice; 
