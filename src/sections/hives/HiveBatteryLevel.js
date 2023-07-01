import PropTypes from 'prop-types';

// third-party
import { FormattedMessage } from 'react-intl';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Tooltip, Typography } from '@mui/material';

// assets
import { ThunderboltTwoTone } from '@ant-design/icons';

const HiveBatteryLevel = ({ level }) => {
  const theme = useTheme();
  let color;
  let title;

  if (level <= 20) {
    color = theme.palette.error.main;
    title = 'low';
  } else if (level <= 50) {
    color = theme.palette.warning.main;
    title = 'medium';
  } else if (level <= 100) {
    color = theme.palette.success.main;
    title = 'high';
  } else {
    color = theme.palette.secondary.main;
    title = 'unknown';
  }

  return (
    <Stack direction="row" spacing={0.2} alignItems="center">
      <ThunderboltTwoTone twoToneColor={color} />
      <Tooltip title={<FormattedMessage id={title} />} placement="top" arrow>
        <Typography>{level}%</Typography>
      </Tooltip>
    </Stack>
  );
};

HiveBatteryLevel.propTypes = {
  level: PropTypes.number
};

export default HiveBatteryLevel;
