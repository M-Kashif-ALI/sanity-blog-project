import { defineArrayMember, defineField, defineType } from "sanity";

export const posts = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of the post",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      type: "string",
      title: "description",
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      name: "benefits",
      type: "object",
      title: "Benefits",
      fields: [
        { name: "benefit1", type: "string", title: "Benefit 1" },
        { name: "benefit2", type: "string", title: "Benefit 2" },
        { name: "benefit3", type: "string", title: "Benefit 3" },
      ],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [{ type: "author" }],
    }),
  ],
});
