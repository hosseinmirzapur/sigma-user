interface Consultance {
  id: number | string
  subject: string
  due: Date | string
  status: 'pending' | 'accepted' | 'rejected'
  type: 'online' | 'onsite'
}

export const consultances: Consultance[] = [
  {
    id: 1,
    subject: 'تخصیص ارز',
    due: '1403/02/12',
    status: 'accepted',
    type: 'online'
  },
  {
    id: 2,
    subject: 'بازاریابی کالا',
    due: '1403/05/03',
    status: 'pending',
    type: 'onsite'
  },
  {
    id: 3,
    subject: 'تخصیص ارز',
    due: '1403/02/12',
    status: 'rejected',
    type: 'online'
  }
]
