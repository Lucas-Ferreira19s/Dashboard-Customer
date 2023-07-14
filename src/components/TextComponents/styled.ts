import styled from 'styled-components'

interface PropsText {
  primary?: boolean
  secudary?: boolean
}

export const Text = styled.p<PropsText>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: ${({ primary }) => (primary ? '18' : '14')}px;

  color: ${({ secudary, theme }) => (secudary ? 'inherit' : theme.colors.gray550)};
`
export const Title = styled.h5<PropsText>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  color: ${({ theme }) => theme.colors.black};
`
