import { useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  ClickAwayListener,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Popper,
  Typography,
  useMediaQuery
} from '@mui/material';

// project import
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';

import { ThemeMode } from 'config';
import useConfig from 'hooks/useConfig';

// assets
import { TranslationOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - LOCALIZATION ||============================== //

const Localization = () => {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));

  const { i18n, onChangeLocalization } = useConfig();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current?.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (lang) => {
    onChangeLocalization(lang);
    setOpen(false);
  };

  const iconBackColorOpen =
    theme.palette.mode === ThemeMode.DARK ? 'grey.200' : 'grey.300';
  const iconBackColor =
    theme.palette.mode === ThemeMode.DARK ? 'background.default' : 'grey.100';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        variant="light"
        aria-label="open localization"
        ref={anchorRef}
        aria-controls={open ? 'localization-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{
          color: 'text.primary',
          bgcolor: open ? iconBackColorOpen : iconBackColor
        }}
      >
        <TranslationOutlined />
      </IconButton>
      <Popper
        placement={matchesXs ? 'bottom-start' : 'bottom'}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [matchesXs ? 0 : 0, 9]
              }
            }
          ]
        }}
      >
        {({ TransitionProps }) => (
          <Transitions
            type="grow"
            position={matchesXs ? 'top-right' : 'top'}
            in={open}
            {...TransitionProps}
          >
            <Paper sx={{ boxShadow: theme.customShadows.z1 }}>
              <ClickAwayListener onClickAway={handleClose}>
                <List
                  component="nav"
                  sx={{
                    p: 0,
                    width: '100%',
                    minWidth: 200,
                    maxWidth: 290,
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 0.5,
                    [theme.breakpoints.down('md')]: {
                      maxWidth: 250
                    }
                  }}
                >
                  <ListItemButton
                    selected={i18n === 'pt'}
                    onClick={() => handleListItemClick('pt')}
                  >
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="textPrimary">Português</Typography>
                          <Typography
                            variant="caption"
                            color="textSecondary"
                            sx={{ ml: '8px' }}
                          >
                            (Brasil)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                  <ListItemButton
                    selected={i18n === 'en'}
                    onClick={() => handleListItemClick('en')}
                  >
                    <ListItemText
                      primary={
                        <Grid container>
                          <Typography color="textPrimary">English</Typography>
                          <Typography
                            variant="caption"
                            color="textSecondary"
                            sx={{ ml: '8px' }}
                          >
                            (USA)
                          </Typography>
                        </Grid>
                      }
                    />
                  </ListItemButton>
                </List>
              </ClickAwayListener>
            </Paper>
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Localization;
