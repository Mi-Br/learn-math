<script lang="ts">
    let {name, score, ...rest} = $props()
</script>

<div {...rest}>
    <h2>{name}</h2>
    <p>Score: {score}</p>
</div>

<style>
    div {
        background-color: var(--background-clr, #212121);
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
</style>