import { useEffect, useState } from 'react';

// next
import { useRouter } from 'next/router';

// third-party
import { FormattedMessage, useIntl } from 'react-intl';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

// assets
import { LockOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

function getPathIndex(asPath) {
  let selectedTab = 0;
  switch (asPath) {
    case '/apps/profiles/user/password':
      selectedTab = 1;
      break;
    case '/apps/profiles/user/settings':
      selectedTab = 2;
      break;
    case '/apps/profiles/user/personal':
    default:
      selectedTab = 0;
  }
  return selectedTab;
}

// ==============================|| USER PROFILE - TAB ||============================== //

const ProfileTab = () => {
  const theme = useTheme();
  const router = useRouter();
  const { asPath } = router;

  const [selectedIndex, setSelectedIndex] = useState(getPathIndex(asPath));
  const handleListItemClick = (index, route) => {
    setSelectedIndex(index);
    router.push(route);
  };

  useEffect(() => {
    setSelectedIndex(getPathIndex(asPath));
  }, [asPath]);

  return (
    <List
      component="nav"
      sx={{
        p: 0,
        '& .MuiListItemIcon-root': {
          minWidth: 32,
          color: theme.palette.grey[500]
        }
      }}
    >
      <ListItemButton
        selected={selectedIndex === 0}
        onClick={() => handleListItemClick(0, '/apps/profiles/user/personal')}
      >
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage id="personal-info" />} />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 1}
        onClick={() => handleListItemClick(1, '/apps/profiles/user/password')}
      >
        <ListItemIcon>
          <LockOutlined />
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage id="reset-password" />} />
      </ListItemButton>
      <ListItemButton
        selected={selectedIndex === 2}
        onClick={() => handleListItemClick(2, '/apps/profiles/user/settings')}
      >
        <ListItemIcon>
          <SettingOutlined />
        </ListItemIcon>
        <ListItemText primary={<FormattedMessage id="settings" />} />
      </ListItemButton>
    </List>
  );
};

export default ProfileTab;
