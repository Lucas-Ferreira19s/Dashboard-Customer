import { Head } from '../../../components/Head'
import { SharedH2, SnackTitle } from '../../../components/SnackTitle'

import { UserMenuBar } from '../../../components/UserMenuBar'

import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SecurityIcon from '@mui/icons-material/Security'
import PaymentIcon from '@mui/icons-material/Payment'
import HelpIcon from '@mui/icons-material/Help'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'

import profile from '../../../assets/profile/profile.jpg'

import { TextComponent } from '../../../components/TextComponents'
import { Titleh4 } from '../../../components/SnackTitle/styles'

import * as C from './styles'
import { Button, TextField } from '@mui/material'
import { MiniDrawer } from './drawer'

export default function Setting() {
  return (
    <>
      <Head title='Setting' />
      <C.ContainerHerder>
        <SnackTitle>Settings</SnackTitle>
        <div>
          <UserMenuBar />
        </div>
      </C.ContainerHerder>
      <C.MainSettings>
        <div className='optionsBar'>
          <C.Optins>
            <div className='option'>
              <div>
                <PersonIcon />
              </div>
              <div>
                <Titleh4>Account</Titleh4>
                <TextComponent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </TextComponent>
              </div>
            </div>
            <div className='option'>
              <div>
                <NotificationsIcon />
              </div>
              <div>
                <Titleh4>Notification</Titleh4>
                <TextComponent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </TextComponent>
              </div>
            </div>
            <div className='option'>
              <div>
                <SecurityIcon />
              </div>
              <div>
                <Titleh4>Security</Titleh4>
                <TextComponent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </TextComponent>
              </div>
            </div>
            <div className='option'>
              <div>
                <PaymentIcon />
              </div>
              <div>
                <Titleh4>Payment</Titleh4>
                <TextComponent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </TextComponent>
              </div>
            </div>
            <div className='option'>
              <div>
                <HelpIcon />
              </div>
              <div>
                <Titleh4>Help</Titleh4>
                <TextComponent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </TextComponent>
              </div>
            </div>
            <div className='option'>
              <div>
                <AdminPanelSettingsIcon />
              </div>
              <div>
                <Titleh4>Privacy Policy</Titleh4>
                <TextComponent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </TextComponent>
              </div>
            </div>
          </C.Optins>
        </div>
        <div className='drawer'>
          <MiniDrawer />
        </div>
        <C.PanelOptions>
          <SharedH2>Account</SharedH2>
          <TextComponent text>Photo Profile</TextComponent>
          <div className='containerProfile'>
            <div>
              <img src={profile} alt='' />
            </div>
            <div>
              <Button color='inherit' variant='outlined'>
                Change photo
              </Button>
            </div>
            <div>
              <Button color='inherit' variant='text'>
                Remove
              </Button>
            </div>
          </div>
          <C.FormProfile>
            <div className='containerForm'>
              <div>
                <TextComponent text>Username</TextComponent>
                <TextField
                  fullWidth
                  disabled
                  id='outlined-multiline-flexible'
                  label='Jordan Nico'
                  color='info'
                  size='small'
                />
              </div>
              <div>
                <TextComponent text>Phone</TextComponent>
                <TextField
                  fullWidth
                  disabled
                  id='outlined-multiline-flexible'
                  label='+123456789'
                  color='info'
                  size='small'
                />
              </div>
            </div>
            <div className='containerForm'>
              <div>
                <TextComponent text>Email</TextComponent>
                <TextField
                  fullWidth
                  disabled
                  id='outlined-multiline-flexible'
                  label='ordanico@mail.com'
                  color='info'
                  size='small'
                  type='email'
                />
              </div>
              <div>
                <TextComponent text>Password</TextComponent>
                <TextField
                  fullWidth
                  disabled
                  id='outlined-multiline-flexible'
                  label='••••••••'
                  type='password'
                  color='info'
                  size='small'
                />
              </div>
            </div>
            <div className='containerForm'>
              <div>
                <TextComponent text>Address Details</TextComponent>
                <TextField
                  fullWidth
                  disabled
                  label='Franklin Avenue Street 
                  New York, ABC 5562
                  United State'
                  color='info'
                  size='small'
                  multiline
                  rows={2}
                />
              </div>
            </div>
          </C.FormProfile>
        </C.PanelOptions>
      </C.MainSettings>
    </>
  )
}
