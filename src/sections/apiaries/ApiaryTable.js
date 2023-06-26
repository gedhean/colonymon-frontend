import PropTypes from 'prop-types';
import { useState } from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

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

// third-party
// import { NumericFormat } from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';

// assets
import { EnvironmentOutlined } from '@ant-design/icons';

function createData(id, name, health, status) {
  return { id, name, health, status };
}

const rows = [
  createData(84564564, 'Flavor Been', 0, 2),
  createData(98764564, 'Jaucou', 0, 0),
  createData(98756325, 'Human Dubs', 2, 1),
  createData(98652366, 'Foncarow', 1, 1),
  createData(13286564, 'Psycobee', 100, 1),
  createData(86739658, 'Honey Favor', 1, 0),
  createData(13256498, 'Cowmay Foo', 1, 2),
  createData(98753263, 'Barzory', 2, 2),
  createData(98753275, 'Chevawsky', 2, 1),
  createData(98753221, 'Chairmen King', 5, 0),
  createData(98753211, 'Crawford', 5, 0),
  createData(98753321, 'Bernardo', 5, 0),
  createData(98253221, 'Flavio', 5, 0),
  createData(98423291, 'Chairmen King', 5, 0),
  createData(98234291, 'Chairmen King', 5, 0),
  createData(98356291, 'Chairmen King', 5, 0),
  createData(98345291, 'Chairmen King', 5, 0)
];

const locations = [
  'Fortaleza - CE',
  'Quixadá - CE',
  'Quixeramobim - CE',
  'São Paulo - SP'
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
    disablePadding: false,
    label: 'Identificador'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Nome'
  },
  {
    id: 'location',
    align: 'left',
    disablePadding: false,
    label: 'Localização'
  },
  {
    id: 'actions',
    align: 'left',
    disablePadding: false,
    label: 'Ações'
  }
];

// ==============================|| APIARY TABLE - HEADER ||============================== //

function ApiaryTableHead({ order, orderBy }) {
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
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

ApiaryTableHead.propTypes = {
  order: PropTypes.any,
  orderBy: PropTypes.string
};

// ==============================|| APIRAY TABLE - STATUS ||============================== //

const ApiaryStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'warning';
      title = 'Requer atenção';
      break;
    case 1:
      color = 'success';
      title = 'Bem-estar';
      break;
    case 2:
      color = 'error';
      title = 'Crítico';
      break;
    default:
      color = 'primary';
      title = 'Descconhecido';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

ApiaryStatus.propTypes = {
  status: PropTypes.number
};

// ==============================|| APIARY TABLE - HEALTH ||============================== //

const ApiaryHealth = ({ health }) => {
  let color;
  let title;

  switch (health) {
    case 0:
      color = 'error';
      title = 'Crítico';
      break;
    case 1:
      color = 'warning';
      title = 'Alerta';
      break;
    case 2:
      color = 'success';
      title = 'Bem-estar';
      break;
    default:
      color = 'secondary';
      title = 'Desconhecido';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Chip label={title} color={color} />
    </Stack>
  );
};

// ==============================|| APIARY TABLE ||============================== //
const DEFAULT_PAGE = 0;
const DEFAULT_ROWS_PER_PAGE = 10;

export default function ApiaryTable() {
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
          <ApiaryTableHead order={order} orderBy={orderBy} />
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
                    <Typography variant="body" color="secondary">
                      {locations[Math.floor(Math.random() * locations.length)]}{' '}
                      <EnvironmentOutlined />
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <NextLink href="/apiaries/hives" passHref legacyBehavior>
                      <Button color="info" variant="outlined" size="small">
                        <FormattedMessage id="view-hives" />
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
