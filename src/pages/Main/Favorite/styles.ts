import styled from 'styled-components'

export const ContainerHerder = styled.section`
  padding: 2rem 1.875rem 0.2rem 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

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

  @media (max-width: 350px) {
    padding: 2rem 0.75rem 0.2rem;
  }
`

export const MainFavorite = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 1.875rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`

export const ContainerCard = styled.section``
