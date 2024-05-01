'use client'

import Link from 'next/link'

import { Breadcrumbs, Button, Card, CardContent, Typography } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'

import { logistics } from 'src/data'
import CustomTable from 'src/components/custom-grid/CustomTable'
import { Icon } from '@iconify/react'

const Logistics = () => {
  // ** variables
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '#',
      flex: 0.1
    },
    {
      field: 'name',
      headerName: 'نام کالا',
      flex: 0.25
    },
    {
      field: 'action',
      headerName: 'عملیات کالا',
      flex: 0.15,
      valueGetter(params) {
        switch (params.value) {
          case 'import':
            return 'واردات'
          case 'export':
            return 'صادرات'
          case 'clearance':
            return 'ترخیص گمرکی'
          default:
            return ''
        }
      }
    },
    {
      field: 'carry_type',
      headerName: 'نوع حمل',
      flex: 0.25,
      valueGetter(params) {
        switch (params.value) {
          case 'ground':
            return 'زمینی'
          case 'air':
            return 'هوایی'
          case 'sea':
            return 'دریایی'
          case 'rail':
            return 'قطار'
          default:
            return ''
        }
      }
    },
    {
      field: 'product_type',
      headerName: 'نوع کالا',
      flex: 0.25,
      valueGetter(params) {
        switch (params.value) {
          case 'normal':
            return 'معمولی'
          case 'dangerous':
            return 'خطرناک / مشتعل'
          case 'temp_dependent':
            return 'حساس به دما'
          case 'oil':
            return 'مشتقات نفتی'
          default:
            return ''
        }
      }
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'جزییات',
      getActions: () => {
        return [
          <Button color='primary' variant='outlined'>
            <Icon icon={'tabler:eye'} fontSize={20} />
          </Button>
        ]
      }
    }
  ]

  return (
    <div className='flex flex-col gap-10'>
      <Breadcrumbs>
        <Link href={'/dashboards/ecommerce'}>داشبورد</Link>
        <Typography>حمل و نقل بین المللی</Typography>
      </Breadcrumbs>

      <Card className='flex flex-col gap-10'>
        <CardContent>
          <div className='text-lg font-bold'>درخواست های استعلام حمل</div>
        </CardContent>

        <CardContent>
          <CustomTable columns={columns} rows={logistics} />
        </CardContent>
      </Card>
    </div>
  )
}

export default Logistics
