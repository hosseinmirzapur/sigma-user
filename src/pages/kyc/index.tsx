'use client'

import Link from 'next/link'
import { useState } from 'react'

import {
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  FormGroup,
  Input,
  InputLabel,
  LinearProgress,
  Step,
  StepLabel,
  Stepper,
  Typography
} from '@mui/material'
import FileUploaderSingle from 'src/views/forms/form-elements/file-uploader/FileUploaderSingle'
import { Icon } from '@iconify/react'
import Image from 'next/image'

interface KycStatus {
  label: string
  farsi: string
}

const kyc_levels: KycStatus[] = [
  {
    label: 'not_verified',
    farsi: 'تایید شماره موبایل'
  },
  {
    label: 'mobile_verified',
    farsi: 'آپلود مدارک'
  },
  {
    label: 'doc_pending',
    farsi: 'در حال بررسی مدارک'
  },
  {
    label: 'doc_verified',
    farsi: 'تایید شده'
  }
]

const KYC = () => {
  // ** variables
  const [activeStep, setActiveStep] = useState(0)
  const [sendLoading, setSendLoading] = useState(false)
  const [verifyLoading, setVerifyLoading] = useState(false)

  // ** functions
  const toggleSendLoading = () => setSendLoading(!sendLoading)
  const toggleVerifyLoading = () => setVerifyLoading(!verifyLoading)

  const handleNext = () => setActiveStep(prev => prev + 1)
  const handleComponent = () => {
    switch (activeStep) {
      case 0:
        return <NotVerified />
      case 1:
        return <MobileVerified />
      case 2:
        return <DocPending />
      case 3:
        return <DocVerified />
      default:
        return null
    }
  }

  const handleOTP = () => {
    toggleSendLoading()
    // request to backend
    // on success
    // toggleLoading
    // on fail
    // error toast
  }

  const verifyOTP = () => {
    // toggleLoding
    // request to backend
    // on success
    handleNext()
    // on fail
    // error toast
  }

  const handleUpload = () => {
    // toggleLoading
    // request to backend
    // on success
    handleNext()
    // on fail
    // error toast
  }

  // ** components
  const NotVerified = () => {
    return (
      <Card>
        <CardContent className='flex flex-col gap-10'>
          <p>
            برای شروع شماره موبایل خود را وارد نمایید و بعد از ارسال پیامک به شماره ثبت شده، کد را در محل مشخص خود وارد
            نمایید.
          </p>

          <FormGroup className='flex flex-row justify-around'>
            <div className='w-[45%] md:w-[40%] flex flex-col gap-5'>
              <InputLabel>شماره موبایل</InputLabel>
              <Input type='number' className='w-full mx-auto' dir='ltr' />

              <div className='flex justify-center mt-5'>
                <Button
                  color='primary'
                  variant={sendLoading ? 'outlined' : 'contained'}
                  onClick={handleOTP}
                  size='medium'
                >
                  {sendLoading ? <CircularProgress size={'1rem'} /> : 'ارسال کد'}
                </Button>
              </div>
            </div>
            <div className='w-[45%] md:w-[40%] flex flex-col gap-5'>
              <InputLabel>کد ارسال شده</InputLabel>
              <Input type='number' className='w-full mx-auto' dir='ltr' />

              <div className='flex justify-center mt-5'>
                <Button
                  color='primary'
                  variant={verifyLoading ? 'outlined' : 'contained'}
                  onClick={verifyOTP}
                  size='medium'
                >
                  {verifyLoading ? <CircularProgress size={'1rem'} /> : 'تایید کد'}
                </Button>
              </div>
            </div>
          </FormGroup>
        </CardContent>
      </Card>
    )
  }

  const MobileVerified = () => (
    <Card>
      <CardContent>
        <p>
          حال تصویر کارت ملی / شناسنامه خود را در این قسمت آپلود کنید. کارشناسان ما پس از بررسی مدارک شما را تایید/رد
          میکنند
        </p>

        <FormGroup className='flex flex-col py-10'>
          <Card className='w-11/12 md:w-10/12 lg:w-9/12 mx-auto h-auto my-auto flex justify-center items-center border-dotted border-white border-[1px]'>
            <FileUploaderSingle />
          </Card>
          <CardActions className='flex justify-center'>
            <Button color='primary' variant='contained' onClick={handleUpload}>
              آپلود عکس
            </Button>
          </CardActions>
        </FormGroup>
      </CardContent>
    </Card>
  )

  const DocPending = () => {
    return (
      <>
        <div
          className='
          flex
          flex-col
          md:flex-row
          justify-center
          py-10
          gap-12
          md:gap-10
          lg:gap-5
          w-11/12
          md:w-10/12
          lg:w-6/12
          mx-auto
          items-center
        '
        >
          <p className='w-9/12 mx-auto text-center lg:text-right'>
            مدارک شما در حال بررسی توسط کارشناسان ما است و نهایت تا ۲۴ ساعت اینده وضعیتشان مشخص خواهد شد.
          </p>
          <div className='flex items-center justify-center hover:rotate-180 transition-all'>
            <Image src={'/images/misc/image.png'} alt='hourglass' width={100} height={100} />
          </div>
        </div>
        <div className='flex justify-center'>
          <Button color='primary' variant='contained' onClick={handleNext}>
            بعدی
          </Button>
        </div>
      </>
    )
  }

  const DocVerified = () => {
    return (
      <Card className='flex items-center justify-center flex-col md:flex-row py-10 px-10 gap-5'>
        <Icon icon={'tabler:discount-check-filled'} className='text-green-500' fontSize={44} />
        <p className='text-lg text-center md:text-right'>
          تبریک! مدارک شما همگی تایید شده اند و مراحل احراز هویت شما با موفقیت پشت سر گذاشته شده اند
        </p>
      </Card>
    )
  }

  return (
    <div className='flex flex-col gap-5'>
      <Breadcrumbs>
        <Link href={'/dashboards/ecommerce/'}>داشبورد</Link>
        <Typography>احراز هویت</Typography>
      </Breadcrumbs>
      <Card className='flex flex-col gap-5'>
        <div className='text-center text-xl py-4'>وضعیت احراز هویت شما</div>
        <Stepper activeStep={activeStep} alternativeLabel>
          {kyc_levels.map((lvl, index) => {
            return (
              <Step key={index} completed={activeStep >= index}>
                <StepLabel>{lvl.farsi}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        {handleComponent()}
      </Card>
    </div>
  )
}

export default KYC
