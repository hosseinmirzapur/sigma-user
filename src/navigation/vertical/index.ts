// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  const items: VerticalNavItemsType = [
    {
      title: 'داشبورد',
      icon: 'tabler:smart-home',
      path: '/dashboards/ecommerce'
    },
    {
      title: 'احراز هویت',
      icon: 'tabler:key',
      path: '/kyc'
    },
    {
      title: 'بازگشت به وبسایت',
      icon: 'tabler:arrow-back-up',
      externalLink: true,
      path: 'https://sigma-world.vercel.app'
    },
    {
      title: 'آموزش های بازرگانی',
      icon: 'tabler:school',
      path: '#'
    },
    {
      sectionTitle: 'خدمات و درخواست ها'
    },
    {
      title: 'خدمات و درخواست ها',
      icon: 'tabler:settings-2',
      children: [
        {
          title: 'مشاوره بازرگانی',
          icon: 'tabler:headset',
          path: '#'
        },
        {
          title: 'کارت بازرگانی',
          icon: 'tabler:id',
          path: '#'
        },
        {
          title: 'حمل و نقل بین المللی',
          icon: 'tabler:tir',
          path: '#'
        },
        {
          title: 'بازرسی فنی (استاندارد)',
          icon: 'tabler:ce',
          path: '#'
        },
        {
          title: 'ترخیص گمرکی کالا',
          icon: 'tabler:cloud-lock-open',
          path: '#'
        },
        {
          title: 'سفارشات و دور اظهاری',
          icon: 'tabler:truck-delivery',
          path: '#'
        },
        {
          title: 'بیمه باربری بین المللی',
          icon: 'tabler:shield-check',
          path: '#'
        },
        {
          title: 'ضمانت نامه های صادراتی',
          icon: 'tabler:check',
          path: '#'
        },
        {
          title: 'پرداخت های بین المللی',
          icon: 'tabler:wallet',
          path: '#'
        },
        {
          title: 'قرارداد های بین المللی',
          icon: 'tabler:writing',
          path: '#'
        },
        {
          title: 'مکاتبات و مذاکرات',
          icon: 'tabler:brand-hipchat',
          path: '#'
        },
        {
          title: 'بازاریابی بین المللی',
          icon: 'tabler:globe',
          path: '#'
        },
        {
          title: 'اتاق های مشترک بازرگانی',
          icon: 'tabler:door',
          path: '#'
        },
        {
          title: 'تیکت پشتیبانی',
          icon: 'tabler:lifebuoy',
          path: '#'
        },
        {
          title: 'پیام ها',
          icon: 'tabler:bell-ringing',
          path: '#'
        }
      ]
    },
    {
      sectionTitle: 'کالا ها'
    },
    {
      title: 'لیست کالا ها',
      icon: 'tabler:triangle-square-circle',
      path: '#'
    },
    {
      title: 'افزودن به لیست کالا ها',
      icon: 'tabler:square-plus',
      path: '#'
    }
  ]

  return items
}

export default navigation
