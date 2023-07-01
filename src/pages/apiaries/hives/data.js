// third-party
import { FormattedMessage, useIntl } from 'react-intl';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ReportCard from 'components/cards/statistics/ReportCard';
import HiveLineChart from 'sections/hives/HiveLineChart';
import WeatherLineChart from 'sections/dashboard/default/WeatherLineChart';
import HiveBatteryLevel from 'sections/hives/HiveBatteryLevel';
import HiveWellbeing from 'sections/hives/HiveWellbeing';
import hivesData from 'data/hives';

// assets
import Co2Icon from 'components/icons/Co2Icon';
import WeightIcon from 'components/icons/WeightIcon';
import HumidityIcon from 'components/icons/HumidityIcon';
import ThermometerIcon from 'components/icons/ThermometerIcon';

// ==============================|| SAMPLE PAGE ||============================== //

const HiveChartsPage = () => {
  const theme = useTheme();
  const { formatMessage } = useIntl();

  return (
    <Page title="Gráficos">
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Stack direction="row" spacing={1}>
              <Typography variant="headline">
                <FormattedMessage id="wellbeing" />
              </Typography>
              :
              <HiveWellbeing status={0} />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="headline">
                <FormattedMessage id="battery-level" />
              </Typography>
              :
              <HiveBatteryLevel level={100} />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center"></Stack>
        </Grid>
        {/* Row 1 */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ReportCard
            primary="50 Kg"
            secondary={formatMessage({ id: 'weight' })}
            color={theme.palette.success.dark}
            iconPrimary={WeightIcon}
            percentage={10}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ReportCard
            primary="35 C°"
            secondary={formatMessage({ id: 'temperature' })}
            color={theme.palette.error.main}
            iconPrimary={ThermometerIcon}
            percentage={5}
            isLoss
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ReportCard
            primary="50%"
            secondary={formatMessage({ id: 'humidity' })}
            color={theme.palette.info.main}
            iconPrimary={HumidityIcon}
            percentage={25}
            isLoss
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <ReportCard
            primary="50 PPM"
            secondary={formatMessage({ id: 'carbon-dioxide' })}
            color={theme.palette.warning.main}
            iconPrimary={Co2Icon}
            percentage={50}
          />
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12}>
          <HiveLineChart
            title={formatMessage({ id: 'weight' })}
            toolFormatter={'Kg'}
            formatterLegendTextY={formatMessage({ id: 'weight' })}
            paletteGroup={'success'}
            minRange={0}
            maxRange={50}
            data={hivesData.hive3}
          />
        </Grid>
        <Grid item xs={12}>
          <HiveLineChart
            title={formatMessage({ id: 'temperature' })}
            toolFormatter={'°C'}
            formatterLegendTextY={formatMessage({ id: 'temperature' })}
            paletteGroup={'error'}
            minRange={0}
            maxRange={50}
            data={hivesData.hive1}
          />
        </Grid>
        <Grid item xs={12}>
          <HiveLineChart
            title={formatMessage({ id: 'humidity' })}
            toolFormatter={'g/m³'}
            formatterLegendTextY={formatMessage({ id: 'humidity' })}
            paletteGroup={'info'}
            minRange={0}
            maxRange={50}
            data={hivesData.hive2}
          />
        </Grid>
        <Grid item xs={12}>
          <HiveLineChart
            title={formatMessage({ id: 'carbon-dioxide' })}
            toolFormatter={'PPM'}
            formatterLegendTextY={formatMessage({ id: 'carbon-dioxide' })}
            paletteGroup={'warning'}
            minRange={0}
            maxRange={50}
            data={hivesData.hive1}
          />
        </Grid>
        <Grid item xs={12}>
          <HiveLineChart
            title={formatMessage({ id: 'vibration' })}
            toolFormatter={''}
            formatterLegendTextY={formatMessage({ id: 'vibration' })}
            paletteGroup={'primary'}
            minRange={0}
            maxRange={1}
            data={hivesData.hive4}
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
