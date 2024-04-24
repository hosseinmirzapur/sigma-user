interface Consultance {
  subject: string
  due: Date
  status: 'pending' | 'accepted' | 'rejected'
}

export const consultances: Consultance[] = []
