import React, { Component } from 'react'
import { Platform, StyleSheet, TextInput } from 'react-native'
import { View } from 'react-native-animatable'

const IS_ANDROID = Platform.OS === 'android'

export default class AuthTextInput extends Component {

  state = {
    isFocused: false
  }

  focus = () => this.textInputRef.focus()

  render () {
    const { isEnabled, ...otherProps } = this.props
    const { isFocused } = this.state
    const color = isEnabled ? 'black' : 'grey'
    const borderColor = isFocused ? 'black' : 'grey'
    return (
      <View style={styles.container}>
        <View style={[styles.textInputWrapper, { borderColor }]}>
          <TextInput
          placeholder={this.props.placeholder}
            ref={(ref) => this.textInputRef = ref}
            autoCapitalize={'none'}
            autoCorrect={false}
            style={[styles.textInput, { color }]}
            maxLength={32}
            underlineColorAndroid={'transparent'}
            selectionColor={'black'}
            onFocus={() => this.setState({ isFocused: true })}
            onBlur={() => this.setState({ isFocused: false })}
            {...otherProps}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    marginBottom: 10
  },
  textInputWrapper: {
    height: 42,
    marginBottom: 2,
    borderBottomWidth: 1
  },
  textInput: {
    flex: 1,
    color: 'black',
    margin: IS_ANDROID ? -1 : 0,
    height: 42,
    padding: 7
  }
})