'use client'

import { Breadcrumbs, Card, CardContent, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'

import { consultances } from 'src/data'

import Link from 'next/link'
import CustomTable from 'src/components/custom-grid/CustomTable'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import CreateConsultanceModal from 'src/components/modals/consultance/create'

interface Action {
  name: string
  icon: string
  handler: () => void
}

const columns: GridColDef[] = [
  {
    flex: 0.1,
    minWidth: 100,
    field: 'id',
    headerName: '#'
  },
  {
    flex: 0.25,
    minWidth: 200,
    field: 'subject',
    headerName: 'موضوع'
  },
  {
    flex: 0.15,
    minWidth: 130,
    headerName: 'تاریخ مقرر',
    field: 'due'
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'status',
    headerName: 'وضعیت',
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
    flex: 0.1,
    field: 'type',
    minWidth: 80,
    headerName: 'نوع',
    valueGetter: params => {
      switch (params.value) {
        case 'online':
          return 'آنلاین'
        case 'onsite':
          return 'حضوری'
      }
    }
  }
]

const Consultance = () => {
  // ** variables
  const [createModal, setCreateModal] = useState(false)
  const actions: Action[] = [
    {
      name: 'افزودن مورد جدید',
      icon: 'tabler:table-plus',
      handler: () => toggleCreateModal()
    }
  ]

  // ** functions
  const toggleCreateModal = () => setCreateModal(!createModal)

  return (
    <>
      <div className='flex flex-col gap-10'>
        <Breadcrumbs>
          <Link href={'/dashboards/ecommerce/'}>داشبورد</Link>
          <Typography>مشاوره بازرگانی</Typography>
        </Breadcrumbs>

        <Card>
          <CardContent className='flex flex-col gap-5'>
            <p className='text-lg font-bold'>درخواست های مشاوره من</p>

            <CustomTable columns={columns} rows={consultances} />
          </CardContent>
          <div className='flex justify-start p-4'>
            <SpeedDial
              ariaLabel='speed-dial'
              icon={<SpeedDialIcon openIcon={<Icon icon={'tabler:pencil'} fontSize={20} />} />}
            >
              {actions.map((action, index) => (
                <SpeedDialAction
                  key={index}
                  icon={<Icon icon={action.icon} fontSize={24} />}
                  tooltipTitle={action.name}
                  onClick={action.handler}
                />
              ))}
            </SpeedDial>
          </div>
        </Card>
      </div>
      <CreateConsultanceModal open={createModal} toggleOpen={toggleCreateModal} />
    </>
  )
}

export default Consultance
