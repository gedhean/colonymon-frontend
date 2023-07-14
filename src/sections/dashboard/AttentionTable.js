import PropTypes from 'prop-types';
import { useState } from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// next
import NextLink from 'next/link';

// material-ui
import {
  Box,
  Divider,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';

// assets
import {
  DisconnectOutlined,
  FrownOutlined,
  ThunderboltOutlined,
  QuestionOutlined
} from '@ant-design/icons';
import { SeeHiveButton } from 'sections/hives/HiveTable';

function createData(id, name, reason, hiveId) {
  return { id, name, reason, hiveId };
}

const rows = [
  createData(84564564, 'Flavor Been', 0, 1),
  createData(98764564, 'Jaucou', 1, 2),
  createData(98756325, 'Human Dubs', 1, 3),
  createData(98652366, 'Foncarow', 0, 4),
  createData(13286564, 'Psycobee', 2, 5),
  createData(86739658, 'Honey Favor', 3, 6)
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// ==============================|| APIARY TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'id',
    align: 'left',
    disablePadding: false
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: false
  },
  {
    id: 'reason',
    align: 'left',
    disablePadding: false
  }
];

// ==============================|| APIARY TABLE - HEADER ||============================== //

function AttentionTableHead({ order, orderBy }) {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <FormattedMessage id={headCell.id} />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

AttentionTableHead.propTypes = {
  order: PropTypes.any,
  orderBy: PropTypes.string
};

// ==============================|| APIARY TABLE - HEALTH ||============================== //

const AttentionReason = ({ reason }) => {
  let icon;
  let title;

  switch (reason) {
    case 0:
      title = 'low-battery';
      icon = <ThunderboltOutlined />;
      break;
    case 1:
      title = 'poor-health';
      icon = <FrownOutlined />;
      break;
    case 2:
      title = 'gateway-offline';
      icon = <DisconnectOutlined />;
      break;
    default:
      title = 'unknown';
      icon = <QuestionOutlined />;
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="flex-start"
    >
      {icon}
      <Typography variant="body1" color="inherit">
        <FormattedMessage id={title} />
      </Typography>
    </Stack>
  );
};

// ==============================|| APIARY TABLE ||============================== //
const DEFAULT_PAGE = 0;
const DEFAULT_ROWS_PER_PAGE = 10;

export default function AttentionTable({ hives }) {
  const [order] = useState('asc');
  const [orderBy] = useState('id');
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(DEFAULT_PAGE);
  };

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table aria-labelledby="tableTitle">
          <AttentionTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(
              hives.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
              getComparator(order, orderBy)
            ).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  role="checkbox"
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  tabIndex={-1}
                  key={row.id}
                >
                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    align="left"
                  >
                    <NextLink
                      href={`/apiaries/${row.apiaryId}/hives/${row.id}`}
                      passHref
                      legacyBehavior
                      key={row.id}
                    >
                      <Link color="secondary">{row.id}</Link>
                    </NextLink>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">
                    <AttentionReason reason={row.reason} />
                  </TableCell>
                  <TableCell align="left">
                    <SeeHiveButton hiveId={row.id} apiaryId={row.apiaryId} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      {/* table pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
}
