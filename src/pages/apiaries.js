// material-ui
import { Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';

// ==============================|| Apiarios ||============================== //

const Apiaries = () => (
  <Page title="Apiarios">
    <MainCard title="Apiários">
      <Typography variant="body2">
        Apiários
      </Typography>
    </MainCard>
  </Page>
);

Apiaries.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Apiaries;
