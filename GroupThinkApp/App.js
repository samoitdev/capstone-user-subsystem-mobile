/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { UIManager } from 'react-native';
import { ApolloProvider } from 'react-apollo';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';

import AppNavigator from './src/navigations';

export default class App extends Component<{}> {
  render() {
    return (

      <ApolloProvider store={store} client={client}>
          <AppNavigator />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
