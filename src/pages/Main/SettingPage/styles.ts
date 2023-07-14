import styled from 'styled-components'

export const ContainerHerder = styled.section`
  padding: 2rem 1.875rem 0.2rem 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`
export const MainSettings = styled.div`
  padding: 2rem 1rem;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  margin: auto;

  div {
    &.drawer {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 2rem;

    div {
      &.optionsBar {
        display: none;
      }
      &.drawer {
        display: block;
      }
    }
  }
`
export const Optins = styled.div`
  width: 300px;

  div {
    &.option {
      display: flex;
      gap: 12px;
      padding: 0.5rem;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors.gray100};
      }
    }
  }
`

export const PanelOptions = styled.div`
  padding: 1rem;
  width: 100%;
  div {
    img {
      width: 100px;
      margin-top: 12px;
      border-radius: 8px;
    }
    &.containerProfile {
      display: flex;
      gap: 30px;
      align-items: center;
    }
  }

  @media (max-width: 768px) {
    div {
      &.containerProfile {
        gap: 10px;
        flex-wrap: wrap;
      }
    }
  }
`

export const FormProfile = styled.div`
  div {
    &.containerForm {
      display: flex;
      gap: 30px;
      margin-top: 30px;
      p {
        margin-bottom: 12px;
      }
      div {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    div {
      &.containerForm {
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 10px;
      }
    }
  }
`
