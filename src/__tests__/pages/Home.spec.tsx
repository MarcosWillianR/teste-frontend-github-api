import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { act } from 'react-dom/test-utils';
import api from '../../services/apiClient';

import Home from '../../pages/Home';

const apiMock = new MockAdapter(api);

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('Home page', () => {
  it('should be able to list users', async () => {
    const { getByPlaceholderText, getByText } = render(<Home />);

    apiMock.onGet('/john_doe').reply(200, {
      login: 'john_doe',
      avatar_url: 'john_doe.png',
      name: 'John Doe',
      location: 'United States',
      bio: 'fake user for test purproses',
      public_repos: 22,
      followers: 9,
      following: 5,
    });

    const searchInput = getByPlaceholderText('ex: facebook');

    act(() => {
      fireEvent.change(searchInput, { target: { value: 'john_doe' } });
    });

    await waitFor(() => {
      expect(getByText('john_doe - United States')).toBeTruthy();
      expect(getByText('John Doe')).toBeTruthy();
      expect(getByText('fake user for test purproses')).toBeTruthy();
      expect(getByText('22')).toBeTruthy();
      expect(getByText('9')).toBeTruthy();
      expect(getByText('5')).toBeTruthy();
    });
  });
  it('should be able to push to user repositories', async () => {
    const { getByTestId, getByPlaceholderText } = render(<Home />);

    apiMock.onGet('/john_doe').reply(200, {
      login: 'john_doe',
      avatar_url: 'john_doe.png',
      name: 'John Doe',
      location: 'United States',
      bio: 'fake user for test purproses',
      public_repos: 22,
      followers: 9,
      following: 5,
    });

    const searchInput = getByPlaceholderText('ex: facebook');

    await waitFor(() => {
      act(() => {
        fireEvent.change(searchInput, { target: { value: 'john_doe' } });
      });
    });

    act(() => {
      fireEvent.click(getByTestId('repositories-page'));
    });

    expect(mockedHistoryPush).toHaveBeenCalledWith('john_doe/repositories');
  });
  it('should be able to push to user starred repositories', async () => {
    const { getByTestId, getByPlaceholderText } = render(<Home />);

    apiMock.onGet('/john_doe').reply(200, {
      login: 'john_doe',
      avatar_url: 'john_doe.png',
      name: 'John Doe',
      location: 'United States',
      bio: 'fake user for test purproses',
      public_repos: 22,
      followers: 9,
      following: 5,
    });

    const searchInput = getByPlaceholderText('ex: facebook');

    await waitFor(() => {
      act(() => {
        fireEvent.change(searchInput, { target: { value: 'john_doe' } });
      });
    });

    act(() => {
      fireEvent.click(getByTestId('starred-repositories-page'));
    });

    expect(mockedHistoryPush).toHaveBeenCalledWith(
      'john_doe/repositories/starred',
    );
  });
  it('should be able to remove user from list', async () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(<Home />);

    apiMock.onGet('/john_doe').reply(200, {
      login: 'john_doe',
      avatar_url: 'john_doe.png',
      name: 'John Doe',
      location: 'United States',
      bio: 'fake user for test purproses',
      public_repos: 22,
      followers: 9,
      following: 5,
    });

    const searchInput = getByPlaceholderText('ex: facebook');
    const userBio = getByText('fake user for test purproses');

    await waitFor(() => {
      act(() => {
        fireEvent.change(searchInput, { target: { value: 'john_doe' } });
      });
    });

    act(() => {
      fireEvent.click(getByTestId('remove-user-button'));
    });

    expect(userBio).not.toBeInTheDocument();
  });
  it('should be able to show error message when user not found', async () => {
    const { getByTestId, getByPlaceholderText } = render(<Home />);

    apiMock.onGet('/john_doe').reply(404);

    const searchInput = getByPlaceholderText('ex: facebook');

    act(() => {
      fireEvent.change(searchInput, { target: { value: 'john_doe' } });
    });

    await waitFor(() => {
      expect(getByTestId('user-search-error-message')).toBeInTheDocument();
    });
  });
});
