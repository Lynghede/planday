import styled from "styled-components";

const Input = styled.input`
  color: var(--color-light-green);
  border: 1px solid var(--color-light-green);
  background: transparent;
  border-radius: 1rem;
  line-height: 2;
  display: block;
  text-align: center;
  /* margin: 1.8em 0; */
  font-weight: 900;
  letter-spacing: 0.2ch;

  ::placeholder {
    text-transform: uppercase;
    color: inherit;
  }
  :focus {
    outline: none;
    border-color: var(--color-green);
  }

  :-webkit-autofill {
    box-shadow: inset 0 0 0 32px var(--color-green) !important;
    -webkit-text-fill-color: white;
  }

  :disabled {
    opacity: 60%;
  }
`;
export default Input;
