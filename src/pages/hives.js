// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import HiveTable from 'sections/hives/HiveTable';
// / ==============================|| Apiarios ||==============================

const Hives = () => (
  <Page title="Colméias">
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="Colméias" content={false}>
          <HiveTable />
        </MainCard>
      </Grid>
    </Grid>
  </Page>
);

Hives.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Hives;
