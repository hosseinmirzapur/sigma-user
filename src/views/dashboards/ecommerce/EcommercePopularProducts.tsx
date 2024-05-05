// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'

interface DataType {
  title: string
  imgSrc: string
  amount: string
  subtitle: string
}

const data: DataType[] = [
  {
    amount: '$999.29',
    title: 'اپل آیفون ۱۳',
    subtitle: 'آیتم: #FXZ-4567',
    imgSrc: '/images/cards/apple-iPhone-13.png'
  },
  {
    amount: '$72.40',
    title: 'نایک ایر جردن',
    subtitle: 'آیتم: #FXZ-3456',
    imgSrc: '/images/cards/nike-air-jordan.png'
  },
  {
    amount: '$99.90',
    title: 'بیتس استودیو ۲',
    subtitle: 'آیتم: #FXZ-9485',
    imgSrc: '/images/cards/beats-studio-2.png'
  },
  {
    amount: '$249.99',
    subtitle: 'آیتم: #FXZ-2345',
    title: 'اپل واچ سری ۷',
    imgSrc: '/images/cards/apple-watch-series-7.png'
  },
  {
    amount: '$79.40',
    title: 'آمازون اکو دات',
    subtitle: 'آیتم: #FXZ-8959',
    imgSrc: '/images/cards/amazon-echo-dot.png'
  },
  {
    amount: '$129.48',
    subtitle: 'آیتم: #FXZ-7892',
    title: 'کنسول پلی استیشن',
    imgSrc: '/images/cards/play-station-console.png'
  }
]

const EcommercePopularProducts = () => {
  return (
    <Card>
      <CardHeader
        title='محصولات محبوب'
        subheader='۱۰ هزار نفر مراجعه کننده به صورت کلی'
        action={
          <OptionsMenu
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
            options={['قیمت - کم به زیاد', 'قیمت - زیاد به کم', 'برترین فروشنده']}
          />
        }
      />
      <CardContent>
        {data.map((item: DataType, index: number) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                '& img': { mr: 4 },
                alignItems: 'center',
                mb: index !== data.length - 1 ? 4.75 : undefined
              }}
            >
              <img width={46} src={item.imgSrc} alt={item.title} />

              <Box
                sx={{
                  rowGap: 1,
                  columnGap: 4,
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography variant='h6'>{item.title}</Typography>
                  <Typography variant='body2' sx={{ fontWeight: 500, color: 'text.disabled' }}>
                    {item.subtitle}
                  </Typography>
                </Box>
                <Typography sx={{ color: 'text.secondary' }}>{item.amount}</Typography>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default EcommercePopularProducts
