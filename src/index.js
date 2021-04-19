import * as React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigator from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
};

export default App;
