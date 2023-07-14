import styled from 'styled-components'
import Banner from '../../../assets/banner.png'

export const ContainerHerder = styled.div`
  display: flex;
`

export const MainDashboard = styled.section`
  display: block;
  width: 100%;
  padding: 2rem 1.5rem;

  div {
    &.mb {
      margin-bottom: 15px;
    }
    &.baner {
      color: ${({ theme }) => theme.colors.white};
      h2 {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        max-width: 550px;
      }
      margin-bottom: 20px;
      margin-top: 15px;

      background-image: url(${Banner});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      border-radius: 20px;

      width: 100%;
      height: 200px;
      padding: 30px;
    }
  }

  @media (max-width: 1024px) {
    div {
      &.head {
        margin-right: 35px;
      }
    }
  }
`

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
  }
`
