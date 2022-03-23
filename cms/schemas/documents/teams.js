
export default {
  type: 'document',
  name: 'teamPage',
  title: 'Team Page',
  fields: [
    {
      type: 'string',
      name: 'heroHeadline',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Team Members',
      name: 'teamMembers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'teamMember'}],
        },
      ],
    },
    {
      title: 'Facts',
      name: 'facts',
      type: 'array',
      of: [
        {
          type: 'fact',
        },
      ],
    },
  ],
};
