import styled from 'styled-components'
export const Content = styled.form`
  margin-bottom: 10%;

  input {
    border: none;
    height: 40px;
    width: 260px;
  }
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    border-bottom: 4px solid var(--more-dark);
  }
  button {
    background-color: transparent;
    border: none;
    transition-duration: 0.4s;
    position: relative;
    top: 12px;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--button-search);
  }

  img {
    width: 35px;
  }
`
