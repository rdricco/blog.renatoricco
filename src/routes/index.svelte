<script context="module">
  import { pages } from "../posts";

  export function preload(page) {
    const index = +(page.query.page || 1);

    return {
      posts: pages[index - 1],
      hasMore: pages.length > index + 1,
      page: index
    };
  }
</script>

<script>
  export let posts, hasMore, page;
  // import { posts } from "../posts";
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>blog.renatoricco</title>
</svelte:head>

{#each posts as post}
  <article>
    <a href={`/posts/${post.permalink}`}>
      <h2>{post.title}</h2>
      {@html post.html}
    </a>
  </article>
{/each}

{#if page > 1}
  <a href="/?page={page - 1}">Previous</a>
{/if}

{#if hasMore}
  <a href="/?page={page + 1}">Next</a>
{/if}
