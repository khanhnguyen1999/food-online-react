import React from 'react';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import useStyles from './style'

const Login = () => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Card className={classes.card}>
        <CardHeader className={classes.header} title="Login App" />
        <CardContent>
          <div>
            <TextField
              fullWidth
              id="username"
              type="email"
              label="Username"
              placeholder="Username"
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
          </div>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.loginBtn}
            onClick={() => localStorage.setItem('token', 'eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDdasdsaadaHJ1ZX0')}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default Login;
