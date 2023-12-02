export async function getStaticPaths() {
  const posts = await useSanityClient().fetch('*[_type == "funtazia"]');

  return posts.map(
    ({ slug, content, headline, image, author, publishedAt }) => ({
      params: { slug: slug.current },
      props: { content, headline, image, author, publishedAt },
    })
  );
}
