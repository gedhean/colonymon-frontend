// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { DashboardOutlined, BoxPlotOutlined } from '@ant-design/icons';

// icons
const icons = { DashboardOutlined, BoxPlotOutlined };

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages = {
  id: 'group-pages',
  title: <FormattedMessage id="pages" />,
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: <FormattedMessage id="dashboard" />,
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      target: false
    },
    {
      id: 'apiaries',
      title: <FormattedMessage id="apiaries" />,
      type: 'item',
      url: '/apiaries',
      icon: icons.BoxPlotOutlined,
      target: false
    },
    {
      id: 'hives',
      title: <FormattedMessage id="hives" />,
      type: 'hidden',
      url: '/apiaries/[apiaryId]/hives',
      target: false
    },
    {
      id: 'hives-detail',
      title: <FormattedMessage id="hives" />,
      type: 'hidden',
      url: '/apiaries/[apiaryId]/hives/[hiveId]',
      target: false
    }
  ]
};

export default pages;
