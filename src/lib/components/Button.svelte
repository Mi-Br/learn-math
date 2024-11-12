
<script lang='ts'>
import {createEventDispatcher} from 'svelte'
const dispatch = createEventDispatcher()
 const data = $props()
</script>
<button class="btn btn-accent"  aria-label="action button" on:click={()=>dispatch('click')}>
    {@render data.children()}
</button>

<style>
</style>
