import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    position: relative;
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 10px;
    img {
      width: 40px;
      height: 40px;
      margin: 0;
    }
  }
`
