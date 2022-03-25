import {AiFillHome as icon} from 'react-icons/ai';

export default {
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  fields: [
    {
      title: 'Homepage Content',
      name: 'homepageContent',
      type: 'homepageObject',
    },
    {
      title: 'Roles We Place',
      name: 'rolesPlaced',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'rolesGrid'}],
        },
      ],
    },
    {
      title: 'Big Claim',
      name: 'bigClaim',
      type: 'bigClaim',
    },
    {
      title: 'Industry Logos',
      name: 'industryLogos',
      type: 'industryLogos',
    }
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Homepage',
      };
    },
  },
};
