<script lang="ts">
  import Greet from './Greet.svelte';
  import Profile from './Profile.svelte';
</script>

<main>
  <Greet message={'Hello!'} />
  <Profile author={{
    name: 'tascript',
    year: 2021,
    month: 7,
  }} />
</main>

<style>
</style>
