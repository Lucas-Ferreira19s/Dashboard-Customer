import { Review } from './styles'
import { AiFillStar } from 'react-icons/ai'
import { theme } from '../../styles/Theme'
import { TextComponent } from '../TextComponents'

export function Reviews() {
  return (
    <Review>
      <AiFillStar size={15} color={theme.colors.yellow} />
      <TextComponent>5.0</TextComponent>
      <span>.</span>
      <TextComponent>1k+ Reviews</TextComponent>
    </Review>
  )
}
