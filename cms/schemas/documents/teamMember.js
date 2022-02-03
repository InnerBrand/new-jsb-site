import {FaPepperHot as icon} from 'react-icons/fa';

export default {
  type: 'document',
  name: 'teamMember',
  title: 'Team Member',
  icon,
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: Rule => Rule.required(),
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      name: 'certifications',
      title: 'Certifications',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      name: 'email',
      title: 'Email Address',
      validation: Rule => Rule.required(),
    },
    {
      type: 'string',
      name: 'phoneNumber',
      title: 'Phone Number',
      validation: Rule => Rule.required(),
      // todo: add custom validation to strip non numbers
    },
    {
      type: 'url',
      name: 'facebookLink',
      title: 'Facebook Profile URL',
    },
    {
      type: 'url',
      name: 'linkedInLink',
      title: 'Linkedin Profile URL',
    },
    {
      type: 'url',
      name: 'twitterLink',
      title: 'Twitter Profile URL',
    },
    {
      type: 'string',
      name: 'jobTitle',
      title: 'Job Title',
      validation: Rule => Rule.required(),
    },
    {
      type: 'richTextEditor',
      name: 'biography',
      title: 'Biography',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      name: 'name',
      jobTitle: 'jobTitle',
      image: 'image',
    },
    prepare: ({name, jobTitle, image}) => {
      return {
        title: name,
        subtitle: jobTitle,
        media: image,
      };
    },
  },
};
