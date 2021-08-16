<script lang='ts'>
import { total } from '../store'
import type { Unsubscriber } from 'svelte/store'
import { onDestroy } from 'svelte'
const countUp = () => {
  total.update(v => v + 1)
}
let current: number

const unsubscriber: Unsubscriber = total.subscribe(t => {
  current = t
  })
onDestroy(unsubscriber) 
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
