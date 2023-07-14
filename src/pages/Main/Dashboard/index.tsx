import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Input } from '../../../components/Input'
import { RightMenu } from '../../../components/RightMenu'
import { Category } from '../../../components/Category'
import { SharedH2 } from '../../../components/SnackTitle'

import * as C from './styles'
import { PopularProduct, Product } from '../../../components/PopularProduct'

import { DataItems } from '../../../data'
import { Items } from '../../../types'

export default function Dashboard() {
  const [popular, setPopular] = useState<Items[]>([])
  const [product, setProduct] = useState<Items[]>([])

  useEffect(() => {
    const wines = DataItems.find((it) => it.name === 'Popular')
    const beers = DataItems.find((it) => it.name === 'Product')

    wines && setPopular(wines.items)
    beers && setProduct(beers.items)
  }, [])

  return (
    <>
      <Head title='Dashboard' />
      <C.ContainerHerder>
        <C.MainDashboard>
          <div className='head'>
            <Input placeholderProps='What do you want eat today...' titleProps='Hello, Samantha' />
          </div>
          <div className='baner'>
            <h2>
              Get Discount Voucher
              <br /> Up To 20%{' '}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </p>
          </div>
          <div className='mb'>
            <SharedH2>Category</SharedH2>
          </div>
          <div className='mb'>
            <Category />
          </div>
          <div className='mb'>
            <SharedH2>Popular Dishes</SharedH2>
          </div>
          <C.ContainerCard>
            {popular.map((item, index) => (
              <div key={index}>
                <PopularProduct data={item} />
              </div>
            ))}
          </C.ContainerCard>
          <div className='mb'>
            <SharedH2>Recent Order</SharedH2>
          </div>
          <C.ContainerCard>
            {product.map((item, index) => (
              <div key={index}>
                <Product data={item} />
              </div>
            ))}
          </C.ContainerCard>
        </C.MainDashboard>
        <RightMenu />
      </C.ContainerHerder>
    </>
  )
}
