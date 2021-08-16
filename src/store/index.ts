import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

interface CreateCounter {
  subscribe: Writable<number>['subscribe']
  countUp: () => ReturnType<Writable<number>['update']>
}

const createCounter = (): CreateCounter => {
  const { subscribe, update } = writable(0)

  return {
    subscribe,
    countUp: () => update(v => v + 1),
  }
}

export const total = createCounter()
