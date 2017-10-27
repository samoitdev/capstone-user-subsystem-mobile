import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native';

import Loading from './src/components/Loading';

import { UIManager } from 'react-native';
import { ApolloProvider } from 'react-apollo';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';

import AppNavigator from './src/navigations';

import { login } from './src/reducer-actions/user-actions';

//Components being tested
import TitleCard from './src/components/TitleCard';

export default class App extends Component<{}> {

  state = {
    appIsReady: false,
  }

  componentDidMount() {
    this.checkIfTokenExists();
  }

  checkIfTokenExists = async () => {
    try {
      const token = await AsyncStorage.getItem('@groupthinkmobileapp');
      if(token != null) {
        store.dispatch(login());
      }
    } catch(error) {
      throw error;
    }

    this.setState({ appIsReady: true});
  } 

  render() {
    if(!this.state.appIsReady) {
      return (
        <Loading size="large"/>
      );
    } 
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
