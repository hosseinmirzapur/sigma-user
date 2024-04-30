'use client'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Image from 'next/image'
import CloseButton from 'src/components/buttons/custom-close-button'

interface ShowDocModalProps {
  open: boolean
  onClose: () => void
  docUrl: string
}

const ShowDocModal: React.FC<ShowDocModalProps> = ({ onClose, open, docUrl }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <CloseButton handleClose={onClose} />
      <DialogTitle>تصویر سند آپلود شده</DialogTitle>

      <DialogContent>
        <div>
          <Image src={docUrl} alt='doc-image' width={300} height={300} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button color='primary' variant='contained'>
          متوجه شدم
        </Button>
        <Button color='error' variant='outlined'>
          حذف
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ShowDocModal
