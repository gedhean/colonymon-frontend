import { useState } from 'react';

// third-party
import sub from 'date-fns/sub';
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl';

// material-ui
import {
  Button,
  Grid,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
import MainCard from 'components/MainCard';
import WelcomeBanner from 'sections/dashboard/WelcomeBanner';
import WeightBarChart from 'sections/dashboard/WeightBarChart';
import GatewayAreaChart from 'sections/dashboard/GatewayAreaChart';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import WellbeingDonutChart from 'sections/dashboard/WellbeingDonutChart';

import useApiaries from 'hooks/useApiaries';
import useLocalStorage from 'hooks/useLocalStorage';

import AttentionTable from 'sections/dashboard/AttentionTable';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  const { formatMessage } = useIntl();
  const [slot, setSlot] = useState('week');
  const [welcomeDismissed] = useLocalStorage('welcomeBanner', false);
  const apiaries = useApiaries();

  const handleSlotChange = (newSlot) => {
    if (newSlot !== null) setSlot(newSlot);
  };

  // Beehives data
  const beehivesStats = {
    strong: 120,
    weak: 12,
    poor: 15,
    total: 157
  };

  return (
    <Page title={formatMessage({ id: 'dashboard' })}>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {!welcomeDismissed && (
          <Grid item xs={12}>
            <WelcomeBanner />
          </Grid>
        )}

        {/* row 1 */}
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h5">
            <FormattedMessage id="overview" />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce
            title={formatMessage({ id: 'hives-strong' })}
            count={apiaries.hivesStats.healthy}
            previousCount={100}
            period="month"
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce
            title={formatMessage({ id: 'hives-weak' })}
            count={apiaries.hivesStats.weak}
            previousCount={10}
            period="month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce
            title={formatMessage({ id: 'hives-poor' })}
            count={apiaries.hivesStats.poor}
            previousCount={50}
            period="week"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <AnalyticEcommerce
            title={formatMessage({ id: 'hives-total' })}
            count={apiaries.hivesStats.total}
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
              <Typography variant="h5">
                <FormattedMessage id="chart-wellbeing" />
              </Typography>
            </Grid>
          </Grid>
          <MainCard content={false} sx={{ mt: 1.5 }}>
            <WellbeingDonutChart
              strong={beehivesStats.strong}
              weak={beehivesStats.weak}
              poor={beehivesStats.poor}
            />
          </MainCard>
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">
                <FormattedMessage id="chart-gateway-availability" />
              </Typography>
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
                  onClick={() => handleSlotChange('month')}
                  color={slot === 'month' ? 'primary' : 'secondary'}
                  variant={slot === 'month' ? 'outlined' : 'text'}
                  sx={{ pt: 0, pb: 0 }}
                >
                  <FormattedMessage id="month" />
                </Button>
                <Button
                  size="small"
                  onClick={() => handleSlotChange('week')}
                  color={slot === 'week' ? 'primary' : 'secondary'}
                  variant={slot === 'week' ? 'outlined' : 'text'}
                  sx={{ pt: 0, pb: 0 }}
                >
                  <FormattedMessage id="week" />
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <MainCard sx={{ mt: 1.5, mb: 0 }} content={false}>
            <GatewayAreaChart slot={slot} />
          </MainCard>
        </Grid>

        {/* row 3 */}
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">
                <FormattedMessage id="chart-weight-gain" />
              </Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <Grid item>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <Stack
                    sx={{ ml: 2, mt: 3 }}
                    alignItems={{ xs: 'center', sm: 'flex-start' }}
                  >
                    <Typography color="textSecondary" sx={{ display: 'block' }}>
                      <FormattedMessage id="period" />:{' '}
                      <FormattedDate
                        value={
                          slot === 'week'
                            ? sub(new Date(), { days: 7 })
                            : sub(new Date(), { months: 1 })
                        }
                        day="numeric"
                        month="short"
                        year="numeric"
                      />{' '}
                      -{' '}
                      <FormattedDate
                        value={new Date()}
                        day="numeric"
                        month="short"
                        year="numeric"
                      />
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent={{ xs: 'center', sm: 'flex-end' }}
                    sx={{ mt: 2, mr: 2, mb: 2 }}
                  >
                    <ToggleButtonGroup
                      exclusive
                      onChange={(e, value) => handleSlotChange(value)}
                      size="small"
                      value={slot}
                    >
                      <ToggleButton
                        disabled={slot === 'week'}
                        value="week"
                        sx={{ px: 2, py: 0.5 }}
                      >
                        <FormattedMessage id="week" />
                      </ToggleButton>
                      <ToggleButton
                        disabled={slot === 'month'}
                        value="month"
                        sx={{ px: 2, py: 0.5 }}
                      >
                        <FormattedMessage id="month" />
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <WeightBarChart slot={slot} />
          </MainCard>
        </Grid>

        {/* row 4 */}
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">
                <FormattedMessage id="attention-required" />
              </Typography>
            </Grid>
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <AttentionTable hives={apiaries.hivesAttention} />
          </MainCard>
        </Grid>
      </Grid>
    </Page>
  );
};

DashboardDefault.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DashboardDefault;
