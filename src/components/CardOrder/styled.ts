import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 290px;
  background: ${({ theme }) => theme.colors.white};
  padding: 25px;

  border-radius: 15px;

  @media (max-width: 1440px) {
    width: 270px;
  }

  @media (max-width: 1024px) {
    width: 300px;
    margin: auto;
  }

  .head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .line {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray400};
    margin: 20px 0;
  }
`
export const DivInfo = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }
  .text {
    color: #000;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
`
export const Price = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.black};
  }
  p {
    font-size: 14px;
    font-weight: 600;
    &.total {
      font-size: 18px;
    }
    span {
      color: ${({ theme }) => theme.colors.yellow300};
    }
  }
`
