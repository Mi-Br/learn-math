<script lang="ts">
    let {avatar ='', ...rest} = $props<{avatar: string, onclick: () => void}>()
    console.log(avatar)
</script>

<div class="user-avatar" {...rest}>
    <img src={avatar || 'src/avatars/avatar-1.svg'} alt="User Avatar" />
</div>


<style>
    .user-avatar {
        width: 100px;
        height: 100px;
    }
</style>

 