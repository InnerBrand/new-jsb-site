import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Components 
import Container from './Container'

// Styles
import * as styles from '../styles/modules/TeamMembers.module.scss'



function SingleMember({ member }) {

  const [isPillOpen, setPillOpen] = useState(false)
  const memberImg = getImage(member.image.asset.gatsbyImageData);

  return (
    <>
      <div className={styles.singleMember}>
        <GatsbyImage image={memberImg} />
        <h4>{member.name}</h4>
      </div>
      {/* { isPillOpen && (<OpenPill data={member}/>) } */}
    </>
  )
}

const TeamMembers = ({ members }) => {
  return (
    <Container>
      <section className={styles.section}>
        <div className={styles.wrapper}>
          {members.map((member) => (
            <SingleMember key={member.id} member={member}/>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default TeamMembers