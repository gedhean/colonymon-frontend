import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ color, title, count, previousCount, period }) => {
  const percentage = (((count - previousCount) / previousCount) * 100).toFixed(
    0
  );
  const isLoss = percentage < 0;

  return (
    <MainCard contentSX={{ p: 2.25 }}>
      <Stack spacing={0.5}>
        <Typography variant="h6" color="textSecondary">
          {title}
        </Typography>
        <Grid container alignItems="center">
          <Grid item>
            <Typography variant="h4" color="inherit">
              {count}
            </Typography>
          </Grid>
          {percentage && previousCount !== -1 && (
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
      </Stack>
      <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" color="textSecondary">
          {previousCount === -1 ? (
            <FormattedMessage id="no-previous-data" />
          ) : (
            <FormattedMessage id={`since-last-${period}`} />
          )}
        </Typography>
      </Box>
    </MainCard>
  );
};

AnalyticEcommerce.defaultProps = {
  color: 'primary',
  period: 'month',
  previousCount: -1
};

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  previousCount: PropTypes.number,
  period: PropTypes.oneOf(['day', 'week', 'month'])
};

export default AnalyticEcommerce;
