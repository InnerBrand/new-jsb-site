import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Components
import Container from 'components/Container';

// Styles
import * as styles from 'styles/modules/TeamMembers.module.scss';

function SingleMember({ member }) {
  const [isPillOpen, setPillOpen] = useState(false);
  const memberImg = getImage(member.image.asset.gatsbyImageData);

  return (
    <>
      <div className={styles.singleMember}>
        <GatsbyImage image={memberImg} />
        <h4>{member.name}</h4>
      </div>
      {/* { isPillOpen && (<OpenPill data={member}/>) } */}
    </>
  );
}

const TeamMembers = ({ members }) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {members.map(member => (
            <SingleMember key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamMembers;
