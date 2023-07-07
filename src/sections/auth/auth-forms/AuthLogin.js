import PropTypes from 'prop-types';
import React from 'react';

// third-party
import { FormattedMessage, useIntl } from 'react-intl';

// next
import NextLink from 'next/link';
import { useSession, signIn } from 'next-auth/react';

// material-ui

import {
  useMediaQuery,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import { APP_DEFAULT_PATH } from 'config';
import IconButton from 'components/@extended/IconButton';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const Auth0 = '/assets/images/icons/auth0.svg';
const Cognito = '/assets/images/icons/aws-cognito.svg';
const Google = '/assets/images/icons/google.svg';

// ============================|| AWS CONNITO - LOGIN ||============================ //

const AuthLogin = ({ providers, csrfToken }) => {
  const { formatMessage } = useIntl();
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [checked, setChecked] = React.useState(false);
  const [capsWarning, setCapsWarning] = React.useState(false);

  const { data: session } = useSession();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onKeyDown = (keyEvent) => {
    if (keyEvent.getModifierState('CapsLock')) {
      setCapsWarning(true);
    } else {
      setCapsWarning(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: 'colonymon@gmail.com',
          password: '123456',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email(formatMessage({ id: 'invalid-email' }))
            .max(255)
            .required(
              formatMessage(
                { id: 'forms-is-required' },
                { field: formatMessage({ id: 'email' }) }
              )
            ),
          password: Yup.string()
            .max(255)
            .required(
              formatMessage(
                { id: 'forms-is-required' },
                { field: formatMessage({ id: 'password' }) }
              )
            )
        })}
        onSubmit={(values, { setErrors, setSubmitting }) => {
          signIn('login', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: APP_DEFAULT_PATH
          }).then((res) => {
            if (res?.error) {
              setErrors({ submit: res.error });
              setSubmitting(false);
            } else {
              setSubmitting(false);
            }
          });
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">
                    <FormattedMessage id="email" />
                  </InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder={formatMessage(
                      { id: 'forms-enter' },
                      { field: formatMessage({ id: 'email' }) }
                    )}
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-email-login"
                    >
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">
                    <FormattedMessage id="password" />
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    color={capsWarning ? 'warning' : 'primary'}
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={(event) => {
                      setCapsWarning(false);
                      handleBlur(event);
                    }}
                    onKeyDown={onKeyDown}
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="secondary"
                        >
                          {showPassword ? (
                            <EyeOutlined />
                          ) : (
                            <EyeInvisibleOutlined />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder={formatMessage(
                      { id: 'forms-enter' },
                      { field: formatMessage({ id: 'password' }) }
                    )}
                  />
                  {capsWarning && (
                    <Typography
                      variant="caption"
                      sx={{ color: 'warning.main' }}
                      id="warning-helper-text-password-login"
                    >
                      Caps lock on!
                    </Typography>
                  )}
                  {touched.password && errors.password && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => setChecked(event.target.checked)}
                        name="checked"
                        color="primary"
                        size="small"
                      />
                    }
                    label={
                      <Typography variant="h6">
                        <FormattedMessage id="remember-me" />
                      </Typography>
                    }
                  />
                  <NextLink
                    href={
                      session ? '/auth/forgot-password' : '/forgot-password'
                    }
                    passHref
                    legacyBehavior
                  >
                    <Link variant="h6" color="text.primary">
                      <FormattedMessage id="forgot-password" />
                    </Link>
                  </NextLink>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    <FormattedMessage id="login" />
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

AuthLogin.propTypes = {
  providers: PropTypes.object,
  csrfToken: PropTypes.string
};

export default AuthLogin;
