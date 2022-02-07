export default {
  name: 'fact',
  title: 'Fact',
  type: 'object',
  fields: [
    {
      name: 'prefix',
      type: 'string',
      title: 'Fact Prefix',
      validation: Rule => Rule.required(),
    },
    {
      name: 'highlight',
      type: 'string',
      title: 'Fact Highlight',
      validation: Rule => Rule.required(),
    },
    {
      name: 'suffix',
      type: 'string',
      title: 'Fact Suffix',
      validation: Rule => Rule.required(),
    },
  ],
};
