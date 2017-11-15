import React, { Component } from 'react'
import { Animated, Easing, View, Image, Dimensions, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native'

const deviceWidth = Dimensions.get('window').width
const height = Dimensions.get('window').height
const DISMISS_MODAL_THRESHOLD = 150 //distance we have to scroll in the y direction to dismiss the carousel

const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
  'https://i0.web.de/image/492/32241492,pd=4/nasa-jupiter.jpg',
]


class Slide extends Component {

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
            style={{
              height: '100%',
              width: deviceWidth
            }}
            ref={this.setImageRef}
          />
          {(this.state.checked) && (
          <Text style={slideStyles.text}>Checked</Text>
          )}
        </TouchableOpacity>
    )
  }
}

const slideStyles = StyleSheet.create({
  text: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    color: 'white',
    backgroundColor: 'green'

  }

});

export default class Choice extends Component {

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
    inputRange: [0, deviceWidth * (images.length - 1)],
    outputRange: [0, (deviceWidth / images.length) * (images.length - 1)],
    extrapolate: 'clamp',
  })

  state = {
    zoomEnabled: false,
    zoomed: false,
  }

  renderSlide = (image, i) => {
    var reference = 'slide' + i;
    return (
      <Slide
        key={i}
        source={image}
        index={i}
        slidePressed={this._slidePressed}
        ref={reference}
        refValue={reference}
      />
    )
  }

  _slidePressed = (pressedReference) => {

    if(this.refs.slide0) {
      this.refs.slide0._unCheck(); 
    }

    if(this.refs.slide1) {
      this.refs.slide1._unCheck(); 
    }

    if(this.refs.slide2) {
      this.refs.slide2._unCheck(); 
    }

    if(this.refs.slide3) {
      this.refs.slide3._unCheck(); 
    }

    pressedReference._check();
    
    //console.log(pressedReference);
  }

  render() {

    return (
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: 40,
        }}
      >
        <Animated.View
          style={{
            transform: [
              { translateY: this.animTranslateY },
            ],
            height: 400,
            zIndex: 10,
          }}
        >
          <Animated.ScrollView
            grow
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animScrollXVal } } }]
            )}
            style={{
              overflow: 'hidden',
            }}
          >
            {
              images.map((image, i) => {
                return (this.renderSlide(image, i))
              })
            }
          </Animated.ScrollView>
          <Animated.View
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
                  width: deviceWidth / images.length,
                  height: 5,
                  transform: [
                    {
                      translateX: this.scrollXVal,
                    },
                  ]
                }}
              />
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </View>

    )
  }
}
