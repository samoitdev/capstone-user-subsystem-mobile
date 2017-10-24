import { combineReducers } from 'redux';

import navigation from './navigation';

export default client => combineReducers({
  apollo: client.reducer(),
  navigation
});