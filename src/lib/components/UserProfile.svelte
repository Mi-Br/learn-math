<script lang="ts">
    let {name, ...rest} = $props()
    import UserAvatar from './UserAvatar.svelte'
</script>

<div {...rest} class="flex items-center gap-2">
    <UserAvatar avatar="/avatars/avatar-6.svg" />
    <div>
        <p class="font-bold">{name}</p>
    </div>
</div>

