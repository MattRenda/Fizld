import { createSelector } from 'reselect';

export const selectDomain = (state) => state.reducer;
export const selectUser = (state) => selectDomain(state).user;

export const getUser = () => createSelector(
  selectUser,
  (user) => user,
);
