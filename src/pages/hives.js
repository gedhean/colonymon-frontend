// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ApiaryTable from 'sections/hives/HiveTable';
// import HiveLineChart from 'sections/hives/default/HiveLineChart';
// import Mock from './mocks';

// / ==============================|| Apiarios ||==============================

const Hives = () => (
  <Page title="Colméias">
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="Colméias" content={false}>
          <ApiaryTable />
        </MainCard>
        {/* <HiveLineChart
          toolFormatter={'°C'}
          formatterLegendTextY={'Temperatura (C°)'}
          paletteGroup={'error'}
          color={'main'}
          minRange={0}
          maxRange={50}
          title={'Temperatura'}
          data={Mock.apiary1}
        />
        <HiveLineChart
          toolFormatter={'Kg'}
          formatterLegendTextY={'Peso (Kg)'}
          paletteGroup={'warning'}
          color={'main'}
          minRange={0}
          maxRange={50}
          title={'Peso (Kg)'}
          data={Mock.apiary2}
        />
        <HiveLineChart
          toolFormatter={' g/m³'}
          formatterLegendTextY={'Umidade (g/m³)'}
          paletteGroup={'info'}
          color={'main'}
          minRange={0}
          maxRange={50}
          title={'Umidade (g/m³)'}
          data={Mock.apiary3}
        /> */}
      </Grid>
    </Grid>
  </Page>
);

Hives.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Hives;
