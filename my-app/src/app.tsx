import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Users from './compoents/Users';

const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};

export default App;
