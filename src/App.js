import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import theme from './theme';
import { Body, Link } from './styled';
import Home from './components/Home';
import ErrorBoundary from './components/ErrorBoundary';
import Organizations from './components/Organizations';
import Emojis from './components/Emojis';
import reducer from './store/reducers';
import mySaga from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

const App = () =>
  (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ModalProvider>
          <Body className="App">
            <Router>
              <div>
                <Link to="/">home</Link>
                <Link to="/organizations">organizations</Link>
                <Link to="/emojis">random emojis</Link>
              </div>
              <Switch>
                <Route
                  path="/organizations"
                  render={() => (
                    <ErrorBoundary>
                      <Organizations />
                    </ErrorBoundary>
                  )}
                />
                <Route
                  path="/emojis"
                  render={() => (
                    <ErrorBoundary>
                      <Emojis />
                    </ErrorBoundary>
                  )}
                />
                <Route
                  path="/"
                  render={() => (
                    <ErrorBoundary>
                      <Home />
                    </ErrorBoundary>
                  )}
                />
              </Switch>
            </Router>
          </Body>
        </ModalProvider>
      </Provider>
    </ThemeProvider>
  );

export default App;
