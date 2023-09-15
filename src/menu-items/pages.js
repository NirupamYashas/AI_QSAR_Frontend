// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconReceipt2,
    IconBug,
    IconBellRinging,
    IconPhoneCall,
    IconQuestionMark,
    IconShieldLock
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: <FormattedMessage id="pages" />,
    caption: <FormattedMessage id="pages-caption" />,
    icon: icons.IconKey,
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: <FormattedMessage id="authentication" />,
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'authentication1',
                    title: (
                        <>
                            <FormattedMessage id="authentication" /> 1
                        </>
                    ),
                    type: 'collapse',
                    children: [
                        {
                            id: 'login1',
                            title: <FormattedMessage id="login" />,
                            type: 'item',
                            url: '/pages/login/login1',
                            target: true
                        },
                        {
                            id: 'register1',
                            title: <FormattedMessage id="register" />,
                            type: 'item',
                            url: '/pages/register/register1',
                            target: true
                        },
                        {
                            id: 'forgot-password1',
                            title: <FormattedMessage id="forgot-password" />,
                            type: 'item',
                            url: '/pages/forgot-password/forgot-password1',
                            target: true
                        },
                        {
                            id: 'check-mail1',
                            title: <FormattedMessage id="check-mail" />,
                            type: 'item',
                            url: '/pages/check-mail/check-mail1',
                            target: true
                        },
                        {
                            id: 'reset-password1',
                            title: <FormattedMessage id="reset-password" />,
                            type: 'item',
                            url: '/pages/reset-password/reset-password1',
                            target: true
                        },
                        {
                            id: 'code-verification1',
                            title: <FormattedMessage id="code-verification" />,
                            type: 'item',
                            url: '/pages/code-verification/code-verification1',
                            target: true
                        }
                    ]
                },
                {
                    id: 'authentication2',
                    title: (
                        <>
                            <FormattedMessage id="authentication" /> 2
                        </>
                    ),
                    type: 'collapse',
                    children: [
                        {
                            id: 'login2',
                            title: <FormattedMessage id="login" />,
                            type: 'item',
                            url: '/pages/login/login2',
                            target: true
                        },
                        {
                            id: 'register2',
                            title: <FormattedMessage id="register" />,
                            type: 'item',
                            url: '/pages/register/register2',
                            target: true
                        },
                        {
                            id: 'forgot-password2',
                            title: <FormattedMessage id="forgot-password" />,
                            type: 'item',
                            url: '/pages/forgot-password/forgot-password2',
                            target: true
                        },
                        {
                            id: 'check-mail2',
                            title: <FormattedMessage id="check-mail" />,
                            type: 'item',
                            url: '/pages/check-mail/check-mail2',
                            target: true
                        },
                        {
                            id: 'reset-password2',
                            title: <FormattedMessage id="reset-password" />,
                            type: 'item',
                            url: '/pages/reset-password/reset-password2',
                            target: true
                        },
                        {
                            id: 'code-verification2',
                            title: <FormattedMessage id="code-verification" />,
                            type: 'item',
                            url: '/pages/code-verification/code-verification2',
                            target: true
                        }
                    ]
                },
                {
                    id: 'authentication3',
                    title: (
                        <>
                            <FormattedMessage id="authentication" /> 3
                        </>
                    ),
                    type: 'collapse',
                    children: [
                        {
                            id: 'login3',
                            title: <FormattedMessage id="login" />,
                            type: 'item',
                            url: '/pages/login/login3',
                            target: true
                        },
                        {
                            id: 'register3',
                            title: <FormattedMessage id="register" />,
                            type: 'item',
                            url: '/pages/register/register3',
                            target: true
                        },
                        {
                            id: 'forgot-password3',
                            title: <FormattedMessage id="forgot-password" />,
                            type: 'item',
                            url: '/pages/forgot-password/forgot-password3',
                            target: true
                        },
                        {
                            id: 'check-mail3',
                            title: <FormattedMessage id="check-mail" />,
                            type: 'item',
                            url: '/pages/check-mail/check-mail3',
                            target: true
                        },
                        {
                            id: 'reset-password3',
                            title: <FormattedMessage id="reset-password" />,
                            type: 'item',
                            url: '/pages/reset-password/reset-password3',
                            target: true
                        },
                        {
                            id: 'code-verification3',
                            title: <FormattedMessage id="code-verification" />,
                            type: 'item',
                            url: '/pages/code-verification/code-verification3',
                            target: true
                        }
                    ]
                }
            ]
        },
        {
            id: 'landing',
            title: <FormattedMessage id="landing" />,
            type: 'item',
            icon: icons.IconBellRinging,
            url: '/pages/landing',
            target: true
        }
    ]
};

export default pages;
