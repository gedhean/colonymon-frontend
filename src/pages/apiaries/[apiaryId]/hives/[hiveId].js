import { useEffect, useRef } from 'react';

// third-party
import { FormattedMessage, useIntl } from 'react-intl';
import sub from 'date-fns/sub';

// nextjs
import { useRouter } from 'next/router';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import ReportCard from 'components/cards/statistics/ReportCard';
import HiveLineChart from 'sections/hives/HiveLineChart';
import WeatherLineChart from 'sections/dashboard/WeatherLineChart';
import HiveBatteryLevel from 'sections/hives/HiveBatteryLevel';
import HiveWellbeing from 'sections/hives/HiveWellbeing';

// assets
import Co2Icon from 'components/icons/Co2Icon';
import WeightIcon from 'components/icons/WeightIcon';
import HumidityIcon from 'components/icons/HumidityIcon';
import ThermometerIcon from 'components/icons/ThermometerIcon';
import useHive from 'hooks/useHive';

// ==============================|| SAMPLE PAGE ||============================== //

const HiveChartsPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const { formatMessage } = useIntl();

  const { data: hive } = useHive(router.query.apiaryId, router.query.hiveId);

  console.log(router.query);
  console.log(hive);

  const weightChartRef = useRef(null);
  const temperatureChartRef = useRef(null);
  const humidityChartRef = useRef(null);
  const carbonDioxideChartRef = useRef(null);
  const vibrationChartRef = useRef(null);

  const handleCardClick = (chartRef) => {
    chartRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const lastSample = hive?.samples?.[hive?.samples?.length - 1];

  const getSampleData = (samples, key) => {
    const now = new Date();
    return (
      samples?.map((sample, index) => {
        return {
          x: sub(now, {
            hours: samples.length - index + 2
          }).getTime(),
          y: sample[key]
        };
      }) ?? []
    );
  };

  return (
    <Page
      title={formatMessage(
        { id: 'apiary-hives-details' },
        { apiary: hive?.apiaryName, hive: hive?.name }
      )}
    >
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
              <HiveWellbeing status={hive.health ?? 10} />
            </Stack>
            <Stack direction="row" spacing={1}>
              <Typography variant="headline">
                <FormattedMessage id="battery-level" />
              </Typography>
              :
              <HiveBatteryLevel level={hive.battery} />
            </Stack>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center"></Stack>
        </Grid>
        {/* Row 1 */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          onClick={() => handleCardClick(weightChartRef)}
          sx={{ cursor: 'pointer' }}
        >
          <ReportCard
            primary={`${lastSample?.weight?.toFixed(0)} Kg`}
            secondary={formatMessage({ id: 'weight' })}
            color={theme.palette.success.dark}
            iconPrimary={WeightIcon}
            percentage={10}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          onClick={() => handleCardClick(temperatureChartRef)}
          sx={{ cursor: 'pointer' }}
        >
          <ReportCard
            primary={`${lastSample?.temperature?.toFixed(0)} C°`}
            secondary={formatMessage({ id: 'temperature' })}
            color={theme.palette.error.main}
            iconPrimary={ThermometerIcon}
            percentage={5}
            isLoss
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          onClick={() => handleCardClick(humidityChartRef)}
          sx={{ cursor: 'pointer' }}
        >
          <ReportCard
            primary={`${lastSample?.umidity?.toFixed(0)} %`}
            secondary={formatMessage({ id: 'humidity' })}
            color={theme.palette.info.main}
            iconPrimary={HumidityIcon}
            percentage={25}
            isLoss
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          onClick={() => handleCardClick(carbonDioxideChartRef)}
          sx={{ cursor: 'pointer' }}
        >
          <ReportCard
            primary={`${lastSample?.co2?.toFixed(0)} PPM`}
            secondary={formatMessage({ id: 'carbon-dioxide' })}
            color={theme.palette.warning.main}
            iconPrimary={Co2Icon}
            percentage={50}
          />
        </Grid>

        {/* Row 2 */}
        <Grid item xs={12} ref={weightChartRef}>
          <HiveLineChart
            title={formatMessage({ id: 'weight' })}
            toolFormatter={'Kg'}
            formatterLegendTextY={formatMessage({ id: 'weight' })}
            paletteGroup={'success'}
            minRange={0}
            maxRange={50}
            data={getSampleData(hive.samples, 'weight')}
          />
        </Grid>
        <Grid item xs={12} ref={temperatureChartRef}>
          <HiveLineChart
            title={formatMessage({ id: 'temperature' })}
            toolFormatter={'°C'}
            formatterLegendTextY={formatMessage({ id: 'temperature' })}
            paletteGroup={'error'}
            minRange={0}
            maxRange={50}
            data={getSampleData(hive.samples, 'temperature')}
          />
        </Grid>
        <Grid item xs={12} ref={humidityChartRef}>
          <HiveLineChart
            title={formatMessage({ id: 'humidity' })}
            toolFormatter={'g/m³'}
            formatterLegendTextY={formatMessage({ id: 'humidity' })}
            paletteGroup={'info'}
            minRange={0}
            maxRange={50}
            data={getSampleData(hive.samples, 'umidity')}
          />
        </Grid>
        <Grid item xs={12} ref={carbonDioxideChartRef}>
          <HiveLineChart
            title={formatMessage({ id: 'carbon-dioxide' })}
            toolFormatter={'PPM'}
            formatterLegendTextY={formatMessage({ id: 'carbon-dioxide' })}
            paletteGroup={'warning'}
            minRange={0}
            maxRange={50}
            data={getSampleData(hive.samples, 'co2')}
          />
        </Grid>
        <Grid item xs={12} ref={vibrationChartRef}>
          <HiveLineChart
            title={formatMessage({ id: 'vibration' })}
            toolFormatter={''}
            formatterLegendTextY={formatMessage({ id: 'vibration' })}
            paletteGroup={'primary'}
            minRange={0}
            maxRange={1}
            data={getSampleData(hive.samples, 'vibration')}
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
