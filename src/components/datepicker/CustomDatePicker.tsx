'use client'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers'

import { AdapterMomentJalaali } from '@mui/x-date-pickers/AdapterMomentJalaali'

const CustomDatePicker = () => {
  return (
    <div dir='rtl' className='overflow-auto'>
      <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
        <DatePicker />
      </LocalizationProvider>
    </div>
  )
}

export default CustomDatePicker
