import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HeroSection from "../components/sections/HeroSection"
import styled from "styled-components"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <TreeSection>
        <Tree>
          <iframe src="https://embed.lottiefiles.com/animation/33582"></iframe>
        </Tree>

        <Tree>
          <iframe src="https://embed.lottiefiles.com/animation/33582"></iframe>
        </Tree>
        <Tree>
          <iframe src="https://embed.lottiefiles.com/animation/33582"></iframe>
        </Tree>
      </TreeSection>
    </Layout>
  )
}

const TreeSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5fr auto);
`
const Tree = styled.div``
export default IndexPage
