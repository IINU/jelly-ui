import { AsyncDropdownAction, AsyncDropdownState } from "./dropdown.types";

export const createInitialState = <T>(): AsyncDropdownState<T> => ({
  open: false,
  search: '',
  loading: false,
  options: [],
  fetchError: undefined,
  dropdownStatus: 'closed',
});

export const asyncDropdownReducer = <T>(state: AsyncDropdownState<T>, action: AsyncDropdownAction<T>): AsyncDropdownState<T> => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        fetchError: undefined,
        loading: true,
        search: action.searchTerm,
        dropdownStatus: "searching",
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        options: action.resultingOptions,
        loading: false,
        dropdownStatus: 'open'
      };
    case 'FETCH_ERROR':
      return {
        ...createInitialState<T>(),
        fetchError: action.errorMessage,
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.searchTerm,
      };
    case 'SET_OPEN':
      return {
        ...createInitialState<T>(),
        open: Boolean(action.open),
        loading: Boolean(action.open),
        dropdownStatus: action.open ? 'pre-fetching' : 'closed',
      };
  }
}
