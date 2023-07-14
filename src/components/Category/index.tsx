import { Container } from './styles'

import Bakery from '../../assets/icon/Baked.png'
import Burger from '../../assets/icon/Burger.png'
import Beverage from '../../assets/icon/Coffee.png'
import Chicker from '../../assets/icon/Chicken.png'
import Pizza from '../../assets/icon/Fast.png'
import Seafood from '../../assets/icon/Fish.png'

import { TextComponent } from '../../components/TextComponents'

export function Category() {
  return (
    <Container>
      <div className='cards'>
        <div>
          <img src={Bakery} alt='Bakery' />
          <TextComponent text={true}>Bakery</TextComponent>
        </div>
        <div>
          <img src={Burger} alt='Burger' />
          <TextComponent text={true}>Burger</TextComponent>
        </div>
        <div>
          <img src={Beverage} alt='Beverage' />
          <TextComponent text={true}>Beverage</TextComponent>
        </div>
        <div>
          <img src={Chicker} alt='Chicker' />
          <TextComponent text={true}>Chicker</TextComponent>
        </div>
        <div>
          <img src={Pizza} alt='Pizza' />
          <TextComponent text={true}>Pizza</TextComponent>
        </div>
        <div>
          <img src={Seafood} alt='Seafood' />
          <TextComponent text={true}>Seafood</TextComponent>
        </div>
      </div>
    </Container>
  )
}
