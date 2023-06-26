// ==============================|| OVERRIDES - TABLE PAGINATION ||============================== //

export default function TablePagination(theme) {
  return {
    MuiTablePagination: {
      styleOverrides: {
        selectLabel: {
          fontSize: '0.875rem'
        },
        displayedRows: {
          fontSize: '0.875rem'
        }
      },
      ...theme.components?.MuiTablePagination
    }
  };
}
