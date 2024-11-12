<script lang="ts">
    let {name, ...rest} = $props()
    import UserAvatar from './UserAvatar.svelte'
</script>

<div {...rest} class="flex items-center gap-2">
    <UserAvatar avatar="src/avatars/avatar-2.svg" />
    <div>
        <p class="font-bold">{name}</p>
    </div>
</div>

