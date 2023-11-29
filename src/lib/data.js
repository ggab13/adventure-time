export async function getStaticPaths() {
  const posts = await useSanityClient().fetch('*[_type == "funtazia"]');

  return posts.map(({ slug, content, headline, image }) => ({
    params: { slug: slug.current },
    props: { content, headline, image },
  }));
}
