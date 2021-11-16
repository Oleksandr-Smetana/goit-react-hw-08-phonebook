import { createSelector } from '@reduxjs/toolkit';

export const getAllItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector(
  [getAllItems, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase().trim(' ');

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
