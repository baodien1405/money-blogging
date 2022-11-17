import Layout from 'components/layout/Layout'
import HomeBanner from 'modules/home/HomeBanner'
import HomeFeature from 'modules/home/HomeFeature'
import HomeNewest from 'modules/home/HomeNewest'
import React from 'react'
import styled from 'styled-components'

const HomePageStyled = styled.div``

function HomePage(props) {
  return (
    <HomePageStyled>
      <Layout>
        <HomeBanner />
        <HomeFeature />
        <HomeNewest />
      </Layout>
    </HomePageStyled>
  )
}

export default HomePage
