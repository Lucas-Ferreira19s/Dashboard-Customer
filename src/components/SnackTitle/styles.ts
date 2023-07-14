import styled from 'styled-components'

interface PropsText {
  secudary?: boolean
}

export const Title = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 30px;
    justify-content: center;
  }
`
export const TitleSub = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;

  /*@media (max-width: 720px) {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    justify-content: center;
  }*/
`

export const Titleh4 = styled.h4<PropsText>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: ${({ secudary, theme }) => (secudary ? 'inherit' : theme.colors.black)};
  margin: 0;
  display: flex;

  /*@media (max-width: 720px) {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    justify-content: center;
  }*/
`
