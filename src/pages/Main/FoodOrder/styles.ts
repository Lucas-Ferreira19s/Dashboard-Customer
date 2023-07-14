import styled from 'styled-components'

export const ContainerHerder = styled.div`
  display: flex;
`

export const MainDashboard = styled.section`
  display: block;
  width: 100%;
  padding: 2rem 1.875rem;

  @media (max-width: 1440px) {
    padding: 2rem 1rem;
  }

  .headFood {
    margin-right: 45px;
  }

  .main {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`
