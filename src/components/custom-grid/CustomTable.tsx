'use client'

import { DataGrid, GridColDef } from '@mui/x-data-grid'
import TableToolbar from '../grid-toolbar/TableToolbar'
import { Stack, SxProps, Theme } from '@mui/material'

interface TableData {
  rows: any[]
  columns: GridColDef[]
  rest?: SxProps<Theme>
}

const CustomTable: React.FC<TableData> = ({ rows, columns, rest }) => {
  return (
    <div>
      <DataGrid
        {...rest}
        columns={columns}
        rows={rows}
        slots={{
          toolbar: TableToolbar,
          noRowsOverlay: () => (
            <Stack height='100%' alignItems='center' justifyContent='center'>
              داده ای یافت نشد
            </Stack>
          ),
          noResultsOverlay: () => (
            <Stack height='100%' alignItems='center' justifyContent='center'>
              فیلتر داده، نتیجه ای نداشت
            </Stack>
          )
        }}
        autoHeight
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default CustomTable
