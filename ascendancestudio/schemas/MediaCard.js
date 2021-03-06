export default {
  name: "mediaCard",
  type: "document",
  title: "Media Card",
  fields: [
    {
      name: "order",
      type: "number",
      title: "Order",
    },
    {
      name: "hash",
      type: "string",
      title: "Hash",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "subHeading",
      type: "string",
      title: "Subheading",
    },
    {
      name: "body",
      type: "string",
      title: "Body",
    },
    {
      name: "url",
      type: "string",
      title: "Url",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Modal Video",
      name: "modalvideo",
      type: "boolean",
    },
  ],
}
