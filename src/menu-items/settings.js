// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { UserOutlined } from '@ant-design/icons';

// icons
const icons = {
  UserOutlined
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const settings = {
  id: 'settings',
  title: <FormattedMessage id="settings" />,
  type: 'group',
  children: [
    {
      id: 'profile',
      title: <FormattedMessage id="profile" />,
      type: 'item',
      url: '/apps/profiles/user/personal',
      icon: icons.UserOutlined
    }
  ]
};

export default settings;
