import { useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai'
import { Head } from '../../../components/Head'
import { SharedH4, SnackTitle } from '../../../components/SnackTitle'
import { UserMenuBar } from '../../../components/UserMenuBar'

import * as C from './styles'
import { theme } from '../../../styles/Theme'
import { IoSearch } from 'react-icons/io5'

import { ItemMessagem } from '../../../components/ItemMessage'

import CallOutlinedIcon from '@mui/icons-material/CallOutlined'
import { Badge, Button } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AttachmentIcon from '@mui/icons-material/Attachment'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Avatar from '@mui/material/Avatar'

import Bg from '../../../assets/bg.png'
import { UserMobile } from '../../../components/UserMenuBar/UserMobile'

export default function Message() {
  const [conversation, setConversation] = useState(false)

  function HandleConversation() {
    setConversation(!conversation)
  }

  return (
    <>
      <Head title='Message' />
      <C.Head>
        <SnackTitle>Message</SnackTitle>
        <div className='userMenu'>
          <UserMenuBar />
        </div>
        <div className='userMobile'>
          <UserMobile />
        </div>
      </C.Head>
      <C.Container>
        <C.Conversations display={conversation}>
          <C.Input>
            <div className='input'>
              <IoSearch size={20} color={theme.colors.yellow} />
              <input type='text' placeholder='Search here...' />
            </div>
            <div className='plus'>
              <AiOutlinePlus color={theme.colors.white} size={23} />
            </div>
          </C.Input>
          <SharedH4>Your Chat</SharedH4>
          <div onClick={HandleConversation}>
            <ItemMessagem />
          </div>
          <ItemMessagem />
          <ItemMessagem />
          <ItemMessagem />
          <ItemMessagem />
          <ItemMessagem />
          <Button variant='outlined' color='secondary' sx={{ width: '100%', borderWidth: 'px' }}>
            View More
          </Button>
        </C.Conversations>
        <C.ContainerMessage display={conversation}>
          <C.HeadMessages>
            <div className='header' onClick={HandleConversation}>
              <div className='previous'>
                <Avatar sx={{ width: 26, height: 26 }}>
                  <ChevronLeftIcon />
                </Avatar>
              </div>
              <Badge
                color='success'
                badgeContent=' '
                variant='dot'
                sx={{
                  width: '60px',
                  height: '60px',
                  mr: '20px',
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <img src={Bg} className='img' />
              </Badge>
              <div>
                <h3>Driver #2</h3>
                <p>Online</p>
              </div>
            </div>
            <div>
              <CallOutlinedIcon />
              <MoreHorizIcon className='icons' />
            </div>
          </C.HeadMessages>
          <hr />

          <div className='flexEnd'>
            <C.Messages>
              <div className='driver'>
                <Badge
                  color='success'
                  badgeContent=' '
                  variant='dot'
                  sx={{
                    width: '50px',
                    height: '50px',
                    mb: '20px',
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                >
                  <img src={Bg} className='img' />
                </Badge>
                <div>
                  <SharedH4>Driver</SharedH4>
                  <div className='msgDriver'>
                    <p>Hello !</p>
                  </div>
                  <div className='msgDriver'>
                    <p>Your order according to application yes?</p>
                  </div>
                  <p className='time'>12:45 PM</p>
                </div>
              </div>
              <div className='user'>
                <Badge
                  color='success'
                  badgeContent=' '
                  variant='dot'
                  sx={{
                    width: '50px',
                    height: '50px',
                    mb: '20px',
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <img src={Bg} className='img' />
                </Badge>
                <div>
                  <SharedH4>You</SharedH4>
                  <div className='msgUser'>
                    <p>Hello</p>
                  </div>
                  <div className='msgUser'>
                    <p>Yes, my order according to application. Thank you</p>
                  </div>
                  <p className='time'>12:45 PM</p>
                </div>
              </div>
            </C.Messages>

            <C.foodMessage>
              <input type='text' placeholder='Write your message...' />
              <div>
                <AttachmentIcon className='icons' />
                <MoreHorizIcon className='icons' />
                <Button
                  variant='contained'
                  color='secondary'
                  endIcon={<SendOutlinedIcon />}
                  sx={{ color: 'white' }}
                >
                  Send
                </Button>
              </div>
            </C.foodMessage>
          </div>
        </C.ContainerMessage>
      </C.Container>
    </>
  )
}
