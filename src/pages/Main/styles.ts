import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;

  > section {
    flex: 1;
    width: 100%;
    height: 100vh;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin-bottom: 3.3rem;
    }
  }
`
