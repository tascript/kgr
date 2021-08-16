<script lang='ts'>
import { total } from '../store'
</script>

<p>current count is {$total}</p>

<button on:click={total.countUp}>
  count up
</button>

<style>
  p {
    font-size: 0.75rem;
  }
</style>
