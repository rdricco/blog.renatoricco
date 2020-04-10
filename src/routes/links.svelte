<script>
  import { posts } from "../posts";
  import Waypoint from "svelte-waypoint";
</script>

<style lang="scss">
  article {
    a {
      text-decoration: none;
    }
  }
</style>

<svelte:head>
  <title>blog.renatoricco | links</title>
</svelte:head>

{#each posts as post}
  {#if post.category == 'link'}
    <Waypoint throttle="500" offset="200">
      <article>
        <a href={`/posts/${post.permalink}`}>
          <h2>{post.title}</h2>
          <span>{post.category}</span>
          {@html post.html}
        </a>
      </article>
    </Waypoint>
  {/if}
{/each}
