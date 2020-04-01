<script>
  import { posts } from "../posts";
</script>

<style>

</style>

<svelte:head>
  <title>blog.renatoricco | videos</title>
</svelte:head>

{#each posts as post}
  {#if post.category == 'video'}
    <article>
      <a href={`/posts/${post.permalink}`}>
        <h2>{post.title}</h2>
        <span>{post.category}</span>
        {@html post.html}
      </a>
    </article>
  {/if}
{/each}
