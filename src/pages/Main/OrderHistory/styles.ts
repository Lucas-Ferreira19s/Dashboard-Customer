import styled from 'styled-components'

export const ContainerHerder = styled.section`
  padding: 2rem 1.875rem 0.2rem 1.875rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`

export const MainHistory = styled.div`
  padding: 0.5rem 1rem;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem 2rem;
  }
`
