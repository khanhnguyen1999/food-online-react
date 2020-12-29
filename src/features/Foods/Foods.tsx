import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { TableBody, TableFooter } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSelector } from 'react-redux'
import { listfoodSelector } from '../../selectors/food.selector'

import { TablePagination } from '@material-ui/core';
import TablePaginationActions from './TablePaginationActions'

// import { CSVLink } from "react-csv";
import CsvDownloader from 'react-csv-downloader';

import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


import { Link } from 'react-router-dom'


// const useStyles2 = makeStyles(theme => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(3)
//   },
//   table: {
//     minWidth: 500
//   },
//   tableWrapper: {
//     overflowX: "auto"
//   }
// }));


function Foods() {
  // use theme
  const theme = useTheme()
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    search: {
      margin: "0"
    },
    root: {
      width: "100%",
      marginTop: theme.spacing(3)
    },
    tableWrapper: {
      overflowX: "auto"
    }
  });


  // const classes = useStyles();
  const rows: any = useSelector(listfoodSelector)

  // filter search data
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [searchData, setSearchData] = useState("")
  const [filter, setFilter] = useState([])
  const [data, setData] = useState([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchData(event.target.value)
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  useEffect(() => {
    const fk_data = rows && rows.sort((a: any, b: any) => a.id < b.id ? -1 : 1)
    setData(fk_data)
  }, [rows, filter])

  useEffect(() => {
    setFilter(rows)
    const dataFilter: any = filter.filter((item: any) => {
      return item.name.toLowerCase().includes(searchData.toLowerCase());
    })
    setData(dataFilter)
  }, [searchData])

  // export csv
  const headers: any = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" }
  ];
  const csvReport: any = {
    headers: headers,
    data: rows && rows,
    filename: 'FoodOnline.csv'
  };

  // pagination table 

  const defaultRowsPerPageOption = 5
  const rowsPerPageOptions = [5, 10, 15]
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    defaultRowsPerPageOption || rowsPerPageOptions[0]
  );

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  function handleChangePage(event: any, newPage: number) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event: any) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  return (
    <>
      <FormControl className={classes.search}>
        <TextField
          size="small"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
              />
            )
          }}
        />
      </FormControl>
      <Paper>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Foods Online</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell align="left">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.price}&nbsp;$</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">
                      <Button type="button">
                        <Link to={`/foodsdetail/${row.id}`}>
                          View Detail
                    </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={rowsPerPageOptions}
                  colSpan={3}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    value: rowsPerPage
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
      <CsvDownloader
        filename="FOODS_ONLINE"
        separator=";"
        wrapColumnChar="'"
        datas={rows && rows}
        text="DOWNLOAD_FOODS" />
    </>
  );
}

export default Foods



