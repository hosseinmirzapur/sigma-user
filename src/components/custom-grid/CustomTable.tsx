'use client'

import { DataGrid, GridColDef } from '@mui/x-data-grid'
import TableToolbar from '../grid-toolbar/TableToolbar'

interface TableData {
  rows: any[]
  columns: GridColDef[]
}

const CustomTable: React.FC<TableData> = ({ rows, columns }) => {
  return (
    <div>
      <DataGrid
        columns={columns}
        rows={rows}
        slots={{
          toolbar: TableToolbar
        }}
        autoHeight
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  )
}

export default CustomTable
