import React, { Component } from 'React';
import { StyleSheet } from 'react-native';
import { View, Image } from 'react-native-animatable';

import TouchableView from './TouchableView'

const CustomAvatar = ({ source, onPress, isEnabled, isLoading, touchableStyle, imageStyle, spinnerHeight, ...otherProps }) => {
  const onImagePress = isEnabled && !isLoading ? onPress : () => null

  return (
    <View {...otherProps}>
      <TouchableView onPress={onImagePress} style={[styles.touchable, touchableStyle]}>
        {(isLoading) && <ActivityIndicator style={[{height: spinnerHeight}]} color={'grey'} />}
        {(!isLoading) && <Image style={[styles.image, imageStyle]} source={{ uri: source}}/>}
      </TouchableView>
    </View>
  )
}

CustomAvatar.defaultProps = {
  onPress: () => null,
  isEnabled: true,
  isLoading: false
}

const styles = StyleSheet.create({
  touchable: {
    justifyContent: 'center',
  },
  image: {
  	alignSelf: 'center'
  }
})

export default CustomAvatar;