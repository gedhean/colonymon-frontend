// third-party
import { FormattedMessage } from 'react-intl';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Button, Stack, Box, CardMedia } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { ThemeDirection } from 'config';
import useLocalStorage from 'hooks/useLocalStorage';

//asset
const WelcomeImage = '/assets/images/analytics/welcome-banner.png';
const WelcomeImageArrow = '/assets/images/analytics/welcome-arrow.png';

// ==============================|| ANALYTICS - WELCOME ||============================== //

const WelcomeBanner = () => {
  const theme = useTheme();
  const [dismissed, setDismissed] = useLocalStorage('welcomeBanner', false);

  return (
    <MainCard
      border={false}
      sx={{
        display: dismissed ? 'none' : 'block',
        background:
          theme.direction === ThemeDirection.RTL
            ? `linear-gradient(60.38deg, ${theme.palette.primary.lighter} 114%, ${theme.palette.primary.light} 34.42%, ${theme.palette.primary.main} 60.95%, ${theme.palette.primary.dark} 84.83%, ${theme.palette.primary.darker} 104.37%)`
            : `linear-gradient(250.38deg, ${theme.palette.primary.lighter} 2.39%, ${theme.palette.primary.light} 34.42%, ${theme.palette.primary.main} 60.95%, ${theme.palette.primary.dark} 84.83%, ${theme.palette.primary.darker} 104.37%)`
      }}
    >
      <Grid container>
        <Grid item md={6} sm={6} xs={12}>
          <Stack spacing={2} sx={{ padding: 3.4 }}>
            <Typography variant="h2" color={theme.palette.background.paper}>
              <FormattedMessage id="welcome-banner-tile" />
            </Typography>
            <Typography variant="h6" color={theme.palette.background.paper}>
              <FormattedMessage id="welcome-banner-subtitle" />
            </Typography>
            <Box>
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  color: theme.palette.background.paper,
                  borderColor: theme.palette.background.paper,
                  '&:hover': {
                    borderColor: theme.palette.primary.lighter,
                    color: theme.palette.primary.lighter
                  }
                }}
                onClick={() => setDismissed(true)}
              >
                <FormattedMessage id="welcome-banner-button" />
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          sx={{ display: { xs: 'none', sm: 'initial' } }}
        >
          <Stack
            sx={{ position: 'relative', pr: { sm: 3, md: 8 } }}
            justifyContent="center"
            alignItems="flex-end"
          >
            <CardMedia
              sx={{ width: 'inherit' }}
              component="img"
              src={WelcomeImage}
              alt="Welcome"
            />
            <Box sx={{ position: 'absolute', bottom: 0, right: '10%' }}>
              <CardMedia
                component="img"
                src={WelcomeImageArrow}
                alt="Welcome Arrow"
              />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default WelcomeBanner;
