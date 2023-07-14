import styled from 'styled-components'

export const Container = styled.aside`
  background-color: ${({ theme }) => theme.colors.white};

  min-width: 231.15px;

  padding: 2rem 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  div img {
    width: 126px;
    height: 25px;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 60px;
      align-items: center;
    }

    li {
      a {
        width: fit-content;
        position: relative;
        width: 189px;
        height: 45px;

        border-radius: 16px;

        display: flex;
        align-items: center;

        p {
          font-size: 14px;
          font-weight: 400;
          transition: color 0.3s;
          color: ${({ theme }) => theme.colors.gray550};
          font-family: 'Poppins', sans-serif;
        }

        span {
          color: ${({ theme }) => theme.colors.gray550};
        }

        span:first-child {
          padding: 0 15px;
        }

        &.active {
          background-color: ${({ theme }) => theme.colors.yellow};
          span {
            color: ${({ theme }) => theme.colors.white};
          }
          p {
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    overflow-y: auto;
    padding: 0 0;

    div img {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0;
      }

      li {
        a {
          flex-direction: row;
          padding: 0rem;
          width: 100%;

          svg {
            width: 2.5rem;
            height: 2.5rem;
          }

          span:first-child {
            display: flex;
          }

          p {
            display: none;
          }

          &.active {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }

  @media (max-width: 430px) {
    nav {
      li {
        a {
          svg {
            width: 1.5rem;
            height: 1.5rem;
          }
          span:first-child {
            padding: 0 13px;
          }
        }
      }
    }
  }
`
