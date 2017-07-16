export const RECIPE_ACTIONS = {
  // user actions
  GET_RECIPES_BY_NAME: 'GET_RECIPES_BY_NAME',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',

  // epic actions
  RECIPES_RECEIVED_SUCCESS: 'RECIPES_RECEIVED_SUCCESS',
  RECIPES_RECEIVED_ERROR: 'RECIPES_RECEIVED_ERROR',
  FETCH__SEARCH_RESULT: 'FETCH_SEARCH_RESULT',
  FETCH_SEARCH_RESULT_FULFILLED: 'FETCH_SEARCH_RESULT_FULFILLED',
};

export const getRecipeByName = recipeName => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME,
  payload: recipeName
});

export const setSearchTerm = (text) => ({
  type: RECIPE_ACTIONS.SET_SEARCH_TERM,
  payload: text
});

export const fetchSearchResult = searchTerm => ({
  type: RECIPE_ACTIONS.FETCH_SEARCH_RESULT,
  payload: searchTerm
});

export const fetchSearchResultFulfilled = payload => ({
  type: RECIPE_ACTIONS.FETCH_SEARCH_RESULT_FULFILLED,
  payload
});
