import { InputContainer } from './styles'
import { IoSearch } from 'react-icons/io5'

import { theme } from '../../styles/Theme'
import { SnackTitle } from '../SnackTitle'

interface TitleProps {
  placeholderProps: string
  titleProps: string
  flex?: boolean
}
export function Input({ placeholderProps, titleProps, flex }: TitleProps) {
  return (
    <InputContainer direction={flex}>
      <SnackTitle>{titleProps}</SnackTitle>
      <div>
        <IoSearch size={20} color={theme.colors.yellow} />
        <input type='text' placeholder={placeholderProps} />
      </div>
    </InputContainer>
  )
}
