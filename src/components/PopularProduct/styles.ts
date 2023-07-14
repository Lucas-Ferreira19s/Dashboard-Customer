import styled from 'styled-components'

interface PropsDisplay {
  display?: boolean
  favority?: boolean
}

export const Container = styled.div<PropsDisplay>`
  color: #000;
  background: ${({ theme: theme }) => theme.colors.white};
  border-radius: 18px;
  width: 250px;
  height: ${({ favority }) => (favority ? '288' : '245')}px;
  padding: 20px;
  margin: 10px 10px;
  div {
    margin: 0;
  }

  @media (max-width: 1024px) {
    width: 220px;
    padding: 18px;
    margin: 10px 10px;
  }

  @media (max-width: 430px) {
    width: 300px;
  }
`
export const ImgIcon = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  span {
    position: absolute;
    font-size: 12px;
    color: ${({ theme: theme }) => theme.colors.white};
    &.off {
      left: -20px;
      top: 0;
      background: ${({ theme: theme }) => theme.colors.red};
      padding: 5px 17px 5px 9px;
      border-radius: 0 5px 5px 0;
    }
    &.heart {
      right: 25px;
      top: -7px;
    }
  }
  img {
    margin-bottom: 10px;
    width: 150px;
  }

  @media (max-width: 1024px) {
    img {
      width: 130px;
    }
  }
`

export const FooterCard = styled.div<PropsDisplay>`
  display: ${({ display }) => (display ? 'block' : 'flex')};
  justify-content: space-between;
  align-items: center;

  div {
    &.display {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &.line {
      width: 100%;
      height: 1px;
      background: ${({ theme }) => theme.colors.gray400};
      margin: 10px 0;
    }
    &.plus {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ theme: theme }) => theme.colors.yellow300};
      border-radius: 8px;
      width: 40px;
      height: 40px;

      cursor: pointer;

      &:hover {
        transition: all 0.4s ease-in-out 0s;
        opacity: 0.5;
      }
    }
  }

  p {
    font-size: 16px;
    font-weight: 600;
    span {
      color: ${({ theme: theme }) => theme.colors.yellow300};
    }
  }
`

export const FooterProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    span {
      background-color: ${({ theme: theme }) => theme.colors.gray550};
      width: 4px;
      height: 4px;
      margin: 0 3px;
      border-radius: 50%;
    }
    p {
      font-size: 12px;
      color: ${({ theme: theme }) => theme.colors.gray550};
    }
  }
`
