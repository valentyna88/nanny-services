export const sortAndFilterNannies = (nannies, sortBy) => {
  let result = [...nannies];

  switch (sortBy) {
    case 'asc':
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'desc':
      result.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'lt10':
      result = result.filter(nanny => nanny.price_per_hour < 10);
      break;
    case 'gt10':
      result = result.filter(nanny => nanny.price_per_hour >= 10);
      break;
    case 'popular':
      result.sort((a, b) => b.rating - a.rating);
      break;
    case 'notPopular':
      result.sort((a, b) => a.rating - b.rating);
      break;
    default:
      break;
  }

  return result;
};
