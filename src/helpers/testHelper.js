/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import theme from '../theme';

export const getStore = () => {
  const middlewares = [];
  return configureStore(middlewares);
};

const WithProviders = (props) => {
  const store = props.store || getStore()(props.mockState.state);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {props.children}
      </Provider>
    </ThemeProvider>
  );
};

export const renderWithProviders = (ui, mockState) => render(<WithProviders mockState={mockState}>{ui}</WithProviders>);

export const renderWithProvidersWithStore = (ui, store) => render(<WithProviders store={store}>{ui}</WithProviders>);

export const initialState = {
  organizations: null,
  emojis: null,
  zen: null,
  octocat: null,
  loading: true,
  loadingTable: true,
  loadingEmoji: true,
  error: null,
  errorTable: null,
  errorEmoji: null,
};
