<script lang="ts">
    let {name, score, ...rest} = $props()
    import UserAvatar from './UserAvatar.svelte'
</script>

<div {...rest} class="flex items-center gap-2">
    <UserAvatar   avatar="src/avatars/avatar-2.svg" />
    <div>
        <p class="font-bold">{name}</p>
        <p>Score: <span class="badge badge-primary ml-2 my-1">{score}</span></p>
    </div>
</div>

<style>
   
</style>
