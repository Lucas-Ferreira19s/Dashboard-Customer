import { ReactNode } from 'react'
import { Title, TitleSub, Titleh4 } from './styles'

interface TitleProps {
  children: ReactNode
  color?: boolean
}

export function SnackTitle({ children }: TitleProps) {
  return <Title>{children}</Title>
}

export function SharedH2({ children }: TitleProps) {
  return <TitleSub>{children}</TitleSub>
}

export function SharedH4({ children, color }: TitleProps) {
  return <Titleh4 secudary={color}>{children}</Titleh4>
}
