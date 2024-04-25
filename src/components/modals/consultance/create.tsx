'use client'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import CloseButton from 'src/components/buttons/custom-close-button'
import CustomDatePicker from 'src/components/datepicker/CustomDatePicker'

interface ModalProps {
  open: boolean
  toggleOpen: () => void
}

const CreateConsultanceModal: React.FC<ModalProps> = ({ open, toggleOpen }) => {
  return (
    <Dialog open={open} onClose={toggleOpen}>
      <CloseButton handleClose={toggleOpen} />
      <DialogTitle>رزرو وقت مشاوره</DialogTitle>

      <DialogContent>
        <DialogContentText>
          برای شروع کار خود احتیاج به مشاوره دارید؟ با پر کردن فرم زیر زمانی برای مشاوره رزرو کنید و با کارشناسان حاذق
          ما در ارتباط باشید
        </DialogContentText>
        <FormGroup className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5'>
          <div>
            <InputLabel>تاریخ مد نظر</InputLabel>
            <CustomDatePicker />
          </div>
          <div>
            <InputLabel id='ctype'>نوع مشاوره</InputLabel>
            <Select label={'نوع مشاوره'} labelId='ctype'>
              <MenuItem value='' className='opacity-80'>
                <em>موردی را انتخاب نمایید</em>
              </MenuItem>
              <MenuItem value='online'>آنلاین</MenuItem>
              <MenuItem value='onsite'>حضوری</MenuItem>
            </Select>
          </div>
          <div className=''>
            <InputLabel>موضوع مشاوره</InputLabel>
            <Input type='text' />
          </div>
        </FormGroup>
      </DialogContent>
      <DialogActions className='flex justify-center'>
        <Button color='primary' variant='contained'>
          ثبت درخواست
        </Button>
        <Button color='error' variant='outlined' onClick={toggleOpen}>
          انصراف
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateConsultanceModal
