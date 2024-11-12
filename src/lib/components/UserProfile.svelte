<script lang="ts">
    let {name, score, ...rest} = $props()
    import UserAvatar from './UserAvatar.svelte'
</script>

<div class="user-profile" {...rest}>
    <UserAvatar   avatar="src/avatars/avatar-2.svg" />
    <div class="user-stats">
        <p>{name}</p>
        <p>Score: {score}</p>
    </div>
</div>

<style>
    .user-stats {
        font-size: 1.3rem;
        display: flex;
        flex-direction: column;
        gap: 0rem;
    }
    .user-stats p {
        margin: 0;
    }
    .user-profile {
        display: flex;
        gap: 1rem;
        background-color: var(--background-clr, #212121);
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

</style>
