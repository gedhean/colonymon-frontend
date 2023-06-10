import { useState } from 'react';

// material-ui
import { Box, Button, Grid, Link, Stack, Typography } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import WelcomeBanner from 'sections/dashboard/default/WelcomeBanner';
import LocationSearchInput from 'sections/dashboard/LocationSearchInput';
import WeatherLineChart from 'sections/dashboard/default/WeatherLineChart';
import GatewayAreaChart from 'sections/dashboard/default/GatewayAreaChart';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import WellbeingDonutChart from 'sections/dashboard/default/WellbeingDonutChart';
import BatteryLevelBarChart from 'sections/dashboard/default/BatteryLevelBarChart';

import useConfig from 'hooks/useConfig';
import useLocalStorage from 'hooks/useLocalStorage';

import isBlank from 'utils/isBlank';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const [slot, setSlot] = useState('week');
  const [location, setLocation] = useState(defaultLocation);
  const { location: defaultLocation } = useConfig();
  const [welcomeDismissed] = useLocalStorage('welcomeBanner', false);

  const handleLocationChange = (location) => {
    if (isBlank(location)) setLocation(defaultLocation);
    else setLocation(location);
  };

  return (
    <Page title="Dashboard">
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {!welcomeDismissed && (
          <Grid item xs={12}>
            <WelcomeBanner />
          </Grid>
        )}

        {/* row 1 */}
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h5">Visão Geral</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce
            title="Total Page Views"
            count="4,42,236"
            percentage={59.3}
            extra="35,000"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce
            title="Total Users"
            count="78,250"
            percentage={70.5}
            extra="8,900"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce
            title="Total Order"
            count="18,800"
            percentage={27.4}
            isLoss
            color="warning"
            extra="1,943"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce
            title="Total Sales"
            count="$35,078"
            percentage={27.4}
            isLoss
            color="warning"
            extra="$20,395"
          />
        </Grid>

        <Grid
          item
          md={8}
          sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }}
        />

        {/* row 2 */}
        <Grid item xs={12} md={5} lg={4}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Colmeias: Saúde Geral</Typography>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <Box sx={{ pt: 1, pr: 2 }}>
              <WellbeingDonutChart />
            </Box>
          </MainCard>
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Disponibilidade do Gateway</Typography>
            </Grid>
            <Grid item>
              {/* margin-top: -1px to keep charts align horizontal */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={0}
                sx={{ mt: '-1px' }}
              >
                <Button
                  size="small"
                  onClick={() => setSlot('month')}
                  color={slot === 'month' ? 'primary' : 'secondary'}
                  variant={slot === 'month' ? 'outlined' : 'text'}
                  sx={{ pt: 0, pb: 0 }}
                >
                  Mês
                </Button>
                <Button
                  size="small"
                  onClick={() => setSlot('week')}
                  color={slot === 'week' ? 'primary' : 'secondary'}
                  variant={slot === 'week' ? 'outlined' : 'text'}
                  sx={{ pt: 0, pb: 0 }}
                >
                  Semana
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <MainCard sx={{ mt: 1.5 }} content={false}>
            <Box sx={{ p: 3, pb: 0 }}>
              <Stack spacing={2}>
                {/* <Typography variant="h6" color="textSecondary">
                  Estatísticas de Disponibilidade
                </Typography> */}
                <Typography variant="h3">99.8%</Typography>
              </Stack>
            </Box>
            <GatewayAreaChart slot={slot} />
          </MainCard>
        </Grid>

        {/* row 3 */}
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Nível de Bateria</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <BatteryLevelBarChart />
          </MainCard>
        </Grid>

        {/* row 4 */}
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">
                Temperature, Umidade, Índice UV locais
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Local:{' '}
                {`${location?.name}${
                  location?.admin1 ? ', ' + location.admin1 : ''
                }`}
                . Fonte:{' '}
                <Link href="https://open-meteo.com" target="_blank">
                  https://open-meteo.com
                </Link>
                .
              </Typography>
            </Grid>
            <Grid item>
              <LocationSearchInput onChange={handleLocationChange} />
            </Grid>
          </Grid>
          <WeatherLineChart
            latitude={location?.latitude}
            longitude={location?.longitude}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

DashboardDefault.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DashboardDefault;
