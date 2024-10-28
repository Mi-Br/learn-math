<script lang="ts">
    let {children, open = false} = $props<{children: any, open: boolean}>()
    let drawerOpen = $state(open)
</script>

<button onclick={()=>drawerOpen=!drawerOpen} class="drawer" class:open={drawerOpen}>
    {@render children()}
</button>

<style>
    .drawer {
        position: sticky;
        top: 0;
        right: 0;
    }
</style>