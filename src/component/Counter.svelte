<script lang='ts'>
import { total } from '../store' 
const countUp = () => {
  total.update(v => v + 1)
}
let current: number

total.subscribe(t => {
  current = t
	})
</script>

<p>current count is { current }</p>

<button on:click={countUp}>
  count up
</button>

<style>
  p {
    font-size: 0.75rem;
  }
</style>
