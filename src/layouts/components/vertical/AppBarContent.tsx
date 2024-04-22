// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
// import Autocomplete from 'src/layouts/components/Autocomplete'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

// import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'
import NotificationDropdown, {
  NotificationsType
} from 'src/@core/layouts/components/shared-components/NotificationDropdown'

// import ShortcutsDropdown, { ShortcutsType } from 'src/@core/layouts/components/shared-components/ShortcutsDropdown'

// ** Hook Import
import { useAuth } from 'src/hooks/useAuth'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const notifications: NotificationsType[] = [
  {
    meta: 'امروز',
    avatarAlt: 'Flora',
    title: 'به شما تبریک میگوییم 🎉',
    avatarImg: '/images/avatars/4.png',
    subtitle: 'شما برنده عنوان برترین بازرگان سال شدید!'
  },
  {
    meta: 'دیروز',
    avatarColor: 'primary',
    subtitle: '۵ ساعت پیش',
    avatarText: 'احمد مستوفی',
    title: 'سفارش شما در سیستم ثبت شد'
  },
  {
    meta: '۱۱ آگوست',
    avatarAlt: 'پیام',
    title: 'پیام جدید دریافت شد 👋🏻',
    avatarImg: '/images/avatars/5.png',
    subtitle: 'شما ۱۰ پیام خوانده نشده دارید'
  },
  {
    meta: '۲۵ مه',
    title: 'زرین پال',
    avatarAlt: 'زرین پال',
    subtitle: 'تراکنش جدیدی انجام شد',
    avatarImg: '/images/misc/paypal.png'
  },
  {
    meta: '۱۹ مارس',
    avatarAlt: 'سفارش',
    subtitle: 'سفارش شما تغییر وضعیت داده شد',
    avatarImg: '/images/avatars/3.png',
    title: 'تغییر وضعیت سفارش'
  },
  {
    meta: '۲۷ دسامبر',
    avatarAlt: 'نمودار',
    subtitle: '۲۵ ساعت پیش',
    avatarImg: '/images/misc/chart.png',
    title: 'گزارش شما آماده است'
  }
]

// const shortcuts: ShortcutsType[] = [
//   {
//     title: 'Calendar',
//     url: '/apps/calendar',
//     icon: 'tabler:calendar',
//     subtitle: 'Appointments'
//   },
//   {
//     title: 'Invoice App',
//     url: '/apps/invoice/list',
//     icon: 'tabler:file-invoice',
//     subtitle: 'Manage Accounts'
//   },
//   {
//     title: 'User App',
//     icon: 'tabler:users',
//     url: '/apps/user/list',
//     subtitle: 'Manage Users'
//   },
//   {
//     url: '/apps/roles',
//     icon: 'tabler:lock',
//     subtitle: 'Permissions',
//     title: 'Role Management'
//   },
//   {
//     subtitle: 'CRM',
//     title: 'Dashboard',
//     url: '/dashboards/crm',
//     icon: 'tabler:device-analytics'
//   },
//   {
//     title: 'Settings',
//     icon: 'tabler:settings',
//     subtitle: 'Account Settings',
//     url: '/pages/account-settings/account'
//   },
//   {
//     icon: 'tabler:help',
//     title: 'Help Center',
//     url: '/pages/help-center',
//     subtitle: 'FAQs & Articles'
//   },
//   {
//     title: 'Dialogs',
//     icon: 'tabler:square',
//     subtitle: 'Useful Popups',
//     url: '/pages/dialog-examples'
//   }
// ]

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  // ** Hook
  const auth = useAuth()

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden && !settings.navHidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <Icon fontSize='1.5rem' icon='tabler:menu-2' />
          </IconButton>
        ) : null}
        {/* {auth.user && <Autocomplete hidden={hidden} settings={settings} />} */}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <LanguageDropdown settings={settings} saveSettings={saveSettings} /> */}
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        {auth.user && (
          <>
            {/* <ShortcutsDropdown settings={settings} shortcuts={shortcuts} /> */}
            <NotificationDropdown settings={settings} notifications={notifications} />
            <UserDropdown settings={settings} />
          </>
        )}
      </Box>
    </Box>
  )
}

export default AppBarContent
