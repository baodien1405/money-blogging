import Button from 'components/button'
import React from 'react'
import styled from 'styled-components'

const HomeBannerStyled = styled.div`
  height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  margin-bottom: 60px;
  .banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-content {
      max-width: 600px;
      color: white;
    }
    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
  }
`

const HomeBanner = () => {
  return (
    <HomeBannerStyled>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos beatae architecto natus
              ratione necessitatibus sed, laudantium quaerat consectetur possimus consequuntur
              maiores aliquid officia pariatur similique repellat quisquam mollitia quis eius.
            </p>
            <Button to="/sign-up" kind="secondary">
              Get started
            </Button>
          </div>
          <div className="banner-image">
            <img src="/img-banner.png" alt="banner" />
          </div>
        </div>
      </div>
    </HomeBannerStyled>
  )
}

export default HomeBanner
