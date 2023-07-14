import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

import { Container } from './styles'
import profile from '../../assets/profile/profile.jpg'

import { Avatar, Badge } from '@mui/material'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'

export function UserMenuBar() {
  return (
    <Container>
      <div>
        <span>
          <Badge color='secondary' variant='dot'>
            <ForumOutlinedIcon />
          </Badge>
        </span>
        <span>
          <Badge color='secondary' variant='dot'>
            <NotificationsNoneOutlinedIcon />
          </Badge>
        </span>
        <span>
          <Badge color='secondary'>
            <SettingsOutlinedIcon />
          </Badge>
        </span>
      </div>
      <div>
        <Avatar alt='Remy Sharp' src={profile} />
      </div>
    </Container>
  )
}
