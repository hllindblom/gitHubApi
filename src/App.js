import { React } from 'react';
import { ThemeProvider } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './theme';
import { Body, Link } from './styled';
import Home from './components/Home';
import OrganizationTable from './components/OrganizationTable';
import ErrorBoundary from './components/ErrorBoundary';
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
        <Body className="App">
          <Router>
            <div>
              <Link to="/">home</Link>
              <Link to="/organizations">organizations</Link>
            </div>
            <Switch>
              <Route
                path="/organizations"
                render={() => (
                  <ErrorBoundary>
                    <OrganizationTable />
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
      </Provider>
    </ThemeProvider>
  );

export default App;
