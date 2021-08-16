<script lang='ts'>
import { total } from '../store'
const countUp = () => {
  total.update(v => v + 1)
}

</script>

<p>current count is {$total}</p>

<button on:click={countUp}>
  count up
</button>

<style>
  p {
    font-size: 0.75rem;
  }
</style>
