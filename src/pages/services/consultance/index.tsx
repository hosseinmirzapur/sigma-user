'use client'

import { Breadcrumbs, Card, CardContent, CardHeader, Typography } from '@mui/material'
import Link from 'next/link'

const Consultance = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Breadcrumbs>
        <Link href={'/dashboards/ecommerce/'}>داشبورد</Link>
        <Typography>مشاوره بازرگانی</Typography>
      </Breadcrumbs>

      <Card>
        <CardContent>
          <p className='text-lg font-bold'>درخواست های مشاوره من</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default Consultance
