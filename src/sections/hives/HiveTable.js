import PropTypes from 'prop-types';
import { useState } from 'react';

// third-party
import { FormattedMessage, useIntl } from 'react-intl';

// next
import NextLink from 'next/link';

// material-ui
import {
  Box,
  Button,
  Chip,
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
import { useTheme } from '@mui/material/styles';

// third-party
// import { NumericFormat } from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';

// assets
import { ThunderboltTwoTone } from '@ant-design/icons';

function createData(id, name, health, battery, update) {
  return { id, name, health, battery, update };
}

const rows = [
  createData(84564564, 'Flavor Been', 0, 0),
  createData(98764564, 'Jaucou', 1, 5),
  createData(98760564, 'Jaucolu', 1, 100),
  createData(98756325, 'Human Dubs', 1, 50),
  createData(98652366, 'Foncarow', 2, 100),
  createData(13286564, 'Psycobee', 2, 20),
  createData(86739658, 'Honey Favor', 2, 25),
  createData(98753263, 'Barzory', 0, 70),
  createData(98753275, 'Chevawsky', 1, 90),
  createData(98753221, 'Chairmen King', 1, 60),
  createData(98753211, 'Chairmen King', 0, 69),
  createData(98753321, 'Chairmen King', 2, 100),
  createData(98423291, 'Chairmen King', 0, 0),
  createData(98234291, 'Chairmen King', 1, 0),
  createData(98356291, 'Chairmen King', 1, 5),
  createData(98345291, 'Chairmen King', 0, 1)
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
    disablePadding: 'normal'
  },
  {
    id: 'wellbeing',
    align: 'left',
    disablePadding: 'normal'
  },
  {
    id: 'battery-level',
    align: 'left',
    disablePadding: false
  },
  {
    id: 'actions',
    align: 'left',
    disablePadding: false
  }
];

// ==============================|| APIARY TABLE - HEADER ||============================== //

function HiveTableHead({ order, orderBy }) {
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

HiveTableHead.propTypes = {
  order: PropTypes.any,
  orderBy: PropTypes.string
};

// ==============================|| APIRAY TABLE - STATUS ||============================== //

const BatteryLevel = ({ level }) => {
  const theme = useTheme();
  let color;
  let title;

  if (level <= 20) {
    color = theme.palette.error.main;
    title = 'low';
  } else if (level <= 50) {
    color = theme.palette.warning.main;
    title = 'medium';
  } else if (level <= 100) {
    color = theme.palette.success.main;
    title = 'high';
  } else {
    color = theme.palette.secondary.main;
    title = 'unknown';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <ThunderboltTwoTone twoToneColor={color} />
      <Typography>
        {level}% (<FormattedMessage id={title} />)
      </Typography>
    </Stack>
  );
};

BatteryLevel.propTypes = {
  level: PropTypes.number
};

// ==============================|| APIARY TABLE - HEALTH ||============================== //
const HiveHealth = ({ health }) => {
  let color;
  let title;

  switch (health) {
    case 0:
      color = 'error';
      title = 'Muito Fraca';
      break;
    case 1:
      color = 'warning';
      title = 'Fraca';
      break;
    case 2:
      color = 'success';
      title = 'Forte';
      break;
    default:
      color = 'secondary';
      title = 'Estado Desconhecido';
  }

  return (
    <Stack useFlexGap direction="row" spacing={1} alignItems="center">
      <Chip label={title} color={color} />
    </Stack>
  );
};

// ==============================|| APIARY TABLE ||============================== //
const DEFAULT_PAGE = 0;
const DEFAULT_ROWS_PER_PAGE = 10;

export default function HiveTable() {
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
          <HiveTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(
              rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
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
                    <NextLink href="/" passHref legacyBehavior>
                      <Link color="secondary">{row.id}</Link>
                    </NextLink>
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">
                    <HiveHealth health={row.health} />
                  </TableCell>
                  <TableCell align="left">
                    <BatteryLevel level={row.battery} />
                  </TableCell>
                  <TableCell align="left">
                    <NextLink
                      href="/apiaries/hives/data"
                      passHref
                      legacyBehavior
                    >
                      <Button color="info" variant="outlined" size="small">
                        <FormattedMessage id="view-hives-data" />
                      </Button>
                    </NextLink>
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
