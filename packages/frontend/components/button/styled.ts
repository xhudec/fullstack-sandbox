import styled from 'styled-components'

export const Button = styled.button`
  padding: 8px 16px;
  background-color: white;
  color: darkblue;
  border: 2px solid darkblue;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
    color: white;
    border-color: darkblue;
  }

  &:active {
    background-color: blue;
    border-color: blue;
  }

  &:disabled {
    color: #343434;
    border-color: #343434;
    background-color: white;
    cursor: not-allowed;
  }

  &:disabled:hover {
    color: #555;
    border-color: #555;
    background-color: white;
    cursor: not-allowed;
  }

  transition: background-color 200ms ease-in-out, color 200ms ease-in-out,
    border-color 200ms ease-in-out, transform 200ms ease-in-out;
`
