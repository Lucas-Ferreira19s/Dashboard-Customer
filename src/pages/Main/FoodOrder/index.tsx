import { Head } from '../../../components/Head'
import { Input } from '../../../components/Input'
import { RightMenu } from '../../../components/RightMenu'
import { CardOrder } from '../../../components/CardOrder'

import * as C from './styles'

export default function FoodOrder() {
  return (
    <>
      <Head title='FoodOrder' />
      <C.ContainerHerder>
        <C.MainDashboard>
          <div className='headFood'>
            <Input placeholderProps='Search order' titleProps='Food Order' />
          </div>
          <div className='main'>
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
            <CardOrder />
          </div>
        </C.MainDashboard>
        <RightMenu menu />
      </C.ContainerHerder>
    </>
  )
}
