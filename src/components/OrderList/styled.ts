import styled from 'styled-components'

interface PropSize {
  small?: boolean
}

export const Order = styled.div<PropSize>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.black};
  margin: 8px 0;

  .product {
    display: flex;
  }
  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.gray550};
  }
  .img {
    width: ${({ small }) => (small ? '64' : '80')}px;
    margin: 0;
    margin-right: 12px;
  }
  h4 {
    font-size: ${({ small }) => (small ? '14' : '18')}px;
  }
  p {
    font-size: ${({ small }) => (small ? '14' : '18')}px;
    font-weight: 600;
    span {
      color: ${({ theme }) => theme.colors.yellow300};
      font-size: ${({ small }) => (small ? '14' : '18')}px;
    }
  }
`
