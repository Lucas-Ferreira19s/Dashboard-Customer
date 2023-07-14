import * as React from 'react'
import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import TablePagination from '@mui/material/TablePagination'
import { Chip, Pagination } from '@mui/material'

import { TextComponent } from '../TextComponents'
import { SharedH4 } from '../SnackTitle'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { theme } from '../../styles/Theme'
import { HistoryList } from '../OrderList'

const ButtonItem = () => {
  return (
    <Chip
      label='Completed'
      color='success'
      variant='outlined'
      sx={{ bgcolor: 'rgba(166, 196, 74, 0.15)', width: '100%', height: '40px', fontWeight: '600' }}
    />
  )
}

const ButtonOrder = () => {
  return (
    <Chip
      label='Order Again'
      color='secondary'
      variant='outlined'
      sx={{ height: '40px', fontWeight: '600' }}
    />
  )
}

interface Row {
  id: number
  order: React.ReactElement
  date: React.ReactElement
  address: React.ReactElement
  total: string
  status: React.ReactElement
  OrderButton: React.ReactElement
}

const rows: Row[] = [
  createData(
    1,
    <HistoryList small />,
    <TextComponent>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    '$ 5.49',
    <ButtonItem />,
    <ButtonOrder />,
  ),
  createData(
    2,
    <HistoryList small />,
    <TextComponent>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    '$ 5.49',
    <ButtonItem />,
    <ButtonOrder />,
  ),
  createData(
    3,
    <HistoryList small />,
    <TextComponent>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    '$ 5.49',
    <ButtonItem />,
    <ButtonOrder />,
  ),
  createData(
    4,
    <HistoryList small />,
    <TextComponent>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    '$ 5.49',
    <ButtonItem />,
    <ButtonOrder />,
  ),
  createData(
    5,
    <HistoryList small />,
    <TextComponent>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    '$ 5.49',
    <ButtonItem />,
    <ButtonOrder />,
  ),
  createData(
    6,
    <HistoryList small />,
    <TextComponent>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    '$ 5.49',
    <ButtonItem />,
    <ButtonOrder />,
  ),
  createData(
    7,
    <HistoryList small />,
    <TextComponent>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    '$ 5.49',
    <ButtonItem />,
    <ButtonOrder />,
  ),
  createData(
    8,
    <HistoryList small />,
    <TextComponent>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    '$ 5.49',
    <ButtonItem />,
    <ButtonOrder />,
  ),
]

function createData(
  id: number,
  order: React.ReactElement,
  date: React.ReactElement,
  address: React.ReactElement,
  total: string,
  status: React.ReactElement,
  OrderButton: React.ReactElement,
): Row {
  return {
    id,
    order,
    date,
    address,
    total,
    status,
    OrderButton,
  }
}

export function OderHistoryTable() {
  const [selectedRows, setSelectedRows] = useState<Row[]>([])
  const [selectAll, setSelectAll] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(4)

  const handleRowSelect = (row: Row) => {
    if (selectedRows.find((selectedRow) => selectedRow.id === row.id)) {
      setSelectedRows(selectedRows.filter((selectedRow) => selectedRow.id !== row.id))
    } else {
      setSelectedRows([...selectedRows, row])
    }
  }

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([])
      setSelectAll(false)
    } else {
      setSelectedRows(rows)
      setSelectAll(true)
    }
  }

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  interface TablePaginationActionsProps {
    count: number
    page: number
    rowsPerPage: number
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void
  }

  function TablePaginationActions(props: TablePaginationActionsProps) {
    const { count, page, rowsPerPage, onPageChange } = props

    const handlePageChange = (
      event: React.ChangeEvent<unknown> | React.MouseEvent<HTMLButtonElement>,
      value: number,
    ) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onPageChange(event as any, value - 1)
      console.log(event)
    }

    return (
      <Pagination
        count={Math.ceil(count / rowsPerPage)}
        page={page + 1}
        onChange={handlePageChange}
        variant='outlined'
        shape='rounded'
        size='medium'
        sx={{
          width: '350px',
          ml: '50px',
          '& .MuiPaginationItem-root': {
            color: '#F8B602', // Cor mais fraca para os botões
            bgcolor: 'rgba(248, 182, 2, .4)',
            border: 'none',
            '&.Mui-selected': {
              color: 'white', // Cor mais forte para o botão ativador
              bgcolor: '#F8B602',
            },
          },
        }}
      />
    )
  }

  const startIndex = page * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const visibleRows = rows.slice(startIndex, endIndex)

  function Row(props: {
    row: ReturnType<typeof createData>
    isSelected: boolean
    onSelect: () => void
  }) {
    const { row, isSelected, onSelect } = props

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell padding='checkbox'>
            <Checkbox checked={isSelected} onChange={onSelect} color='secondary' />
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography variant='subtitle2' fontWeight='bold'>
              {row.order}
            </Typography>
          </TableCell>
          <TableCell>{row.date}</TableCell>
          <TableCell align='center'>{row.address}</TableCell>
          <TableCell>{row.total}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell>{row.OrderButton}</TableCell>
        </TableRow>
      </React.Fragment>
    )
  }

  return (
    <>
      <TableContainer component={Paper} sx={{ borderRadius: '15px' }}>
        <Table aria-label='collapsible table' sx={{ flex: '1 1 100%', minWidth: '900px' }}>
          <TableHead>
            <TableRow>
              <TableCell padding='checkbox'>
                <Checkbox
                  indeterminate={selectedRows.length > 0 && selectedRows.length < rows.length}
                  checked={selectedRows.length === rows.length}
                  onChange={handleSelectAll}
                  color='secondary'
                />
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Menu
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Address
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Total
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Status
                </Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row) => (
              <Row
                key={row.id}
                row={row}
                isSelected={selectedRows.some((selectedRow) => selectedRow.id === row.id)}
                onSelect={() => handleRowSelect(row)}
              />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[4, 8, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
        />
      </TableContainer>
    </>
  )
}
