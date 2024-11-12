<script lang="ts">
import './global.css'
import {getUserData}  from '$lib/stores/userStore.svelte'
import UserProfile from '$lib/components/UserProfile.svelte'
let {children} = $props()
const {name, score} = $derived(getUserData())
</script>
<div class="container mx-auto">
    <nav class="navbar bg-base-300 text-neutral-content">
        <ul class="menu menu-horizontal w-full">
                <li><a href="/"><i aria-label="home" class="fa-solid fa-house"></i>Home</a></li>
                <li><a href="/divisions">Divisions</a></li>
            <div class="ml-auto">
                <UserProfile name={name} score={score} />
            </div>
        </ul>
    </nav>
</div>  
    <!-- 
{@render children()}


<style>

</style> -->
