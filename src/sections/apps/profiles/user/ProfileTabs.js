import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

// next
import NextLink from 'next/link';

// third-party
import { FormattedMessage } from 'react-intl';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Divider,
  FormLabel,
  Grid,
  TextField,
  Menu,
  MenuItem,
  Stack,
  Typography
} from '@mui/material';

// project import
import useUser from 'hooks/useUser';
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';
import ProfileTab from './ProfileTab';
import { ThemeMode } from 'config';

// assets
import { MoreOutlined, CameraOutlined } from '@ant-design/icons';

// ==============================|| USER PROFILE - TAB CONTENT ||============================== //

const ProfileTabs = ({ focusInput }) => {
  const theme = useTheme();
  const user = useUser();

  const [selectedImage, setSelectedImage] = useState(undefined);
  const [avatar, setAvatar] = useState(user ? user.thumb : '');

  useEffect(() => {
    if (selectedImage) {
      setAvatar(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MainCard>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="flex-end">
            <IconButton
              variant="light"
              color="secondary"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreOutlined />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              <NextLink
                href="/apps/profiles/user/personal"
                passHref
                legacyBehavior
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setTimeout(() => {
                      focusInput();
                    });
                  }}
                >
                  <FormattedMessage id="edit" />
                </MenuItem>
              </NextLink>
              <MenuItem onClick={handleClose} disabled>
                <FormattedMessage id="delete" />
              </MenuItem>
            </Menu>
          </Stack>
          <Stack spacing={2.5} alignItems="center">
            <FormLabel
              htmlFor="change-avtar"
              sx={{
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                '&:hover .MuiBox-root': { opacity: 1 },
                cursor: 'pointer'
              }}
            >
              {user && (
                <Avatar
                  alt={user.name}
                  src={avatar}
                  sx={{ width: 124, height: 124, border: '1px dashed' }}
                />
              )}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor:
                    theme.palette.mode === ThemeMode.DARK
                      ? 'rgba(255, 255, 255, .75)'
                      : 'rgba(0,0,0,.65)',
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Stack spacing={0.5} alignItems="center">
                  <CameraOutlined
                    style={{
                      color: theme.palette.secondary.lighter,
                      fontSize: '2rem'
                    }}
                  />
                  <Typography sx={{ color: 'secondary.lighter' }}>
                    <FormattedMessage id="upload" />
                  </Typography>
                </Stack>
              </Box>
            </FormLabel>
            <TextField
              type="file"
              id="change-avtar"
              placeholder="Outlined"
              variant="outlined"
              sx={{ display: 'none' }}
              onChange={(e) => setSelectedImage(e.target.files?.[0])}
            />
            {user && (
              <Stack spacing={0.5} alignItems="center">
                <Typography variant="h5">{user.name}</Typography>
                <Typography color="secondary">{user.role}</Typography>
              </Stack>
            )}
          </Stack>
        </Grid>
        <Grid item sm={3} sx={{ display: { sm: 'block', md: 'none' } }} />
        <Grid item xs={12} sm={6} md={12}>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h5">10</Typography>
              <Typography color="secondary">
                <FormattedMessage id="apiaries" />
              </Typography>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack spacing={0.5} alignItems="center">
              <Typography variant="h5">140</Typography>
              <Typography color="secondary">
                <FormattedMessage id="hives" />
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <ProfileTab />
        </Grid>
      </Grid>
    </MainCard>
  );
};

ProfileTabs.propTypes = {
  focusInput: PropTypes.func
};

export default ProfileTabs;
