import { BsFillPersonLinesFill as icon } from "react-icons/fa";

export default {
  type: "document",
  name: "foundingMember",
  title: "Founding Members",
  icon,
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "image",
      name: "image",
      title: "Image",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "richTextEditor",
      name: "title",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "email",
      title: "Email Address",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "phoneNumber",
      title: "Phone Number",
      validation: (Rule) => Rule.required(),
      // todo: add custom validation to strip non numbers
    },
    {
      type: "url",
      name: "linkedInLink",
      title: "Linkedin Profile URL",
    },
    {
      type: "string",
      name: "jobTitle",
      title: "Job Title",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "richTextEditor",
      name: "biography",
      title: "Biography",
      validation: (Rule) =>
        Rule.required().custom(({ data }) => {
          const chars = data.reduce((acc, curr) => {
            return acc + curr.children[0].text.length;
          }, 0);
          return chars > 800 ? "Limit is 800 characters!" : true;
        }),
    },
  ],
  preview: {
    select: {
      name: "name",
      jobTitle: "jobTitle",
      image: "image",
    },
    prepare: ({ name, jobTitle, image }) => {
      return {
        title: name,
        subtitle: jobTitle,
        media: image,
      };
    },
  },
};
