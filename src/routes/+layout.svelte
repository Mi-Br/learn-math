<script lang="ts">
import './global.css'
import {getUserData}  from '$lib/stores/userStore.svelte'
import UserProfile from '$lib/components/UserProfile.svelte'
import Toast from '$lib/components/Toast.svelte';
let {children} = $props()
const {name, score} = $derived(getUserData())
</script>
<div class="container mx-auto">
    <nav class="navbar bg-base-300 text-neutral-content">
        <ul class="menu menu-horizontal w-full">
                <li><a href="/"><i aria-label="home" class="fa-solid fa-house"></i>Home</a></li>
                <li><a href="/divisions">Divisions</a></li>
                <li><a href="/challenges/multiplication">Multiplication</a></li>

                <div class="ml-auto mr-3">
                    <UserProfile name={name}/>
                </div>
                <div class="grid place-content-center">
                    <div class="badge badge-secondary rounded-full w-12 h-12 grid place-content-center">
                        <div>{score}</div>
                    </div>
                 </div>
        </ul>
    </nav>
    <div class="section my-3">
        {@render children()}

    </div>
    <Toast></Toast>
</div>
    <!--

<style>

</style> -->
