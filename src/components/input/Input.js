import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";

const InputStyled = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    font-weight: 500;
    border: 1px solid transparent;
    border-radius: 8px;
    background-color: ${(props) => props.theme.grayLight};
    transition: all 0.2s linear;
  }

  input:focus {
    background-color: white;
    border-color: ${(props) => props.theme.primary};
  }

  input::-webkit-input-placeholder {
    color: #84878b;
  }

  input::-moz-input-placeholder {
    color: #84878b;
  }

  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

function Input({ name = "", type = "text", children, control, ...props }) {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <InputStyled hasIcon={!!children}>
      <input className="input" id={name} type={type} {...field} {...props} />
      {children}
    </InputStyled>
  );
}

export default Input;
