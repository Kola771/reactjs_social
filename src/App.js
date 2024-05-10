import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './routes/router';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <AppRouter />
        </div>
      </Router>
    </Provider>
  );
}

export default App;