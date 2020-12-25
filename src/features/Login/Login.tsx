import React, { useState } from 'react'
import {
  Grid,
  TextField,
  Button,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'

import { asyncHandleLogin } from '../../store/auth/action'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import useStyles from './style'
import axios from 'axios'


interface ISignUpForm {
  email: string,
}


interface IFormStatus {
  message: string
  type: string
}

interface IFormStatusProps {
  [key: string]: IFormStatus
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: 'Signed up successfully.',
    type: 'success',
  },
  duplicate: {
    message: 'Email-id already exist. Please use different email-id.',
    type: 'error',
  },
  error: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
}
type EMAIL = {
  email: string
}
const Login: React.FunctionComponent = () => {
  const classes = useStyles()
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  })
  const dispatch = useDispatch()
  const history = useHistory()

  const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
    try {
      console.log("data ", data)
      const dataLogin = {
        email: "abc@gmail.com"
      }
      dispatch(asyncHandleLogin(dataLogin))
    } catch (error) {
      const response = error.response
      if (
        response.data === 'user already exist' &&
        response.status === 400
      ) {
        setFormStatus(formStatusProps.duplicate)
      } else {
        setFormStatus(formStatusProps.error)
      }
    } finally {
      setDisplayFormStatus(true)
    }
  }

  const onSubmit = (values: ISignUpForm) => {
    try {
      const dataLogin = {
        email: values.email
      }
      dispatch(asyncHandleLogin(dataLogin))
    } catch (error) {
      const response = error.response
      if (
        response.data === 'user already exist' &&
        response.status === 400
      ) {
        setFormStatus(formStatusProps.duplicate)
      } else {
        setFormStatus(formStatusProps.error)
      }
    } finally {
      setDisplayFormStatus(true)
    }
  }

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={(values: ISignUpForm) => {
          onSubmit(values)
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Enter valid email-id'),
        })}
      >
        {(props: FormikProps<ISignUpForm>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props
          return (
            <Form>
              <h1 className={classes.title}>Sign up</h1>
              <Grid
                container
                justify="space-around"
                direction="row"
              >
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.textField}
                >
                  <TextField
                    name="email"
                    id="email"
                    label="Email Login."
                    value={values.email}
                    type="text"
                    helperText={
                      errors.email && touched.email
                        ? errors.email
                        : 'Enter your email...'
                    }
                    error={
                      errors.email && touched.email
                        ? true
                        : false
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  xs={10}
                  className={classes.submitButton}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                  >
                    Submit
                                    </Button>
                  {displayFormStatus && (
                    <div className="formStatus">
                      {formStatus.type === 'error' ? (
                        <p
                          className={
                            classes.errorMessage
                          }
                        >
                          {formStatus.message}
                        </p>
                      ) : formStatus.type ===
                        'success' ? (
                            <p
                              className={
                                classes.successMessage
                              }
                            >
                              {formStatus.message}
                            </p>
                          ) : null}
                    </div>
                  )}
                </Grid>
              </Grid>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Login