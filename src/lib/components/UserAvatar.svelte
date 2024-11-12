<script lang="ts">
    let {avatar ='', ...rest} = $props<{avatar: string}>()
</script>

<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar" {...rest}>
    <div class="w-10 rounded-full">
        <img src={avatar || 'src/avatars/avatar-1.svg'} alt="User Avatar" />
    </div>
</div>

