import styled from 'styled-components'

export const Container = styled.div`
  div {
    &.cards {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.colors.white};
        border-radius: 15px;
        width: 130px;
        height: 130px;
        margin: 0;
      }
    }
    img {
      width: 56px;
      height: 56px;
      margin: 0;
    }
  }

  @media (max-width: 1024px) {
    div {
      &.cards {
        div {
          border-radius: 15px;
          width: 110px;
          height: 110px;
          margin: 0;
        }
      }
      img {
        width: 53px;
        height: 53px;
        margin: 0;
      }
    }
  }

  @media (max-width: 600px) {
    div {
      &.cards {
        justify-content: center;
      }
    }
  }
`
