import styled from 'styled-components'

interface Props {
  display?: boolean
}

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem 1.875rem;

  div {
    &.userMobile {
      display: none;
    }
  }

  @media (max-width: 460px) {
    div {
      &.userMobile {
        display: block;
      }
      &.userMenu {
        display: none;
      }
    }
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1.875rem 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 30px;

  @media (max-width: 1024px) {
    column-gap: 10px;
    padding: 1rem 1rem;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 0 1.875rem 2rem;
  }

  @media (max-width: 450px) {
    padding: 0 1rem 2rem;
  }
`

export const Conversations = styled.div<Props>`
  background: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 15px;

  h4 {
    color: ${({ theme }) => theme.colors.gray550};
    margin: 5px 0;
    font-weight: 500;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    display: ${({ display }) => (display ? 'none' : 'block')};
  }
`

export const Input = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 10px;
  }
  div {
    &.input {
      display: inherit;
      align-items: center;
      padding: 10px;
      background: ${({ theme }) => theme.colors.gray100};
      border-radius: 12px;
      width: 100%;
      height: 45px;
    }
    &.plus {
      display: inherit;
      justify-content: center;
      align-items: center;
      background: ${({ theme: theme }) => theme.colors.yellow300};
      border-radius: 8px;
      width: 40px;
      height: 40px;

      cursor: pointer;
    }
  }

  input {
    border: none;
    width: 100%;
    padding-left: 8px;
    background: ${({ theme }) => theme.colors.gray100};
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray550};
    }
    &:focus {
      outline: none;
    }
  }
`

export const ContainerMessage = styled.div<Props>`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  border-radius: 15px;

  @media (max-width: 768px) {
    display: ${({ display }) => (display ? 'block' : 'none')};
  }

  hr {
    margin: 20px 0;
  }

  svg {
    &.icons {
      color: ${({ theme }) => theme.colors.gray550};
    }
  }

  div {
    &.flexEnd {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 440px;
    }
  }
`

export const HeadMessages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    &.header {
      display: flex;
    }
    &.previous {
      margin: 15px 8px 0 0;
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
    }
  }
`

export const Messages = styled.div`
  h4 {
    font-size: 1rem;
  }
  div {
    &.driver {
      display: flex;
      align-items: end;
      gap: 12px;
    }
    &.msgDriver {
      background: #fdedbf;
      margin-top: 10px;
      padding: 15px;
      border-radius: 9px;
      width: fit-content;
    }
    p {
      font-size: 12px;
      &.time {
        color: ${({ theme }) => theme.colors.gray550};
      }
    }
    &.user {
      display: flex;
      justify-content: end;
      align-items: end;
      flex-direction: row-reverse;
      text-align: end;
      gap: 12px;
      h4 {
        display: flex;
        justify-content: end;
      }
    }
    &.msgUser {
      background: ${({ theme }) => theme.colors.yellow300};
      margin-top: 10px;
      margin-left: auto;
      padding: 15px;
      border-radius: 9px;
      width: fit-content;
      p {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`

export const foodMessage = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray100};
  justify-content: space-between;
  padding: 10px 18px;
  border-radius: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  input {
    border: none;
    width: 100%;
    padding-left: 8px;
    background: ${({ theme }) => theme.colors.gray100};
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray550};
    }
    &:focus {
      outline: none;
    }
  }
`
