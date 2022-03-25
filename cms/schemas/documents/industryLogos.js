export default {
    title: 'Industry Logos',
    name: 'industryLogos',
    type: 'object',
    fields: [
        {
            type: 'string',
            name: 'centerText',
            title: 'centerText',
            validation: Rule => Rule.required(),
        },
        {
            title: 'Logos',
            name: 'logos',
            type: 'array',
            of: [{ type: 'image' }],
        },
        ],
      }