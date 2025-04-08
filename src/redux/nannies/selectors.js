export const selectNannies = state => state.nannies.items;
export const selectPage = state => state.nannies.page;
export const selectHasMore = state => state.nannies.hasMore;
export const selectLastKey = state => state.nannies.lastKey;
export const selectSortBy = state => state.nannies.sortBy;
export const selectIsLoading = state => state.nannies.isLoading;
export const selectError = state => state.nannies.error;

export const selectNannyById = (state, id) => {
  return state.nannies.items.find(nanny => nanny.id === id);
};
