import styled from 'styled-components'

import BgBalnce from '../../assets/balance.png'

interface ButtonProps {
  primary?: boolean
}

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.white};

  width: 370px;
  padding: 2rem 1.3rem;

  div {
    &.title {
      margin: 23px 0 18px 0;
    }
  }
  .maps {
    margin: auto;
    img {
      width: 276px;
    }
  }
  .RightDrawer {
    display: none;
  }
  .line {
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray400};
    margin: 30px 0;
  }

  @media (max-width: 1024px) {
    width: 0px;
    padding: 0rem;
    .RightMenu {
      display: none;
    }
    .RightDrawer {
      display: block;
    }
  }
`

export const Balance = styled.div`
  background-image: url(${BgBalnce});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 276.375px;
  height: 121.605px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;

  @media (max-width: 768px) {
    margin: auto;
    padding: 15px;
    border-radius: 12px;
  }

  p {
    font-size: 12px;
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.white};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .balance {
    align-items: flex-start;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.black};
    padding: 10px 15px;
    h3 {
      font-size: 25px;
    }
  }
`

export const Icon = styled.span`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
`

export const Address = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    margin: 10px 0;
  }
  h4 {
    display: flex;
  }

  .buton {
    width: 60%;
  }
`

export const Button = styled.a<ButtonProps>`
  font-size: 12px;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  cursor: pointer;
  padding: 5px;
  border-color: ${({ primary, theme }) =>
    primary ? theme.colors.yellow300 : theme.colors.gray550};
  background: none;
  color: ${({ primary, theme }) => (primary ? theme.colors.yellow300 : theme.colors.black)};
`

export const PriceDetails = styled.div`
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 1.2rem;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
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

  a {
    border-color: ${({ theme }) => theme.colors.yellow300};
    border-style: solid;
    border-width: 2px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.gray100};
    padding: 10px;

    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 14px;

    margin-bottom: 15px;

    p {
      font-size: 14px;
      margin-bottom: 4px;
      font-weight: 400;
    }

    span {
      margin: 0 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 28px;
      width: 28px;
      border-radius: 5px;
      &.cupon {
        background-color: ${({ theme }) => theme.colors.yellow300};
      }
    }
  }
  .buttons {
    flex-direction: column;
  }

  button {
    border: none;
    background-color: ${({ theme }) => theme.colors.yellow300};
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    padding: 15px;
  }
`
