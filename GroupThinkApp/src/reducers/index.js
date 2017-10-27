import { combineReducers } from 'redux';

import navigation from './navigation';
import user from './user';

export default client => combineReducers({
  apollo: client.reducer(),
  navigation,
  user
});