<script lang="ts">
    let {avatar ='', ...rest} = $props<{avatar: string}>()
</script>

<div class="user-avatar" {...rest}>
    <img src={avatar || 'src/avatars/avatar-1.svg'} alt="User Avatar" />
</div>


<style>
    .user-avatar {
        width: 50px;
        height: 50px;
    }
</style>

 