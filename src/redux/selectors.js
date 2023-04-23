import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constats';

export const selectUsers = state => state.users.items;

export const selectIsLoading = state => state.users.isLoading;

export const selectError = state => state.users.error;

export const selectStatusFilter = state => state.filters.status;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectStatusFilter],
  (users, statusFilter) => {
    switch (statusFilter) {
      case statusFilters.follow:
        return users.filter(user => !user.isFollowed);
      case statusFilters.followings:
        return users.filter(user => user.isFollowed);
      default:
        return users;
    }
  }
);
