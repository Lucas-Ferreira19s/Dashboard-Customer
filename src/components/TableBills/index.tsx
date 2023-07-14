import * as React from 'react'
import { useState } from 'react'
import Collapse from '@mui/material/Collapse'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Checkbox from '@mui/material/Checkbox'
import TablePagination from '@mui/material/TablePagination'
import { Box, Button, Chip, Pagination } from '@mui/material'

import { TextComponent } from '../TextComponents'
import { SharedH4 } from '../SnackTitle'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import { theme } from '../../styles/Theme'

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

interface Row {
  id: number
  status: React.ReactElement
  Address: React.ReactElement
  date: React.ReactElement
  name: string
  total: number
  price: number
  PaymentMethod: string
  history: {
    date: string
    customerId: string
    amount: number
  }[]
}

const rows: Row[] = [
  createData(
    1,
    'Order #1',
    <ButtonItem />,
    <TextComponent color>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4 color>
      <FmdGoodOutlinedIcon />
      Elm Street, 23
    </SharedH4>,
    4.3,
    4.55,
    'cash',
  ),
  createData(
    2,
    'Order #2',
    <ButtonItem />,
    <TextComponent color>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4 color>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    4.9,
    5.88,
    'cash',
  ),
  createData(
    3,
    'Order #3',
    <ButtonItem />,
    <TextComponent color>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4 color>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    6.0,
    5.88,
    'cash',
  ),
  createData(
    4,
    'Order #4',
    <ButtonItem />,
    <TextComponent color>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4 color>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    4.0,
    5.88,
    'cash',
  ),
  createData(
    5,
    'Order #5',
    <ButtonItem />,
    <TextComponent color>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4 color>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    3.9,
    5.88,
    'cash',
  ),
  createData(
    6,
    'Order #6',
    <ButtonItem />,
    <TextComponent color>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4 color>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    6.5,
    5.88,
    'cash',
  ),
  createData(
    7,
    'Order #7',
    <ButtonItem />,
    <TextComponent color>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4 color>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    4.3,
    5.88,
    'cash',
  ),
  createData(
    8,
    'Order #8',
    <ButtonItem />,
    <TextComponent color>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4 color>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    0.0,
    5.88,
    'cash',
  ),
  createData(
    9,
    'Order #9',
    <ButtonItem />,
    <TextComponent>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    7.0,
    5.88,
    'cash',
  ),
  createData(
    10,
    'Order #10',
    <ButtonItem />,
    <TextComponent>June 1, 2020, 08:22 AM</TextComponent>,
    <SharedH4>
      <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
      Elm Street, 23
    </SharedH4>,
    0.0,
    5.88,
    'cash',
  ),
]

function createData(
  id: number,
  name: string,
  status: React.ReactElement,
  date: React.ReactElement,
  Address: React.ReactElement,
  total: number,
  price: number,
  PaymentMethod: string,
): Row {
  return {
    id,
    name,
    status,
    date,
    Address,
    total,
    price,
    PaymentMethod,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  }
}

export function CollapsibleTable() {
  const [selectedRows, setSelectedRows] = useState<Row[]>([])
  const [selectAll, setSelectAll] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

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
    const [open, setOpen] = React.useState(false)

    return (
      <React.Fragment>
        <TableRow sx={open ? { backgroundColor: '#F8B602' } : undefined}>
          <TableCell padding='checkbox'>
            <Checkbox
              checked={isSelected}
              onChange={onSelect}
              sx={open ? { color: '#FFFFFF' } : undefined}
            />
          </TableCell>
          <TableCell component='th' scope='row'>
            <Typography
              variant='subtitle2'
              fontWeight='bold'
              sx={open ? { color: '#FFFFFF' } : undefined}
            >
              {row.name}
            </Typography>
          </TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell sx={open ? { color: '#FFFFFF' } : { color: '#A098AE' }}>{row.date}</TableCell>
          <TableCell align='center' sx={open ? { color: '#FFFFFF' } : undefined}>
            {row.Address}
          </TableCell>
          <TableCell sx={open ? { color: '#FFFFFF' } : undefined}>{row.total}</TableCell>
          <TableCell>
            <Typography
              variant='subtitle2'
              fontSize='16px'
              sx={open ? { color: '#FFFFFF' } : undefined}
            >
              {row.PaymentMethod}
            </Typography>
          </TableCell>
          <TableCell>
            <Button
              aria-label='expand row'
              size='small'
              variant='outlined'
              onClick={() => setOpen(!open)}
              sx={{
                bgcolor: open ? 'rgba(248,182,2, 0.4)' : '#F5F5F5',
                border: 'none',
                minWidth: '40px',
                borderRadius: '13px',
                color: '#A098AE',
              }}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant='h6' gutterBottom component='div'>
                  History
                </Typography>
                <Table size='small' aria-label='purchases'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component='th' scope='row'>
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell>{historyRow.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
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
                />
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Menu
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='subtitle1' fontWeight='bold'>
                  Status
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
                  Payment Method
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
          rowsPerPageOptions={[5, 10, 25]}
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
