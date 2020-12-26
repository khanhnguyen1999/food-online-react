import React, { useState } from 'react'
import {
  Grid,
  TextField,
  Button,
} from '@material-ui/core'


import { useToasts } from 'react-toast-notifications'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import useStyles from './style'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import randomstring from 'randomstring'

import { asyncHandleRegister } from '../../store/user/action'


interface ISignUpForm {
  email: string,
  firstname: string,
  lastname: string,
  gender: string,
  language: string,
  token: string
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
const Register: React.FunctionComponent = () => {
  const classes = useStyles()
  const { addToast } = useToasts()
  const history = useHistory()
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  })
  const dispatch = useDispatch()


  // useNotAuth()
  const onSubmit = async (values: ISignUpForm) => {

    try {
      const dataLogin = {
        email: values.email,
        firstname: values.firstname,
        lastname: values.lastname,
        gender: values.gender,
        language: values.language,
        token: values.token
      }
      const response: any = await dispatch(asyncHandleRegister(dataLogin))
      if (response.ok) {
        console.log("res ", response.ok)
        return history.push("/");
      }
      else {
        addToast(response.error, { appearance: 'error' })
      }
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
          firstname: '',
          lastname: '',
          gender: "male",
          language: "Vietnamese",
          token: randomstring.generate(30)
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
              <h1 className={classes.title}>Register</h1>
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
                    type="email"
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
                  className={classes.textField}
                >
                  <TextField
                    name="firstname"
                    id="firstname"
                    label="FirstName Login."
                    value={values.firstname}
                    type="firstname"
                    helperText={
                      errors.email && touched.email
                        ? errors.email
                        : 'Enter your firstName...'
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
                  className={classes.textField}
                >
                  <TextField
                    name="lastname"
                    id="lastname"
                    label="LastName Register."
                    value={values.lastname}
                    type="text"
                    helperText={
                      errors.email && touched.email
                        ? errors.email
                        : 'Enter your lastname...'
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
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="gender">Gender</InputLabel>
                  <Select
                    labelId="gender"
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className={classes.textField} fullWidth>
                  <InputLabel id="language">Language</InputLabel>
                  <Select
                    labelId="language"
                    id="language"
                    name="language"
                    value={values.language}
                    onChange={handleChange}
                  >
                    <MenuItem value="Vietnamese">Vietnamese</MenuItem>
                    <MenuItem value="English">English</MenuItem>
                  </Select>
                </FormControl>
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
              <Link to="/login">login here</Link>
            </Form>
          )
        }}
      </Formik>
    </div >
  )
}

export default Register