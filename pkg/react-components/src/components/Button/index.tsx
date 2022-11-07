import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "@emotion/styled";
import { IBaseProps } from "../../common/Base";

const StyledButton = styled.button``;

export interface IButtonProps
  extends IBaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<PropsWithChildren<IButtonProps>> = (props) => {
  return <StyledButton {...props}></StyledButton>;
};

export default Button;
