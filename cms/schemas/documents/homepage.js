import {AiFillHome as icon} from 'react-icons/ai';

export default {
  icon,
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  fields: [
    {
      title: 'Homepage Content',
      name: 'homepageContent',
      type: 'homepageObject',
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Homepage',
      };
    },
  },
};
