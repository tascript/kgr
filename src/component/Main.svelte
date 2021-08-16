<script lang="ts">
  import Greet from './Greet.svelte';
  import Profile from './Profile.svelte';
  import Counter from './Counter.svelte';
</script>

<main>
  <Greet message={'Hello!'} />
  <Profile author={{
    name: 'tascript',
    year: 2021,
    month: 7,
  }} />
  <Counter />
</main>

<style>
</style>
