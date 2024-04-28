'use client'

import { Icon } from '@iconify/react'
import {
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Tooltip,
  Typography
} from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import Link from 'next/link'
import CustomTable from 'src/components/custom-grid/CustomTable'
import { realSteps, tradingCardDocs } from 'src/data'

const columns: GridColDef[] = [
  {
    flex: 0.1,
    minWidth: 100,
    field: 'id',
    headerName: '#'
  },
  {
    flex: 0.25,
    minWidth: 100,
    field: 'title',
    headerName: 'عنوان سند'
  },
  {
    field: 'status',
    headerName: 'وضعیت',
    flex: 0.25,
    valueGetter: params => {
      switch (params.value) {
        case 'pending':
          return 'در حال بررسی'
        case 'accepted':
          return 'پذیرفته شده'
        case 'rejected':
          return 'رد شده'
      }
    }
  },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'تصویر سند',
    flex: 0.25,
    getActions: () => {
      return [
        <Button color='primary' variant='outlined' size='small'>
          <Icon icon={'tabler:eye'} fontSize={26} />
        </Button>
      ]
    }
  }
]

const TradingCard = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Breadcrumbs>
        <Link href={'/dashboards/ecommerce'}>داشبورد</Link>
        <Typography>خدمات کارت بازرگانی</Typography>
      </Breadcrumbs>

      <Card>
        <CardContent className='flex flex-col gap-10'>
          <div id='real'>
            <div className='text-lg font-bold'>مدارک لازم برای اخذ کارت بازرگانی حقیقی</div>
            <List className='grid grid-cols-2 gap-2 items-baseline'>
              {realSteps.map((step, index) => (
                <ListItem key={index} className='flex gap-2 hover:text-green-500 transition-all'>
                  <Icon icon='tabler:circle-chevron-left' fontSize={28} />
                  <ListItemText className='flex w-9/12'>{step.text}</ListItemText>
                  <ListItemSecondaryAction className='flex items-center'>
                    <Tooltip title='اگر این مورد را انجام دادید علامت بزنید' placement='top'>
                      <Switch defaultChecked={step.done} size='medium' />
                    </Tooltip>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>

          <div id='legal'>
            <div className='text-lg font-bold'>مدارک لازم برای اخذ کارت بازرگانی حقوقی</div>
            <List>
              <ListItem>
                <ListItemIcon className='hover:text-green-500 transition-all'>
                  <Icon icon={'tabler:circle-number-1'} fontSize={28} />
                </ListItemIcon>
                <ListItemText>
                  برای گرفتن کارت بازرگانی برای اشخاص حقوقی، علاوه بر مدارک فوق الذکر لازم است شما ثبت شرکت بازرگانی
                  انجام داده اید و برای این شرکت کد اقتصادی و اظهارنامه ثبت شده در دفاتر بازرگانی دریافت کرده باشید.
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemIcon className='hover:text-green-500 transition-all'>
                  <Icon icon={'tabler:circle-number-2'} fontSize={28} />
                </ListItemIcon>
                <ListItemText>
                  هم چنین لازم است تا اثبات نمایید شرکت شما ورشکسته نبوده و سابقه فعالیت مفید در زمینه اقتصاد و تجارت
                  کسب و کار خود را دارید.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className='hover:text-green-500 transition-all'>
                  <Icon icon={'tabler:circle-number-3'} fontSize={28} />
                </ListItemIcon>

                <ListItemText>
                  ارائه سند مالکیت و یا اجاره نامه برای محل کار و زندگی که مورد تایید است، ضروری است. به علاوه لازم است
                  تا گواهی معتبر بانکی برای موجودی حساب جاری خود ارائه دهید تا تمکن مالی شرکت به اثبات برسد.
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className='text-lg font-bold'>مدارک آپلود شده</div>

          <CustomTable columns={columns} rows={tradingCardDocs} />
        </CardContent>
      </Card>
    </div>
  )
}

export default TradingCard
