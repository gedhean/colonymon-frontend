// material-ui
import { Grid } from '@mui/material';

// nextjs
import { useRouter } from 'next/router';

// third-party
import { useIntl } from 'react-intl';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import HiveTable from 'sections/hives/HiveTable';

// / ==============================|| Apiarios ||==============================

const Hives = () => {
  const router = useRouter();
  const { formatMessage } = useIntl();

  console.log(router.query);

  return (
    <Page
      title={formatMessage(
        { id: 'apiary-hives' },
        { apiary: router.query.apiaryId }
      )}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainCard title="Colméias" content={false}>
            <HiveTable />
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
};

Hives.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Hives;
