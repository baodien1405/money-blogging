import LoadingSpinner from 'components/loading'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonStyled = styled.button`
  padding: 0 25px;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  height: ${(props) => props.height || '66px'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`

function Button({ type = 'button', onClick = () => {}, children, loading, ...props }) {
  const child = !!loading ? <LoadingSpinner /> : children

  return (
    <ButtonStyled type={type} onClick={onClick} {...props}>
      {child}
    </ButtonStyled>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default Button
