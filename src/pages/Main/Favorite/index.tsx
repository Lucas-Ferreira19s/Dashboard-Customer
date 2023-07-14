import { useEffect, useState } from 'react'
import { Head } from '../../../components/Head'
import { Input } from '../../../components/Input'

import { ProductFavorite } from '../../../components/PopularProduct'
import { UserMenuBar } from '../../../components/UserMenuBar'

import { DataItems } from '../../../data'

import * as C from './styles'
import { Items } from '../../../types'
import { UserMobile } from '../../../components/UserMenuBar/UserMobile'

export default function Favorite() {
  const [favorite, setFavorite] = useState<Items[]>([])

  useEffect(() => {
    const wines = DataItems.find((it) => it.name === 'Favorite')

    wines && setFavorite(wines.items)
  }, [])

  return (
    <>
      <Head title='Favorite' />
      <C.ContainerHerder>
        <Input placeholderProps='What do you want eat today...' titleProps='Favorite Menu' flex />
        <div className='userMenu'>
          <UserMenuBar />
        </div>
        <div className='userMobile'>
          <UserMobile />
        </div>
      </C.ContainerHerder>
      <C.MainFavorite>
        {favorite.map((item, index) => (
          <div key={index}>
            <ProductFavorite data={item} />
          </div>
        ))}
      </C.MainFavorite>
    </>
  )
}
