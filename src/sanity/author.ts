import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  type: "document",
  title: "Author",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Author Name",
    }),
    defineField({
      name: "date",
      type: "date",
      title: "Date",
      options: {
        dateFormat: 'DD-MM-YYYY'
      }
    })
  ],
});
