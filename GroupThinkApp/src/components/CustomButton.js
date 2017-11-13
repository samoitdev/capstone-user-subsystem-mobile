import React, { PropTypes } from 'react'
import { 
  ActivityIndicator, 
  StyleSheet, 
  Text,
} from 'react-native'
import { View } from 'react-native-animatable'

import TouchableView from './TouchableView'

const CustomButton = ({ onPress, isEnabled, isLoading, text, buttonStyle, textStyle, spinnerHeight, ...otherProps }) => {
  const onButtonPress = isEnabled && !isLoading ? onPress : () => null

  return (
    <View {...otherProps}>
      <TouchableView onPress={onButtonPress} style={[styles.button, buttonStyle]}>
        {(isLoading) && <ActivityIndicator style={[{height: spinnerHeight}]} color={'grey'} />}
        {(!isLoading) && <Text style={[styles.text, textStyle]}>{text}</Text>}
      </TouchableView>
    </View>
  )
}

CustomButton.defaultProps = {
  onPress: () => null,
  isEnabled: true,
  isLoading: false
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  }
})

export default CustomButton;