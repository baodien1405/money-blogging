import LoadingSpinner from 'components/loading'
import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const ButtonStyled = styled.button`
  padding: 0 25px;
  border-radius: 8px;

  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  height: ${(props) => props.height || '66px'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.kind === 'secondary' &&
    css`
      background-color: white;
      color: ${(props) => props.theme.primary};
    `};
  ${(props) =>
    props.kind === 'primary' &&
    css`
      color: white;
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.primary},
        ${(props) => props.theme.secondary}
      );
    `};
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

function Button({
  type = 'button',
  kind = 'primary',
  to,
  onClick = () => {},
  children,
  loading,
  ...props
}) {
  const child = !!loading ? <LoadingSpinner /> : children

  if (to !== '' && typeof to === 'string') {
    return (
      <NavLink to={to} style={{ display: 'inline-block' }}>
        <ButtonStyled type={type} kind={kind} {...props}>
          {child}
        </ButtonStyled>
      </NavLink>
    )
  }

  return (
    <ButtonStyled type={type} kind={kind} onClick={onClick} {...props}>
      {child}
    </ButtonStyled>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  to: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary'])
}

export default Button
