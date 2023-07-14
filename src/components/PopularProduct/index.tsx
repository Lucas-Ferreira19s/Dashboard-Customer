/* eslint-disable react/display-name */
import {
  // AiOutlineHeart,
  // AiOutlineStar,
  AiOutlinePlus,
} from 'react-icons/ai'
import { Container, FooterCard, FooterProduct, ImgIcon } from './styles'

import { theme } from '../../styles/Theme'

import { TitleComponent } from '../TextComponents'
import { Reviews } from '../Reviews'
import { Checkbox, Rating, Stack } from '@mui/material'
import { FavoriteBorder } from '@mui/icons-material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Items } from '../../types'
import { memo } from 'react'

interface CardProductItems {
  data: Items
}

export const PopularProduct = memo(({ data }: CardProductItems) => {
  return (
    <Container>
      <ImgIcon>
        <img src={data.img} alt='' />
        <span className='off'>15% Off</span>
        <span className='heart'>
          <Checkbox icon={<FavoriteBorder color='info' />} checkedIcon={<FavoriteIcon />} />
        </span>
      </ImgIcon>

      <div>
        <Stack spacing={1}>
          <Rating name='half-rating' defaultValue={5} precision={0.5} />
        </Stack>
      </div>
      <FooterCard>
        <div>
          <TitleComponent>{data.title}</TitleComponent>
          <p>
            <span>$</span>
            5.59
          </p>
        </div>
        <div className='plus'>
          <AiOutlinePlus color={theme.colors.white} size={23} />
        </div>
      </FooterCard>
    </Container>
  )
})

export const Product = memo(({ data }: CardProductItems) => {
  return (
    <Container>
      <ImgIcon>
        <img src={data.img} alt='' />
        <span className='heart'>
          <Checkbox icon={<FavoriteBorder color='info' />} checkedIcon={<FavoriteIcon />} />
        </span>
      </ImgIcon>
      <FooterCard>
        <FooterProduct>
          <TitleComponent>{data.title}</TitleComponent>
          <p>
            <span>$</span>
            5.59
          </p>
          <div>
            <p>4.97km</p>
            <span />
            <p>21 min</p>
          </div>
        </FooterProduct>
      </FooterCard>
    </Container>
  )
})

export const ProductFavorite = memo(({ data }: CardProductItems) => {
  return (
    <Container favority>
      <ImgIcon>
        <img src={data.img} alt='' />
        <span className='heart'>
          <Checkbox
            icon={<FavoriteIcon color='error' />}
            checkedIcon={<FavoriteBorder color='info' />}
          />
        </span>
      </ImgIcon>
      <FooterCard display>
        <TitleComponent>{data.title}</TitleComponent>
        <Reviews />
        <div className='line' />
        <div className='display'>
          <div>
            <p>
              <span>$</span>
              5.59
            </p>
          </div>
          <div className='plus'>
            <AiOutlinePlus color={theme.colors.white} size={23} />
          </div>
        </div>
      </FooterCard>
    </Container>
  )
})
