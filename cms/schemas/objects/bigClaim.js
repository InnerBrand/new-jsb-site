export default {
    type: 'object',
    name: 'bigClaim',
    title: 'Big Claim',
    fields: [
      {
        type: 'string',
        name: 'subText',
        title: 'subText',
        validation: Rule => Rule.required(),
      },
      {
        type: 'string',
        name: 'bigText',
        title: 'bigText',
        validation: Rule => Rule.required(),
      },
      {
        type: 'image',
        name: 'image',
        title: 'Image',
        validation: Rule => Rule.required(),
      },
    ],
};