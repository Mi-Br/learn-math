<script>
    import Authform from '$lib/components/Authform.svelte';
    const {form} = $props();
    $inspect(form);
</script>

<Authform isRegistration={true} />