import React from "react";
import styled from "styled-components";

export type ButtonProps = {
  label: string;
};

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const Button = ({ label }: ButtonProps) => {
  return (
    <>
      <StyledButton>{label}</StyledButton>
    </>
  );
};

export default Button;
