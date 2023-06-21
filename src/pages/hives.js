// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import HiveTable from 'sections/hives/HiveTable';
import HiveLineChart from 'sections/hives/default/HiveLineChart';
import hivesData from 'data/hives';
// / ==============================|| Apiarios ||==============================

const Hives = () => (
  <Page title="Colméias">
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <MainCard title="Colméias" content={false}>
          <HiveTable />
        </MainCard>
        <HiveLineChart
          toolFormatter={'°C'}
          formatterLegendTextY={'Temperatura (C°)'}
          paletteGroup={'error'}
          minRange={0}
          maxRange={50}
          title={'Temperatura'}
          data={hivesData.hive1}
        />
        <HiveLineChart
          toolFormatter={'Kg'}
          formatterLegendTextY={'Peso (Kg)'}
          paletteGroup={'warning'}
          minRange={0}
          maxRange={50}
          title={'Peso (Kg)'}
          data={hivesData.hive2}
        />
        <HiveLineChart
          toolFormatter={'g/m³'}
          formatterLegendTextY={'Umidade (g/m³)'}
          paletteGroup={'info'}
          minRange={0}
          maxRange={50}
          title={'Umidade (g/m³)'}
          data={hivesData.hive3}
        />
      </Grid>
    </Grid>
  </Page>
);

Hives.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Hives;
