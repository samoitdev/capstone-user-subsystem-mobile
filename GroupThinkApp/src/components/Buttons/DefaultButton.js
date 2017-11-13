import React, { PropTypes } from 'react'
import { 
  ActivityIndicator, 
  StyleSheet, 
  Text,
} from 'react-native'

import CustomButton from '../CustomButton'

const DefaultButton = ({ onPress, isEnabled, isLoading, text, buttonStyle, textStyle, spinnerHeight, ...otherProps }) => {

  return (
      <CustomButton 
      onPress={onPress}
      isEnabled={isEnabled}
      isLoading={isLoading}
      buttonStyle={[styles.button, buttonStyle]}
      textStyle={[textStyle, styles.text]}
      text={text}
      spinnerHeight={spinnerHeight}
      />
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    padding: 10
  },
  text: {
    textAlign: 'center',
    color: 'black',
  }
})

export default DefaultButton;