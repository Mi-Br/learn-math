
<script lang='ts'>
import {createEventDispatcher} from 'svelte'
const dispatch = createEventDispatcher()
 const data = $props()
</script>
<button class="button"  aria-label="action button" on:click={()=>dispatch('click')}>
    {@render data.children()}
</button>

<style>
    .button {
        display: inline;
        bottom: 0;
        right: 0;
        transform: translate(-50%, -50%);
        all: unset;
        display: flex;
        align-items: center;
        position: relative;
        padding: 0.6em 2em;
        border: mediumspringgreen solid 0.15em;
        border-radius: 0.25em;
        color: mediumspringgreen;
        font-size: 1em;
        font-weight: 600;
        cursor: pointer;
        overflow: hidden;
        transition: border 300ms, color 300ms;
        user-select: none;
    }
    
    .button p {
        z-index: 1;
    }
    
    .button:hover {
        color: #fc0000;
    }
    
    .button:active {
        border-color: teal;
    }
    
    .button::after, .button::before {
        content: "";
        position: absolute;
        width: 9em;
        aspect-ratio: 1;
        background: mediumspringgreen;
        opacity: 50%;
        border-radius: 50%;
        transition: transform 500ms, background 300ms;
    }
    
    .button::before {
        left: 0;
        transform: translateX(-8em);
    }
    
    .button::after {
        right: 0;
        transform: translateX(8em);
    }
    
    .button:hover:before {
        transform: translateX(-1em);
    }
    
    .button:hover:after {
        transform: translateX(1em);
    }
    
    .button:active:before,
    .button:active:after {
        background: teal;
    }
</style>