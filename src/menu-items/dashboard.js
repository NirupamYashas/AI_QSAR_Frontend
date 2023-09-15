// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'dashboard',
    title: <FormattedMessage id="dashboard" />,
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'default',
            title: <FormattedMessage id="default" />,
            type: 'item',
            url: '/dashboard/sample-page',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'fileinput',
            title: <FormattedMessage id="fileinput" />,
            type: 'item',
            url: '/dashboard/file-input',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
