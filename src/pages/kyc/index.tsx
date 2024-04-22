'use client'

import Breadcrumbs from '@mui/material/Breadcrumbs'
import Card from '@mui/material/Card'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'

import Link from 'next/link'

interface KycStatus {
  step: number
  label: string
  farsi: string
}

const kyc_levels: KycStatus[] = [
  {
    step: 1,
    label: 'not_verified',
    farsi: 'تایید نشده'
  },
  {
    step: 2,
    label: 'mobile_verified',
    farsi: 'تلفن همراه تایید شده'
  },
  {
    step: 3,
    label: 'doc_verified',
    farsi: 'کارت ملی / شناسنامه تایید شده'
  }
]

const KYC = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Breadcrumbs>
        <Link href={'/dashboards/ecommerce/'}>داشبورد</Link>
        <Typography>احراز هویت</Typography>
      </Breadcrumbs>
      <Card className='flex flex-col gap-5'>
        <div className='text-center text-xl'>وضعیت احراز هویت شما</div>
        <Stepper activeStep={0} alternativeLabel>
          {kyc_levels.map((lvl, index) => (
            <Step key={index}>
              <StepLabel>{lvl.farsi}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Card>
    </div>
  )
}

export default KYC
