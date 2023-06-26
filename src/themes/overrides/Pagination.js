// ==============================|| OVERRIDES - PAGINATION ||============================== //

export default function Pagination(theme) {
  return {
    MuiPagination: {
      ...theme.components?.MuiPagination,
      defaultProps: {
        shape: 'rounded'
      }
    }
  };
}
