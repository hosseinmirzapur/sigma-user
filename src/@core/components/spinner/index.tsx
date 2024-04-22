// ** MUI Imports
import { BoxProps } from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Image from 'next/image'
import { useSettings } from 'src/@core/hooks/useSettings'

const FallbackSpinner = (props: { sx?: BoxProps['sx'] }) => {
  // ** Hook
  const { settings } = useSettings()

  return (
    <>
      <div className='h-[100vh] flex items-center flex-col justify-center'>
        {settings.mode === 'dark' ? (
          <Image src={'/images/logos/loader.png'} alt='' width={500} height={500} />
        ) : (
          <Image src={'/images/logos/loader-dark.png'} alt='' width={500} height={500} />
        )}

        <CircularProgress disableShrink sx={{ mt: 6 }} />
      </div>
    </>
  )
}

export default FallbackSpinner
