import { combineReducers } from 'redux';

import navigation from './navigation';
import user from './user';
import feed from './feed';

export default client => combineReducers({
  apollo: client.reducer(),
  navigation,
  user,
  feed
});