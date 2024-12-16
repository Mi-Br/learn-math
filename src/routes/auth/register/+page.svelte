<script>
    import Authform from '$lib/components/Authform.svelte';
    const {form} = $props();
    $inspect(form)
</script>

<Authform isRegistration={true} />
<!--
{#if form && form.errors && form.errors.length>0}
    {#each form.errors as err}
        <p>{JSON.stringify(err)}</p>
    {/each}
{/if} -->
