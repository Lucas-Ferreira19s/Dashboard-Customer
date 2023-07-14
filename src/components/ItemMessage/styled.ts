import styled from 'styled-components'

export const ItemConvertion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 0;

  cursor: pointer;

  div {
    p {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.gray550};
    }
    img {
      width: 50px;
      margin-right: 12px;
    }
    &.product {
      display: flex;
      align-items: center;
    }
    &.info {
      display: flex;
      flex-direction: column;
      align-items: end;
    }
  }
`
