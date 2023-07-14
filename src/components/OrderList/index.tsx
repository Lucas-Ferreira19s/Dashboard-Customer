import { Order } from './styled'

import Bg from '../../assets/bg.png'
import { memo } from 'react'
import { Items } from '../../types'

interface PropSize {
  small?: boolean
  text?: string
  img?: string
}

interface CardProductItems {
  data: Items
  small?: boolean
}

// eslint-disable-next-line react/display-name
export const OrderList = memo(({ data, small }: CardProductItems) => {
  return (
    <Order small={small}>
      <div className='product'>
        <img src={data.img} className='img' />
        <div>
          <h4>{data.title}</h4>
          <span>x1</span>
        </div>
      </div>
      <div>
        <p>
          +<span>$</span>5.59
        </p>
      </div>
    </Order>
  )
})

export function HistoryList({ small }: PropSize) {
  return (
    <Order small={small}>
      <div className='product'>
        <img src={Bg} className='img' />
        <div>
          <h4>Fish Burger</h4>
          <span>x1</span>
        </div>
      </div>
    </Order>
  )
}
