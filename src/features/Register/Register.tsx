import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './style'

//state type

type State = {
  firstname: string
  lastname: string
  email: string
  password: string
  gender: string
  DOB: Date
  language: string
};



const Register = () => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Register App" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              id="firstname"
              type="text"
              label="FirstName"
              placeholder="FirstName"
              margin="normal"
            />
            <TextField
              fullWidth
              id="lastname"
              type="text"
              label="LastName"
              placeholder="LastName"
              margin="normal"
            />
            <TextField
              fullWidth
              id="email"
              type="email"
              label="Email"
              placeholder="Email"
              margin="normal"
            />
            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              placeholder="Password"
              margin="normal"
            />
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem value={0}>Engligh</MenuItem>
                <MenuItem value={1}>Vietnamese</MenuItem>
              </Select>
            </FormControl>
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.loginBtn}
          >
            Register
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default Register;
