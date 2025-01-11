import { createStore, combineReducers } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Provider } from 'react-redux';
import usersReducer from './UsersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer);

export default store;
