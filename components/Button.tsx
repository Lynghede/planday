import styled from "styled-components";

interface ButtonProps {
  active?: boolean;
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  font-size: 1em;
  font-weight: thin;
  border: 1px solid var(--color-light-green);
  border-radius: 1rem;
  padding: 0.7rem 1rem;
  color: ${(p) =>
    p.active ? "var(--color-light-purple)" : "var(--color-light-green)"};
  background-color: ${(p) =>
    p.active ? "var(--color-light-green)" : "transparent"};

  transition: transform 0.2s;
  :hover {
    transform: scale(1.01);
    color: var(--color-light-purple);
    background: var(--color-light-green);
  }
`;

export default Button;
