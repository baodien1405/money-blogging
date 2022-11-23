import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PostImageStyled = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`

const PostImage = ({ className = '', url = '', alt = '', to = null }) => {
  if (to) {
    return (
      <NavLink to={to} style={{ display: 'block' }}>
        <PostImageStyled className={`post-image ${className}`}>
          <img src={url} alt={alt} loading="lazy" />
        </PostImageStyled>
      </NavLink>
    )
  }

  return (
    <PostImageStyled className={`post-image ${className}`}>
      <img src={url} alt={alt} loading="lazy" />
    </PostImageStyled>
  )
}

export default PostImage
