import * as C from './styled'

import { SharedH4 } from '../../components/SnackTitle'
import { TextComponent, TitleComponent } from '../../components/TextComponents'
import { OrderList } from '../../components/OrderList'
import { Reviews } from '../Reviews'
import { ButonCompleted } from '../Butons'

import pizza from '../../assets/Dishes/pizza.jpg'
import pizza2 from '../../assets/Dishes/pizza2.jpg'

const data = [
  {
    id: 1,
    title: 'Pizza',
    img: pizza,
  },
  {
    id: 2,
    title: 'Pizza Queijo',
    img: pizza2,
  },
]

export function CardOrder() {
  return (
    <C.ContainerCard>
      <div className='head'>
        <SharedH4>Order #N</SharedH4>
        <TextComponent>Nov 11, 2021 , 18:38 PM</TextComponent>
        <div className='line' />
      </div>
      <TitleComponent>Fast Food Resto</TitleComponent>
      <Reviews />
      <div className='line' />
      <C.DivInfo>
        <div>
          <TextComponent>Delivery Time </TextComponent>
          <p className='text'>10 Min</p>
        </div>
        <div>
          <TextComponent>Distance</TextComponent>
          <p className='text'>2.5 km</p>
        </div>
      </C.DivInfo>
      <div className='line' />
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <OrderList data={item} />
          </div>
        ))}
      </div>
      <div className='line' />
      <C.Price>
        <div>
          <p className='total'>Total</p>
          <p className='total'>
            <span>$</span>202.00
          </p>
        </div>
      </C.Price>
      <div>
        <ButonCompleted />
      </div>
    </C.ContainerCard>
  )
}
