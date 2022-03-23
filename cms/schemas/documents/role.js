export default {
    type: 'document',
    name: 'rolesGrid',
    title: 'Roles We Place',
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
    ],
};