import React from 'react';
import { act } from '@testing-library/react';
import Organizations from '../components/Organizations';
import { OrganizationsMockData } from '../helpers/testMockData';
import { renderWithProviders, renderWithProvidersWithStore, getStore, initialState } from '../helpers/testHelper';

describe('OrganizationTable', () => {
  test('it renders with mock data', () => {
    const { getByText, container } = renderWithProviders(
      <Organizations />,
      {
        state: {
          organizations: OrganizationsMockData,
        },
      },
    );

    expect(getByText('Oldest 2 organizations')).toBeInTheDocument();
    expect(container.querySelector('thead')).toBeInTheDocument();
    expect(container.querySelector('tbody')).toBeInTheDocument();
    expect(container.querySelectorAll('thead tr th')).toHaveLength(4);
    expect(container.querySelectorAll('tbody tr')).toHaveLength(2);
  });

  test('it dispatches action when rendering', async () => {
    const promise = Promise.resolve();
    const store = getStore()(initialState);

    renderWithProvidersWithStore(
      <Organizations />,
      store,
    );

    const actions = store.getActions();
    expect(actions.length).toBeGreaterThan(0);

    const actionTypes = actions.map((action) => action.type);
    expect(actionTypes.includes('ORGANIZATION_FETCH_REQUESTED')).toBe(true);

    await act(() => promise);
  });
});
