'use client'

import { Dialog } from '@mui/material'

interface ShowDocModalProps {
  open: boolean
  onClose: () => void
}

const ShowDocModal: React.FC<ShowDocModalProps> = ({ onClose, open }) => {
  return <Dialog open={open} onClose={onClose}></Dialog>
}

export default ShowDocModal
