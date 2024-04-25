'use client'

import { Icon } from '@iconify/react'
import { IconButton, IconButtonProps, styled } from '@mui/material'

const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  top: 20,
  right: 20,
  color: 'grey.500',
  position: 'absolute',
  boxShadow: theme.shadows[2],
  transform: 'translate(10px, -10px)',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: `${theme.palette.background.paper} !important`,
  transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
  '&:hover': {
    transform: 'translate(7px, -5px)'
  }
}))

const CloseButton = ({ handleClose }: { handleClose: () => void }) => (
  <CustomCloseButton onClick={handleClose}>
    <Icon icon='tabler:x' fontSize='1.25rem' />
  </CustomCloseButton>
)

export default CloseButton
