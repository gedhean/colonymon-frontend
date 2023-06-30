import PropTypes from 'prop-types';

// material-ui
import { Chip, Grid, Stack, Typography } from '@mui/material';

// project imports
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// ==============================|| REPORT CARD ||============================== //

const ReportCard = ({
  primary,
  secondary,
  iconPrimary,
  color,
  percentage,
  isLoss
}) => {
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

  return (
    <MainCard>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Stack spacing={1}>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h4" color="inherit">
                  {primary}
                </Typography>
              </Grid>
              {percentage && (
                <Grid item>
                  <Chip
                    variant="combined"
                    color={isLoss ? 'error' : 'success'}
                    icon={
                      <>
                        {!isLoss && (
                          <RiseOutlined
                            style={{ fontSize: '0.75rem', color: 'inherit' }}
                          />
                        )}
                        {isLoss && (
                          <FallOutlined
                            style={{ fontSize: '0.75rem', color: 'inherit' }}
                          />
                        )}
                      </>
                    }
                    label={`${percentage}%`}
                    sx={{ ml: 1.25, pl: 1 }}
                    size="small"
                  />
                </Grid>
              )}
            </Grid>
            <Typography variant="body1" color="secondary">
              {secondary}
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Typography variant="h2" style={{ color }}>
            {primaryIcon}
          </Typography>
        </Grid>
      </Grid>
    </MainCard>
  );
};

ReportCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  iconPrimary: PropTypes.func,
  color: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool
};

export default ReportCard;
