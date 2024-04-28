interface TradingCardStep {
  text: string
  done: boolean
}

interface TradingCardDocument {
  id: number | string
  title: string
  status: 'pending' | 'rejected' | 'accepted'
}

export const realSteps: TradingCardStep[] = [
  {
    text: 'مدارک شناسایی متقاضی کارت لازم است.',
    done: false
  },
  {
    text: 'حداقل سن متقاضی باید ۲۴ سال باشد.',
    done: false
  },
  {
    text: `سند مالکیت یا اجاره نامه برای مشخص شدن مکان کسب و کار و فعالیت آن به طوری که آدرس محل فعالیت باید با
    آدرس درج شده در اظهارنامه یکسان باشد.`,
    done: false
  },
  {
    text: 'مدرک تحصیلی مرتبط با تجارت و یا این که قبلا سه سال در این زمینه فعالیت تجاری داشته باشید.',
    done: false
  },
  {
    text: 'در کلاس آموزشی اتاق بازرگانی شرکت نمایید تا تسلط کامل به قوانین گمرک داشته باشید.',
    done: false
  },
  {
    text: 'متقاضی کارت بازرگانی نباید کارمند دولت و استخدام رسمی آن باشد.',
    done: false
  },
  {
    text: 'مدارک معتبر برای اثبات تمکن مالی متقاضی باید ارائه گردد.',
    done: false
  },
  {
    text: 'باید تعهد کتبی به جهت عدم سوء استفاده و استفاده غیر قانونی از کارت ارائه شود.',
    done: false
  },
  {
    text: 'باید تعهد کتبی برای اینکه نشان دهد شما تابع سیاست های تجاری دولت هستید ارائه دهید.',
    done: false
  },
  {
    text: 'گواهی عدم سوء پیشینه ضروری است و از زمان صدور آن نباید بیشتر از ۶ ماه گذشته باشد.',
    done: false
  }
]

export const tradingCardDocs: TradingCardDocument[] = [
  {
    id: 1,
    title: 'عکس کارت ملی',
    status: 'pending'
  },
  {
    id: 2,
    title: 'اثبات تمکن مالی',
    status: 'rejected'
  },
  {
    id: 3,
    title: 'گواهی عدم سوء پیشینه',
    status: 'accepted'
  }
]
