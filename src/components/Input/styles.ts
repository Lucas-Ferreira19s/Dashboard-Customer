import styled from 'styled-components'

interface PropsDirection {
  direction?: boolean
}

export const InputContainer = styled.div<PropsDirection>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ direction }) => (direction ? 'column' : 'row')};
  flex: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    flex: none;
  }

  div {
    display: flex;
    align-items: center;
    padding: 10px;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 12px;
    width: 384px;
    height: 45px;
    margin-top: ${({ direction }) => (direction ? '20' : '0')}px;

    @media (max-width: 1024px) {
      width: 340px;
    }
    @media (max-width: 768px) {
      margin-top: 20px;
    }
    @media (max-width: 768px) {
      width: 260px;
    }
  }

  input {
    border: none;
    width: 100%;
    padding-left: 8px;
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray550};
    }
    &:focus {
      outline: none;
    }
  }
`
