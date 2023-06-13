import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';

// next
import NextLink from 'next/link';

// material-ui
import {
  List,
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

// assets
import {
  EditOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //
const NavLink = (props, ref) => (
  <NextLink href={props.href} passHref legacyBehavior ref={ref}>
    <Link {...props} target={props.target} />
  </NextLink>
);

const ProfileTab = ({ handleLogout }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  let listItemProps = {
    component: forwardRef(NavLink)
  };

  return (
    <List
      component="nav"
      sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}
    >
      <ListItemButton
        {...listItemProps}
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0)}
        href="/apps/profiles/user/personal"
      >
        <ListItemIcon>
          <UserOutlined />
        </ListItemIcon>
        <ListItemText primary="View Profile" />
      </ListItemButton>
      <ListItemButton
        {...listItemProps}
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1)}
        href="/apps/profiles/user/personal"
      >
        <ListItemIcon>
          <EditOutlined />
        </ListItemIcon>
        <ListItemText primary="Edit Profile" />
      </ListItemButton>
      <ListItemButton selected={selectedIndex === 2} onClick={handleLogout}>
        <ListItemIcon>
          <LogoutOutlined />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
};

ProfileTab.propTypes = {
  handleLogout: PropTypes.func
};

export default ProfileTab;
