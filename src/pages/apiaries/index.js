// material-ui
import { Grid } from '@mui/material';

// third-party
import { useIntl } from 'react-intl';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ApiaryTable from 'sections/apiaries/ApiaryTable';

import useApiaries from 'hooks/useApiaries';

// ==============================|| Apiarios ||============================== //

const Apiaries = () => {
  const { formatMessage } = useIntl();
  const apiaries = useApiaries();

  return (
    <Page title={formatMessage({ id: 'apiaries' })}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainCard title="Apiários" content={false}>
            <ApiaryTable apiaries={apiaries.data} />
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
};

Apiaries.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Apiaries;
