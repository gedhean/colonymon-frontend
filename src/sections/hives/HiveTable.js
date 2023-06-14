import PropTypes from "prop-types";
import { useState } from "react";

// next
import NextLink from "next/link";

// material-ui
import {
  Box,
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
  Typography,
} from "@mui/material";

// third-party
// import { NumericFormat } from 'react-number-format';

// project import
import Dot from "components/@extended/Dot";
import { fontWeight } from "../../../node_modules/@mui/system/index";

function createData(
  id,
  name,
  humidity,
  temperature,
  weight,
  health,
  status,
  update
) {
  return { id, name, temperature, humidity, weight, health, status, update };
}

const rows = [
  createData(84564564, "Flavor Been", 76, 27, 75, 0, 0),
  createData(98764564, "Jaucou", 76, 20, 78, 1, 1),
  createData(98756325, "Human Dubs", 74, 23, 79, 1, 1),
  createData(98652366, "Foncarow", 70, 31, 72, 2, 1),
  createData(13286564, "Psycobee", 70, 17, 55, 2, 0),
  createData(86739658, "Honey Favor", 30, 20, 70, 2, 2),
  createData(13256498, "Cowmay Foo", 50, 22, 50, 2, 1),
  createData(98753263, "Barzory", 60, 20, 20, 0, 2),
  createData(98753275, "Chevawsky", 22, 11, 33, 1, 1),
  createData(98753221, "Chairmen King", 50, 40, 20, 1, 0),
  createData(98753211, "Chairmen King", 50, 21, 23, 0, 1),
  createData(98753321, "Chairmen King", 30, 34, 23, 2, 1),
  createData(98253221, "Chairmen King", 35, 20, 20, 2, 1),
  createData(98423291, "Chairmen King", 15, 20, 20, 0, 0),
  createData(98234291, "Chairmen King", 25, 20, 29, 1, 0),
  createData(98356291, "Chairmen King", 53, 20, 25, 1, 1),
  createData(98345291, "Chairmen King", 31, 30, 31, 0, 1),
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
  return order === "desc"
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
    id: "id",
    align: "left",
    disablePadding: false,
    label: "Identificador",
  },
  {
    id: "name",
    align: "left",
    disablePadding: "normal",
    label: "Nome",
  },
  {
    id: "temperature",
    align: "left",
    disablePadding: false,
    label: "Temperatura (°C)",
  },
  {
    id: "humidity",
    align: "left",
    disablePadding: false,
    label: "Umidade (g/m³)",
  },
  {
    id: "weight",
    align: "left",
    disablePadding: false,
    label: "Peso (kg)",
  },
  {
    id: "health",
    align: "left",
    disablePadding: "normal",
    label: "Saúde",
  },
  {
    id: "status",
    align: "left",
    disablePadding: false,
    label: "Status do Getaway",
  },
  {
    id: "update",
    align: "left",
    disablePadding: false,
    label: "Última Atualização",
  },
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
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

HiveTableHead.propTypes = {
  order: PropTypes.any,
  orderBy: PropTypes.string,
};

// ==============================|| APIRAY TABLE - STATUS ||============================== //

const ApiaryStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = "error";
      title = "Offline";
      break;
    case 1:
      color = "success";
      title = "Online";
      break;

    default:
      color = "primary";
      title = "Descconhecido";
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

ApiaryStatus.propTypes = {
  status: PropTypes.number,
};

// ==============================|| APIARY TABLE - HEALTH ||============================== //
const HiveHealth = ({ health }) => {
  let color;
  let title;

  switch (health) {
    case 0:
      color = "error";
      title = "Muito Fraca";
      break;
    case 1:
      color = "warning";
      title = "Fraca";
      break;
    case 2:
      color = "success";
      title = "Forte";
      break;
    default:
      color = "secondary";
      title = "Estado Desconhecido";
  }

  return (
    <Stack useFlexGap direction="row" spacing={1} alignItems="center">
      <Chip
        sx={{ width: "100%", color: "secondary.dark", fontWeight: "medium" }}
        label={title}
        color={color}
      />
    </Stack>
  );
};

// ==============================|| HIVE TABLE - TEMPERATURE ||============================== //

const HiveTemperature = ({ temperature }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{temperature}</Typography>
    </Stack>
  );
};

// ==============================|| HIVE TABLE -  LAST UPDATE ||============================== //

const HiveLastUpdate = ({ update }) => {
  let date1 = new Date();
  const date2 = new Date(update);
  let formattedDate = new Date(update).toLocaleDateString();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <Stack direction="column" spacing={-3} alignItems="left">
      <Typography>{formattedDate}</Typography> <br />
      <Typography variant="caption" color="secondary.main">
        {diffDays} dias atrás.
      </Typography>
    </Stack>
  );
};

// ==============================|| HIVE TABLE - HUMIDITY ||============================== //

const HiveHumidity = ({ humidity }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{humidity}</Typography>
    </Stack>
  );
};

// ==============================|| HIVE TABLE - WEIGHT ||============================== //

const HiveWeight = ({ weight }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography>{weight}</Typography>
    </Stack>
  );
};

// ==============================|| APIARY TABLE ||============================== //
const DEFAULT_PAGE = 0;
const DEFAULT_ROWS_PER_PAGE = 10;

export default function HiveTable() {
  const [order] = useState("asc");
  const [orderBy] = useState("id");
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [rowsPerPage, setRowsPerPage] = useState(DEFAULT_ROWS_PER_PAGE);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(DEFAULT_PAGE);
  };

  console.log("rowsPerPage", rowsPerPage);
  console.log("page", page);

  return (
    <Box>
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
          position: "relative",
          display: "block",
          maxWidth: "100%",
          "& td, & th": { whiteSpace: "nowrap" },
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
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                    <HiveTemperature temperature={row.temperature} />
                  </TableCell>
                  <TableCell align="left">
                    <HiveHumidity humidity={row.humidity} />
                  </TableCell>
                  <TableCell align="left">
                    <HiveWeight weight={row.weight} />
                  </TableCell>
                  <TableCell align="left">
                    <HiveHealth health={row.health} />
                  </TableCell>
                  <TableCell align="left">
                    <ApiaryStatus status={row.status} />
                  </TableCell>
                  <TableCell align="left">
                    <HiveLastUpdate update={row.update} />
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
        labelDisplayedRows={({ from, to, count }) =>
          `${from}–${to} de ${count !== -1 ? count : `mais de ${to}`}`
        }
        labelRowsPerPage="Linhas por página:"
      />
    </Box>
  );
}
