import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import { TableBody, TableFooter } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSelector } from 'react-redux'
import { listfoodSelector } from '../../selectors/food.selector'

import { TablePagination } from '@material-ui/core';

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


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  search: {
    margin: "0"
  }
});



function Foods() {
  const classes = useStyles();
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
    setData(rows)
  }, [rows, filter])

  useEffect(() => {
    setFilter(rows)
    const dataFilter: any = filter.filter((item: any) => {
      return item.name.toLowerCase().includes(searchData.toLowerCase());
    })
    setData(dataFilter)
  }, [searchData])

  console.log("data ", rows)

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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: any, newPage: any) => {
    console.log("data ", data)
    console.log(newPage)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    console.log("event ", event.target.value)
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


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
                  <TableRow key={row.name}>
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
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={rows && rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
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
