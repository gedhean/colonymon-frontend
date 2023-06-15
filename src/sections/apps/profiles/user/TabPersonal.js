import { useRef } from 'react';

// next
// import Image from 'next/legacy/image';

// material-ui
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { FormattedMessage, useIntl } from 'react-intl';

// project import
import MainCard from 'components/MainCard';

import { dispatch } from 'store';
import { openSnackbar } from 'store/reducers/snackbar';

// assets
// import { CloseOutlined } from '@ant-design/icons';

// styles & constant
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    }
  }
};

// ==============================|| TAB - PERSONAL ||============================== //

const TabPersonal = () => {
  const { formatMessage } = useIntl();
  const handleChangeDay = (event, date, setFieldValue) => {
    setFieldValue(
      'dob',
      new Date(date.setDate(parseInt(event.target.value, 10)))
    );
  };

  const handleChangeMonth = (event, date, setFieldValue) => {
    setFieldValue(
      'dob',
      new Date(date.setMonth(parseInt(event.target.value, 10)))
    );
  };

  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);

  const inputRef = useRef();

  return (
    <MainCard
      content={false}
      title={formatMessage({ id: 'personal-info' })}
      sx={{ '& .MuiInputLabel-root': { fontSize: '0.875rem' } }}
    >
      <Formik
        initialValues={{
          firstname: 'Stebin',
          lastname: 'Ben',
          email: 'stebin.ben@gmail.com',
          dob: new Date('03-10-1993'),
          accountType: 'credential',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string()
            .max(255)
            .required(
              formatMessage(
                { id: 'forms-is-required' },
                { field: formatMessage({ id: 'first-name' }) }
              )
            ),
          lastname: Yup.string()
            .max(255)
            .required(
              formatMessage(
                { id: 'forms-is-required' },
                { field: formatMessage({ id: 'last-name' }) }
              )
            ),
          email: Yup.string()
            .email(formatMessage({ id: 'invalid-email' }))
            .max(255)
            .required(
              formatMessage(
                { id: 'forms-is-required' },
                { field: formatMessage({ id: 'email' }) }
              )
            ),
          dob: Yup.date().required(
            formatMessage(
              { id: 'forms-is-required' },
              { field: formatMessage({ id: 'dob' }) }
            )
          ),
          accountType: Yup.string()
            .required(
              formatMessage(
                { id: 'forms-is-required' },
                { field: formatMessage({ id: 'account-type' }) }
              )
            )
            .oneOf(['credential', 'social'])
        })}
        onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
          try {
            dispatch(
              openSnackbar({
                open: true,
                message: formatMessage({ id: 'personal-info-success' }),
                variant: 'alert',
                alert: {
                  color: 'success'
                },
                close: false
              })
            );
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
          setFieldValue,
          touched,
          values
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Box sx={{ p: 2.5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-first-name">
                      <FormattedMessage id="first-name" />
                    </InputLabel>
                    <TextField
                      fullWidth
                      id="personal-first-name"
                      value={values.firstname}
                      name="firstname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder={formatMessage({ id: 'first-name' })}
                      autoFocus
                      inputRef={inputRef}
                    />
                    {touched.firstname && errors.firstname && (
                      <FormHelperText error id="personal-first-name-helper">
                        {errors.firstname}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-last-name">
                      <FormattedMessage id="last-name" />
                    </InputLabel>
                    <TextField
                      fullWidth
                      id="personal-last-name"
                      value={values.lastname}
                      name="lastname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder={formatMessage({ id: 'last-name' })}
                    />
                    {touched.lastname && errors.lastname && (
                      <FormHelperText error id="personal-last-name-helper">
                        {errors.lastname}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-email">
                      <FormattedMessage id="email" />
                    </InputLabel>
                    <TextField
                      type="email"
                      fullWidth
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      id="personal-email"
                      placeholder={formatMessage({ id: 'email' })}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error id="personal-email-helper">
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-date">
                      <FormattedMessage id="dob" />
                    </InputLabel>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <Select
                        fullWidth
                        value={values.dob.getMonth().toString()}
                        name="dob-month"
                        onChange={(e) =>
                          handleChangeMonth(e, values.dob, setFieldValue)
                        }
                      >
                        <MenuItem value="0">
                          <FormattedMessage id="january" />
                        </MenuItem>
                        <MenuItem value="1">
                          <FormattedMessage id="february" />
                        </MenuItem>
                        <MenuItem value="2">
                          <FormattedMessage id="march" />
                        </MenuItem>
                        <MenuItem value="3">
                          <FormattedMessage id="april" />
                        </MenuItem>
                        <MenuItem value="4">
                          <FormattedMessage id="may" />
                        </MenuItem>
                        <MenuItem value="5">
                          <FormattedMessage id="june" />
                        </MenuItem>
                        <MenuItem value="6">
                          <FormattedMessage id="july" />
                        </MenuItem>
                        <MenuItem value="7">
                          <FormattedMessage id="august" />
                        </MenuItem>
                        <MenuItem value="8">
                          <FormattedMessage id="september" />
                        </MenuItem>
                        <MenuItem value="9">
                          <FormattedMessage id="october" />
                        </MenuItem>
                        <MenuItem value="10">
                          <FormattedMessage id="november" />
                        </MenuItem>
                        <MenuItem value="11">
                          <FormattedMessage id="december" />
                        </MenuItem>
                      </Select>
                      <Select
                        fullWidth
                        value={values.dob.getDate().toString()}
                        name="dob-date"
                        onBlur={handleBlur}
                        onChange={(e) =>
                          handleChangeDay(e, values.dob, setFieldValue)
                        }
                        MenuProps={MenuProps}
                      >
                        {[
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                          17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
                          30, 31
                        ].map((i) => (
                          <MenuItem
                            key={i}
                            value={i}
                            disabled={
                              (values.dob.getMonth() === 1 &&
                                i >
                                  (values.dob.getFullYear() % 4 === 0
                                    ? 29
                                    : 28)) ||
                              (values.dob.getMonth() % 2 !== 0 &&
                                values.dob.getMonth() < 7 &&
                                i > 30) ||
                              (values.dob.getMonth() % 2 === 0 &&
                                values.dob.getMonth() > 7 &&
                                i > 30)
                            }
                          >
                            {i}
                          </MenuItem>
                        ))}
                      </Select>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          sx={{ width: 1 }}
                          views={['year']}
                          value={values.dob}
                          maxDate={maxDate}
                          onChange={(newValue) => {
                            setFieldValue('dob', newValue);
                          }}
                        />
                      </LocalizationProvider>
                    </Stack>
                    {touched.dob && errors.dob && (
                      <FormHelperText error id="personal-dob-helper">
                        {errors.dob}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack spacing={1.25}>
                    <InputLabel htmlFor="personal-account-type">
                      <FormattedMessage id="account-type" />
                    </InputLabel>
                    <TextField
                      disabled
                      fullWidth
                      value={
                        values.accountType === 'credential'
                          ? formatMessage({ id: 'credentials' })
                          : formatMessage({ id: 'social' })
                      }
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Box sx={{ p: 2.5 }}>
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
            </Box>
          </form>
        )}
      </Formik>
    </MainCard>
  );
};

export default TabPersonal;
