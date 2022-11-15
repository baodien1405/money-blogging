import React from "react";
import styled from "styled-components";

const LabelStyled = styled.label`
  font-weight: 600;
  color: ${(props) => props.theme.grayDark};
  cursor: pointer;
`;

function Label({ htmlFor = "", children, ...props }) {
  return (
    <LabelStyled htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyled>
  );
}

export default Label;
