export async function getStaticPaths() {
  const posts = await useSanityClient().fetch('*[_type == "funtazia"]');

  return posts.map(
    ({
      slug,
      content,
      headline,
      image,
      imagesTest,
      imagesGallery,
      author,
      publishedAt,
      content2,
    }) => ({
      params: { slug: slug.current },
      props: {
        content,
        headline,
        image,
        imagesTest,
        imagesGallery,
        author,
        publishedAt,
        content2,
      },
    })
  );
}
