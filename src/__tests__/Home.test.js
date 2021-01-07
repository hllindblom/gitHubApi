import React from 'react';
import { act } from '@testing-library/react';
import Home from '../components/Home';
import { renderWithProviders, renderWithProvidersWithStore, getStore, initialState } from '../helpers/testHelper';

describe('Home', () => {
  test('it renders with sub components and mock data', () => {
    const { getByText } = renderWithProviders(
      <Home />,
      {
        state: {
          zen: 'Zen',
          octocat: 'Octocat',
        },
      },
    );

    expect(getByText('Test fetching data from GitHub API')).toBeInTheDocument();
    expect(getByText('Zen')).toBeInTheDocument();
    expect(getByText('Octocat')).toBeInTheDocument();
  });

  test('it dispatches action when rendering', async () => {
    const promise = Promise.resolve();
    const store = getStore()(initialState);

    renderWithProvidersWithStore(
      <Home />,
      store,
    );

    const actions = store.getActions();
    expect(actions.length).toBeGreaterThan(0);

    const actionTypes = actions.map((action) => action.type);
    expect(actionTypes.includes('INIT_REQUESTED')).toBe(true);

    await act(() => promise);
  });
});
