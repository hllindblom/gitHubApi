import React from 'react';
import { act, fireEvent, waitFor } from '@testing-library/react';
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

  test('it shows as many emojis as defined in form', async () => {
    const { getByTestId, getAllByTestId, getByText } = renderWithProviders(
      <Emojis />,
      {
        state: {
          emojis: MockData,
        },
      },
    );

    expect(getByTestId('emoji-input')).toBeInTheDocument();

    const input = getByTestId('emoji-input');
    fireEvent.change(input, { target: { value: '10' } });
    fireEvent.click(getByText('OK'));
    await waitFor(() => {
      expect(getAllByTestId('emoji')).toHaveLength(10);
      expect(getByText('10 emojis:')).toBeInTheDocument();
    });
  });

  test('it will show zero emojis if input is empty', async () => {
    const { getByTestId, getByText, container } = renderWithProviders(
      <Emojis />,
      {
        state: {
          emojis: MockData,
        },
      },
    );

    expect(getByTestId('emoji-input')).toBeInTheDocument();

    const input = getByTestId('emoji-input');
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(getByText('OK'));
    await waitFor(() => {
      expect(container.querySelector('img')).not.toBeInTheDocument();
      expect(getByText('0 emojis:')).toBeInTheDocument();
    });
  });
});
