import React from 'react';
import { act } from '@testing-library/react';
import Emojis from '../components/Emojis';
import { MockData } from '../helpers/emoji_data';
import { renderWithProviders, renderWithProvidersWithStore, getStore, initialState } from '../helpers/testHelper';

describe('OrganizationTable', () => {
  test('it renders with mock data', () => {
    const { getByText, getAllByTestId } = renderWithProviders(
      <Emojis />,
      {
        state: {
          emojis: MockData,
        },
      },
    );

    expect(getByText('Random Emojis from GitHub')).toBeInTheDocument();
    expect(getAllByTestId('emoji')).toHaveLength(30);
  });

  test('it dispatches action when rendering', async () => {
    const promise = Promise.resolve();
    const store = getStore()(initialState);

    renderWithProvidersWithStore(
      <Emojis />,
      store,
    );

    const actions = store.getActions();
    expect(actions.length).toBeGreaterThan(0);

    const actionTypes = actions.map((action) => action.type);
    expect(actionTypes.includes('EMOJI_FETCH_REQUESTED')).toBe(true);

    await act(() => promise);
  });
});
