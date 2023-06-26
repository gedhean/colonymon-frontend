// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ReportCard from 'components/cards/statistics/ReportCard';
import HiveLineChart from 'sections/hives/default/HiveLineChart';
import WeatherLineChart from 'sections/dashboard/default/WeatherLineChart';
import hivesData from 'data/hives';

// assets
import WeightIcon from 'components/icons/WeightIcon';
import HumidityIcon from 'components/icons/HumidityIcon';
import ThermometerIcon from 'components/icons/ThermometerIcon';

// ==============================|| SAMPLE PAGE ||============================== //

const HiveChartsPage = () => {
  const theme = useTheme();

  return (
    <Page title="Gráficos">
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} lg={4} sm={6}>
          <ReportCard
            primary="35 C°"
            secondary="Temperatura"
            color={theme.palette.error.main}
            iconPrimary={ThermometerIcon}
          />
        </Grid>
        <Grid item xs={12} lg={4} sm={6}>
          <ReportCard
            primary="50%"
            secondary="Umidade"
            color={theme.palette.info.main}
            iconPrimary={HumidityIcon}
          />
        </Grid>
        <Grid item xs={12} lg={4} sm={6}>
          <ReportCard
            primary="50 Kg"
            secondary="Peso"
            color={theme.palette.success.dark}
            iconPrimary={WeightIcon}
          />
        </Grid>
        <Grid item xs={12}>
          <HiveLineChart
            toolFormatter={'°C'}
            formatterLegendTextY={'Temperatura (C°)'}
            paletteGroup={'error'}
            minRange={0}
            maxRange={50}
            title={'Temperatura'}
            data={hivesData.hive1}
          />
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <HiveLineChart
            toolFormatter={'Kg'}
            formatterLegendTextY={'Peso (Kg)'}
            paletteGroup={'success'}
            minRange={0}
            maxRange={50}
            title={'Peso (Kg)'}
            data={hivesData.hive2}
          />
        </Grid>
        <Grid item xs={12}>
          <MainCard sx={{ mt: 2 }} content={false}>
            <WeatherLineChart />
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
};

HiveChartsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HiveChartsPage;
