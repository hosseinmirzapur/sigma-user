interface Category {
  title: string
  videos: Video[]
}

interface Video {
  title: string
  description?: string
  src: string
}

export const categories: Category[] = [
  {
    title: 'مالی',
    videos: [
      {
        src: 'https://www.youtube.com/watch?v=BHACKCNDMW8&t=3s&pp=ygUGbmF0dXJl',
        title: 'امور مالی در بازرگانی به چه معناست؟',
        description:
          'در این ویدئو ابتدا با مفاهیم پایه امور مالی در بازرگانی آشنا میشوید و سپس یکی از کارشناسان حاذق ما به شما آموزش مرحله به مرحله آموزش امور مالی را میدهد'
      },
      {
        src: 'https://www.youtube.com/watch?v=KJwYBJMSbPI&pp=ygUGbmF0dXJl',
        title: 'ویدئو جهت تکمیل دانش شما',
        description: 'در این ویدئو به مطالب پیشرفته حوزه مالی بازرگانی میپردازیم'
      }
    ]
  },
  {
    title: 'مالیاتی',
    videos: [
      {
        src: 'https://www.youtube.com/watch?v=1Gj3i7sf1wk&pp=ygUGbmF0dXJl',
        title: 'پیچیدگی های مالیاتی',
        description:
          'شما در جهان سیگما امور مالیاتی خود را به ما میسپارید اما اگر کنجکاو هستید که در داخل سازمان چه میگذرد، این ویدئو میتواند برای شما جالب باشد'
      }
    ]
  },
  {
    title: 'ارزی',
    videos: []
  },
  {
    title: 'بیمه',
    videos: []
  },
  {
    title: 'حمل بین المللی',
    videos: []
  },
  {
    title: 'گمرکی',
    videos: []
  },
  {
    title: 'قرارداد های تجاری بین المللی',
    videos: []
  },
  {
    title: 'سامانه جامع تجارت',
    videos: []
  },
  {
    title: 'سامانه جامع امور گمرکی',
    videos: []
  },
  {
    title: 'سایرین',
    videos: []
  }
]
