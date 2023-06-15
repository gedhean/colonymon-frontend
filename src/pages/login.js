import PropTypes from 'prop-types';

// third-party
import { FormattedMessage, useIntl } from 'react-intl';

// next
import NextLink from 'next/link';
import { getProviders, getCsrfToken } from 'next-auth/react';

// material-ui
import { Grid, Link, Stack, Typography } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import AuthWrapper from 'sections/auth/AuthWrapper';
import AuthLogin from 'sections/auth/auth-forms/AuthLogin';

export default function SignIn({ providers, csrfToken }) {
  const { formatMessage } = useIntl();
  return (
    <Page title={formatMessage({ id: 'login' })}>
      <AuthWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="baseline"
              sx={{ mb: { xs: -0.5, sm: 0.5 } }}
            >
              <Typography variant="h3">
                <FormattedMessage id="login" />
              </Typography>
              <NextLink href="/register" passHref legacyBehavior>
                <Link variant="body1" color="primary">
                  <FormattedMessage id="createaccount" />
                </Link>
              </NextLink>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <AuthLogin providers={providers} csrfToken={csrfToken} />
          </Grid>
        </Grid>
      </AuthWrapper>
    </Page>
  );
}

SignIn.propTypes = {
  providers: PropTypes.object,
  csrfToken: PropTypes.string
};

SignIn.getLayout = function getLayout(page) {
  return <Layout variant="auth">{page}</Layout>;
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  return {
    props: { providers, csrfToken }
  };
}
