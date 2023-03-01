import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://testinal.ghost.io",
  key: "171a6ba35169356942170e6e04",
  version: "v5.0",
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
