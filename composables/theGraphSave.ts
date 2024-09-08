export const theGraphSave = () => {
  return useCookie('the-graph', { 
    default: () => ('')});
};
