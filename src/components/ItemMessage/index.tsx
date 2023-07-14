import { ItemConvertion } from './styled'

import Bg from '../../assets/bg.png'

import DoneAllIcon from '@mui/icons-material/DoneAll'

export function ItemMessagem() {
  return (
    <ItemConvertion>
      <div className='product'>
        <img src={Bg} className='img' />
        <div>
          <h5>Driver #1</h5>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      <div className='info'>
        <p>12:45 PM</p>
        <DoneAllIcon fontSize='small' sx={{ color: '#2D9CDB' }} />
      </div>
    </ItemConvertion>
  )
}
