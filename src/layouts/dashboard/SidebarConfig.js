import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import AnnouncementIcon from '@material-ui/icons/Announcement';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Home',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Message',
    path: '/dashboard/news',
    icon: <AnnouncementIcon />
  },
  {
    title: 'SHARE',
    path: '/dashboard/news'
  },
  {
    title: 'Ranking',
    path: '/dashboard/news',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Challenge',
    path: '/dashboard/news',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Party',
    path: '/dashboard/news',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Connect',
    path: '/dashboard/news',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Parade',
    path: '/dashboard/news',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'Group',
    path: '/dashboard/news',
    icon: getIcon(fileTextFill)
  }
];

export default sidebarConfig;
