import React, { useState, useEffect, useCallback } from 'react';
import CsvDownloader from 'react-csv-downloader';

// material core
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  FormControl,
  InputAdornment,
  TextField,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Table from '@material-ui/core/Table';
import { TableBody } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// actions
import { fetchFoods } from 'actions/food.action'

// components
import PaginationBase from 'components/PaginationBase';

// hooks
import usePagination from 'hooks/usePagination';


import { Link } from 'react-router-dom'

// use theme
const useStyles = makeStyles((theme: Theme) => ({
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
}));

function Foods() {
  const classes = useStyles();
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [textSearch, setTextSearch] = useState("")
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState();
  const { page, perPage, onChangePage, onChangePerPage } = usePagination();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTextSearch(event.target.value)
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const fetchAllFood = useCallback(async () => {
    const res = await fetchFoods(page, perPage, textSearch);
    if(!res.ok) {
      setError(res.data);
      return;
    };
    setFoods(res.data);
  },[page, perPage, textSearch]) 

  useEffect(() => {
    fetchAllFood();
  }, [fetchAllFood])

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
      <br/><br/>
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
              {foods.length > 0 && foods.map((row: any) => (
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
              {error && (
                <TableRow>
                  <TableCell colSpan={6}>{error}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <PaginationBase totalPage={foods.length} pageIndex={page} perPage={perPage} changePage={onChangePage} changePerPage={onChangePerPage} />

        </TableContainer>
      </Paper>
      <CsvDownloader
        filename="FOODS_ONLINE"
        separator=";"
        wrapColumnChar="'"
        datas={foods}
        text="DOWNLOAD_FOODS" />
    </>
  );
}

export default Foods



