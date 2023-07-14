import styled from 'styled-components'

export const Review = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  span {
    background-color: ${({ theme: theme }) => theme.colors.gray550};
    width: 4px;
    height: 4px;
    margin: 0 3px;
    border-radius: 50%;
  }
`
