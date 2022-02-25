import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Block from "@sanity/block-content-to-react"

// Components
import Layout from '../components/Layout'
import Container from '../components/Container'
import CircleButton from '../components/CircleButton'

// Styles
import * as styles from '../styles/modules/pages/Home.module.scss'

const Home = ({ data }) => {
  console.log(data)

  const { featuredImage, bioHeadline, heroHeadline, subhead } = data.allSanityHomepage.nodes[0].homepageContent
  const featImg = getImage(featuredImage.asset.gatsbyImageData)

  return (
    <Container>
      <Layout>
        <section className={styles.wrapper}>
          <div className={styles.homeHeroContent}>
            <h1 className={styles.heroHeadline}>{heroHeadline}</h1>
            <GatsbyImage className={styles.heroImg} image={featImg} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed m dolor sit.</p>
            <CircleButton ctaText='Upload Your Resumé' showArrow={true} />
          </div>
        </section>
        <h1 className={styles.heroBio}>{bioHeadline}</h1>
        {/* <Block blocks={subhead._rawData} /> */}
      </Layout>
    </Container>
  )
}

export const query = graphql`
  {
    allSanityHomepage {
      nodes {
        homepageContent {
          bioHeadline
          heroHeadline
          featuredImage {
            asset {
              gatsbyImageData
            }
          }
          subhead {
            _rawData
          }
        }
      }
    }
  }
`

export default Home

