'use client'

import { Tooltip } from '@mui/material'
import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter
} from '@mui/x-data-grid'

const TableToolbar = () => {
  return (
    <GridToolbarContainer className='gap-5 my-3'>
      <Tooltip title='جستجو در جدول'>
        <GridToolbarQuickFilter placeholder='جستجو...' />
      </Tooltip>
      <Tooltip title='گرفتن خروجی از جدول'>
        <GridToolbarExport />
      </Tooltip>
      <Tooltip title='فیلتر بر اساس خواسته شما'>
        <GridToolbarFilterButton />
      </Tooltip>
      <Tooltip title='انتخاب ستون های دلخواه'>
        <GridToolbarColumnsButton />
      </Tooltip>
      <Tooltip title='تعیین  میزان فشردگی سطر ها'>
        <GridToolbarDensitySelector />
      </Tooltip>
    </GridToolbarContainer>
  )
}

export default TableToolbar
