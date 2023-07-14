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

import useApiary from 'hooks/useApiary';

// / ==============================|| Apiarios ||==============================

const Hives = () => {
  const router = useRouter();
  const { formatMessage } = useIntl();
  const { apiaryId } = router.query;
  const apiary = useApiary(apiaryId);

  console.log(router.query);
  console.log(apiary);

  return (
    <Page
      title={formatMessage(
        { id: 'apiary-hives' },
        { apiary: apiary?.data?.name }
      )}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainCard title="Colméias" content={false}>
            {apiary.data ? (
              <HiveTable hives={apiary.data.hives} apiaryId={apiaryId} />
            ) : null}
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
