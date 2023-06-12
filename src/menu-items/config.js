// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
  UserOutlined
} from '@ant-design/icons';

// icons
const icons = {
  UserOutlined,
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const config = {
  id: 'config',
  title: <FormattedMessage id="configs" />,
  type: 'group',
  children: [
    {
      id: 'profile',
      title: <FormattedMessage id="profile" />,
      type: 'item',
      url: '/apps/profiles/user/personal',
      icon: icons.UserOutlined
    },
  ]
};

export default config;
