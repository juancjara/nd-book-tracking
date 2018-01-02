export const formatBook = ({
  title,
  authors = [],
  imageLinks,
  shelf = "",
  id
}) => ({
  id,
  title,
  authors: authors,
  shelf,
  imageUrl: imageLinks ? imageLinks.thumbnail || imageLinks.smallThumbnail : ""
});
