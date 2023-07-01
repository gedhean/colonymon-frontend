import PropTypes from 'prop-types';
import { useMemo } from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Tooltip, Typography } from '@mui/material';

// assets
import {
  SmileTwoTone,
  MehTwoTone,
  FrownTwoTone,
  QuestionCircleTwoTone
} from '@ant-design/icons';

const HiveWellbeing = ({ status }) => {
  const theme = useTheme();

  const statusInfo = useMemo(() => {
    let statusColor = theme.palette.grey[500];
    let statusIcon = <QuestionCircleTwoTone twoToneColor={statusColor} />;
    let statusText = 'unknown';

    if (status === 0) {
      statusIcon = <SmileTwoTone twoToneColor={theme.palette.success.dark} />;
      statusColor = theme.palette.success.dark;
      statusText = 'strong';
    } else if (status === 1) {
      statusIcon = <MehTwoTone twoToneColor={theme.palette.warning.dark} />;
      statusColor = theme.palette.warning.dark;
      statusText = 'weak';
    } else if (status === 2) {
      statusIcon = <FrownTwoTone twoToneColor={theme.palette.error.dark} />;
      statusColor = theme.palette.error.dark;
      statusText = 'poor';
    }

    return {
      statusIcon,
      statusColor,
      statusText
    };
  }, [status, theme]);

  return (
    <Stack direction="row" spacing={0.6} alignItems="center">
      {statusInfo.statusIcon}
      <Tooltip
        title={<FormattedMessage id="wellbeing" />}
        placement="top"
        arrow
      >
        <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
          <FormattedMessage id={statusInfo.statusText} />
        </Typography>
      </Tooltip>
    </Stack>
  );
};

HiveWellbeing.propTypes = {
  status: PropTypes.number.isRequired
};

export default HiveWellbeing;
