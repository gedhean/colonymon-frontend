import { useState, useMemo } from 'react';

// third-party
import { FormattedMessage, useIntl } from 'react-intl';

// material-ui
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Box,
  IconButton,
  Stack,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import Localization from 'layout/MainLayout/Header/HeaderContent/Localization';
import DefaultThemeMode from 'layout/MainLayout/Header/HeaderContent/Customization/ThemeMode';

// assets
import { HighlightOutlined, TranslationOutlined } from '@ant-design/icons';
import useConfig from 'hooks/useConfig';

// ==============================|| TAB - SETTINGS ||============================== //

const TabSettings = () => {
  const { formatMessage } = useIntl();
  const { mode, i18n } = useConfig();

  // eslint-disable-next-line
  const localization = useMemo(() => <Localization />, [i18n]);
  // eslint-disable-next-line
  const themeMode = useMemo(() => <DefaultThemeMode />, [mode]);

  const handleToggle = (value) => () => {};

  return (
    <MainCard title={formatMessage({ id: 'settings' })}>
      <Box>
        <Accordion defaultExpanded>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Stack direction="row" spacing={1.25} alignItems="center">
              <IconButton
                disableRipple
                color="primary"
                sx={{ bgcolor: 'primary.lighter' }}
                onClick={handleToggle}
                aria-label="settings toggler"
              >
                <HighlightOutlined />
              </IconButton>
              <Stack>
                <Typography variant="subtitle1" color="textPrimary">
                  <FormattedMessage id="theme-mode" />
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  <FormattedMessage id="theme-mode-description" />
                </Typography>
              </Stack>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>{themeMode}</AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Stack direction="row" spacing={1.25} alignItems="center">
              <IconButton
                disableRipple
                color="primary"
                sx={{ bgcolor: 'primary.lighter' }}
                onClick={handleToggle}
                aria-label="settings toggler"
              >
                <TranslationOutlined />
              </IconButton>
              <Stack>
                <Typography variant="subtitle1" color="textPrimary">
                  <FormattedMessage id="language" />
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  <FormattedMessage id="language-description" />
                </Typography>
              </Stack>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>{localization}</AccordionDetails>
        </Accordion>
      </Box>

      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
        sx={{ mt: 2.5 }}
      >
        <Button variant="outlined" color="secondary">
          <FormattedMessage id="cancel" />
        </Button>
        <Button variant="contained">
          <FormattedMessage id="save" />
        </Button>
      </Stack>
    </MainCard>
  );
};

export default TabSettings;
