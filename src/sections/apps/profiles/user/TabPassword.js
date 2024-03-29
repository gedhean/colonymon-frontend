import { useState } from 'react';

// third-party
import { FormattedMessage, useIntl } from 'react-intl';

// material-ui
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Stack,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';

import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';
import {
  isNumber,
  isLowercaseChar,
  isUppercaseChar,
  isSpecialChar,
  minLength
} from 'utils/password-validation';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// assets
import {
  CheckOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  LineOutlined
} from '@ant-design/icons';

// ==============================|| TAB - PASSWORD CHANGE ||============================== //
const PASSWORD_REGEX =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const TabPassword = () => {
  const { formatMessage } = useIntl();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
  };
  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <MainCard title={formatMessage({ id: 'reset-password' })}>
      <Formik
        initialValues={{
          old: '',
          password: '',
          confirm: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          old: Yup.string().required(
            formatMessage(
              { id: 'forms-is-required' },
              { field: formatMessage({ id: 'old-password' }) }
            )
          ),
          password: Yup.string()
            .required(
              formatMessage(
                { id: 'forms-is-required' },
                { field: formatMessage({ id: 'new-password' }) }
              )
            )
            .matches(
              PASSWORD_REGEX,
              formatMessage({ id: 'password-validation' })
            ),
          confirm: Yup.string()
            .required(
              formatMessage(
                { id: 'forms-is-required' },
                { field: formatMessage({ id: 'confirm-password' }) }
              )
            )
            .test(
              'confirm',
              formatMessage({ id: 'password-dont-match' }),
              (confirm, yup) => yup.parent.password === confirm
            )
        })}
        onSubmit={async (
          values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          try {
            dispatch(
              openSnackbar({
                open: true,
                message: formatMessage({ id: 'password-changed' }),
                variant: 'alert',
                alert: {
                  color: 'success'
                },
                close: false
              })
            );

            resetForm();
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
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
            <Grid container spacing={3}>
              <Grid item container spacing={3} xs={12} sm={6}>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="password-old">
                      <FormattedMessage id="old-password" />
                    </InputLabel>
                    <OutlinedInput
                      placeholder={formatMessage({ id: 'old-password' })}
                      id="password-old"
                      type={showOldPassword ? 'text' : 'password'}
                      value={values.old}
                      name="old"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowOldPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                            color="secondary"
                          >
                            {showOldPassword ? (
                              <EyeOutlined />
                            ) : (
                              <EyeInvisibleOutlined />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {touched.old && errors.old && (
                      <FormHelperText error id="password-old-helper">
                        {errors.old}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="password-password">
                      <FormattedMessage id="new-password" />
                    </InputLabel>
                    <OutlinedInput
                      placeholder={formatMessage({ id: 'new-password' })}
                      id="password-password"
                      type={showNewPassword ? 'text' : 'password'}
                      value={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowNewPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                            color="secondary"
                          >
                            {showNewPassword ? (
                              <EyeOutlined />
                            ) : (
                              <EyeInvisibleOutlined />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {touched.password && errors.password && (
                      <FormHelperText error id="password-password-helper">
                        {errors.password}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="password-confirm">
                      <FormattedMessage id="confirm-password" />
                    </InputLabel>
                    <OutlinedInput
                      placeholder={formatMessage({ id: 'confirm-password' })}
                      id="password-confirm"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={values.confirm}
                      name="confirm"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                            color="secondary"
                          >
                            {showConfirmPassword ? (
                              <EyeOutlined />
                            ) : (
                              <EyeInvisibleOutlined />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    {touched.confirm && errors.confirm && (
                      <FormHelperText error id="password-confirm-helper">
                        {errors.confirm}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ p: { xs: 0, sm: 2, md: 4, lg: 5 } }}>
                  <Typography variant="h5">
                    <FormattedMessage id="password-requirements" />
                  </Typography>
                  <List sx={{ p: 0, mt: 1 }}>
                    <ListItem divider>
                      <ListItemIcon
                        sx={{
                          color: minLength(values.password)
                            ? 'success.main'
                            : 'inherit'
                        }}
                      >
                        {minLength(values.password) ? (
                          <CheckOutlined />
                        ) : (
                          <LineOutlined />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={formatMessage({ id: "password-requirements-1" })} />
                    </ListItem>
                    <ListItem divider>
                      <ListItemIcon
                        sx={{
                          color: isLowercaseChar(values.password)
                            ? 'success.main'
                            : 'inherit'
                        }}
                      >
                        {isLowercaseChar(values.password) ? (
                          <CheckOutlined />
                        ) : (
                          <LineOutlined />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={formatMessage({ id: "password-requirements-2" })} />
                    </ListItem>
                    <ListItem divider>
                      <ListItemIcon
                        sx={{
                          color: isUppercaseChar(values.password)
                            ? 'success.main'
                            : 'inherit'
                        }}
                      >
                        {isUppercaseChar(values.password) ? (
                          <CheckOutlined />
                        ) : (
                          <LineOutlined />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={formatMessage({ id: "password-requirements-3" })} />
                    </ListItem>
                    <ListItem divider>
                      <ListItemIcon
                        sx={{
                          color: isNumber(values.password)
                            ? 'success.main'
                            : 'inherit'
                        }}
                      >
                        {isNumber(values.password) ? (
                          <CheckOutlined />
                        ) : (
                          <LineOutlined />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={formatMessage({ id: "password-requirements-4" })} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon
                        sx={{
                          color: isSpecialChar(values.password)
                            ? 'success.main'
                            : 'inherit'
                        }}
                      >
                        {isSpecialChar(values.password) ? (
                          <CheckOutlined />
                        ) : (
                          <LineOutlined />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={formatMessage({ id: "password-requirements-5" })}/>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Stack
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  spacing={2}
                >
                  <Button variant="outlined" color="secondary">
                    <FormattedMessage id="cancel" />
                  </Button>
                  <Button
                    disabled={isSubmitting || Object.keys(errors).length !== 0}
                    type="submit"
                    variant="contained"
                  >
                    <FormattedMessage id="save" />
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </MainCard>
  );
};

export default TabPassword;
