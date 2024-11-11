<script lang="ts">
	let drawerOpen = $state(false);
	let { name, score, ...rest } = $props();
	import UserAvatar from './UserAvatar.svelte';
</script>

<div class="user-profile" {...rest}>
	<UserAvatar  avatar="src/avatars/avatar-2.svg" />
	<div class="user-stats">
		<p>{name}</p>
		<p>Score: {score}</p>
	</div>
</div>

<style>
	.user-profile {
		/* position: relative; */
		display: flex;
		gap: 1rem;
		background-color: var(--background-clr, #212121);
		/* padding: 1rem; */
		border-radius: 0.5rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.user-drawer {
		position: sticky;
		top: 0;
		right: 0;
		background-color: var(--background-clr, #df1313);
		width: min(50%, 400px);
		height: 100%;
	}
</style>
