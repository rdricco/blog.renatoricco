<script>
  import { posts } from "../posts";
</script>

<style>

</style>

<svelte:head>
  <title>blog.renatoricco | blog</title>
</svelte:head>

{#each posts as post}
  {#if post.category == 'blog'}
    <article>
      <a href={`/posts/${post.permalink}`}>
        <h2>{post.title}</h2>
        <span>{post.category}</span>
        {@html post.html}
      </a>
    </article>
  {/if}
{/each}
