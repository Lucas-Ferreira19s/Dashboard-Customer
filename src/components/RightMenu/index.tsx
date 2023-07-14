import { useEffect, useState } from 'react'

import { theme } from '../../styles/Theme'
import { SharedH2, SharedH4 } from '../SnackTitle'
import { OrderList } from '../OrderList'
import { TextComponent } from '../TextComponents'

import { UserMenuBar } from '../UserMenuBar'
import * as C from './styles'

import { FaMoneyBillAlt, FaMoneyBillWave } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiCoupon3Fill } from 'react-icons/ri'
import { BsChevronRight } from 'react-icons/bs'
import { DataItems } from '../../data'
import { Items } from '../../types'
import maps from '../../assets/maps.png'
import { Box, Drawer, IconButton, styled } from '@mui/material'
import Divider from '@mui/material/Divider'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

interface PropsMenu {
  menu?: boolean
}

const drawerWidth = 340

const Main = styled('div')({
  transition: 'margin 200ms',
})

const DrawerHeader = styled('div')({
  justifyContent: 'flex-end',
})

export function RightMenu({ menu }: PropsMenu) {
  const [order, setOrder] = useState<Items[]>([])

  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const wines = DataItems.find((it) => it.name === 'Order')

    wines && setOrder(wines.items)
  }, [])

  const Conent = () => {
    return (
      <>
        <UserMenuBar />
        <div className='title'>
          <SharedH2>Your Balance</SharedH2>
        </div>
        {menu ? (
          <div className='maps'>
            <img src={maps} />
          </div>
        ) : (
          <C.Balance>
            <div className='balance'>
              <span>Balance</span>
              <h3>$12.000</h3>
            </div>
            <div>
              <C.Icon>
                <FaMoneyBillAlt color={theme.colors.black} size={20} />
              </C.Icon>
              <p>Top Up</p>
            </div>
            <div>
              <C.Icon>
                <FaMoneyBillWave color={theme.colors.black} size={20} />
              </C.Icon>
              <p>Transfer</p>
            </div>
          </C.Balance>
        )}
        <C.Address>
          <TextComponent text={true}>Your Address</TextComponent>
          <div>
            <SharedH4>
              <HiOutlineLocationMarker color={theme.colors.yellow} size={24} />
              Elm Street, 23
            </SharedH4>
            <C.Button href='#' primary>
              Change
            </C.Button>
          </div>
          <TextComponent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </TextComponent>
          <div className='buton'>
            <C.Button href='#'>Add Details</C.Button>
            <C.Button href='#'>Add Note</C.Button>
          </div>
        </C.Address>
        <div className='title'>
          <SharedH2>Order Menu</SharedH2>
        </div>
        {order.map((item, index) => (
          <div key={index}>
            <OrderList data={item} small />
          </div>
        ))}
        <Divider />
        <C.PriceDetails>
          <div>
            <TextComponent>Service</TextComponent>
            <p>
              +<span>$</span>1.00
            </p>
          </div>
          <div>
            <p className='total'>Total</p>
            <p className='total'>
              <span>$</span>202.00
            </p>
          </div>
          <div className='buttons'>
            <a href='#'>
              <span className='cupon'>
                <RiCoupon3Fill color={theme.colors.white} size={14} />
              </span>
              <p>Have a coupon code?</p>
              <span>
                <BsChevronRight color={theme.colors.black} size={14} />
              </span>
            </a>
            <button>Checkout</button>
          </div>
        </C.PriceDetails>
      </>
    )
  }

  return (
    <C.Container>
      <div className='RightMenu'>
        <Conent />
      </div>
      <div className='RightDrawer'>
        <Box>
          <Drawer
            sx={{
              width: 50,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                padding: '0  1.5rem',
                paddingBottom: '2rem',
                transition: 'width 200ms',
              },
              ...(open ? {} : { display: 'none' }),
            }}
            variant='persistent'
            anchor='right'
            open={open}
          >
            <DrawerHeader>
              <IconButton
                onClick={handleDrawerClose}
                style={{ backgroundColor: 'rgb(245, 245, 245)', margin: '10px 0' }}
              >
                <ChevronRightIcon color='secondary' />
              </IconButton>
            </DrawerHeader>

            <Conent />
          </Drawer>

          <Main>
            <DrawerHeader>
              <IconButton
                onClick={handleDrawerOpen}
                style={{ position: 'absolute', top: 33, right: 15, backgroundColor: 'white' }}
              >
                <ChevronLeftIcon color='secondary' />
              </IconButton>
            </DrawerHeader>
          </Main>
        </Box>
      </div>
    </C.Container>
  )
}
