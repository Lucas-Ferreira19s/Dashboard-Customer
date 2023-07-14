import { ReactNode } from 'react'
import { Text, Title } from './styled'

interface TitleProps {
  children: ReactNode
  text?: boolean
  color?: boolean
}

export function TextComponent({ children, text, color }: TitleProps) {
  return (
    <Text primary={text} secudary={color}>
      {children}
    </Text>
  )
}

export function TitleComponent({ children }: TitleProps) {
  return <Title>{children}</Title>
}
