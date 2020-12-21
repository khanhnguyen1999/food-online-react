import React from 'react';

// redux 
import { useDispatch } from 'react-redux'
import { asyncHandleLogin } from 'store/auth/action'

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import useStyles from './style'


const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch()

  const _handleOnClick = () => {
    dispatch(asyncHandleLogin())
  }

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
              label="Email"
              placeholder="Email..."
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
            onClick={() => _handleOnClick()}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}

export default Login;
