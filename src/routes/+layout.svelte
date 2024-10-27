<script lang="ts">
import {getUserData}  from '$lib/stores/userStore.svelte'
import UserProfile from '$lib/components/UserProfile.svelte'    

let {children} = $props()   
const {name, score} = $derived(getUserData())
</script>

<nav>
    <a href="/"><i aria-label="home" class="fa-solid fa-house"></i>Home</a>
    <a href="/divisions">Divisions</a>
    <UserProfile name={name} score={score} style="margin-left: auto" />
</nav>

{@render children()}


<style>
:root  {
            --background-clr: #212121;
            --accent-clr : mediumspringgreen;
            --text-clr: #fff;
            background-color: var(--background-clr);
            color: var(--text-clr);
    }
nav {
    background-color: var(--background-clr, #212121);
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

nav a {
    color: var(--text-clr, #fff);
    text-decoration: none;
    margin-right: 1.5rem;
    font-size: 1.1rem;
    transition: color 0.3s ease;
}

nav a:hover {
    color: var(--accent-clr, mediumspringgreen);
}

nav a i {
    margin-right: 0.5rem;
}

@media (max-width: 600px) {
    nav {
        flex-direction: column;
        align-items: flex-start;
    }

    nav a {
        margin: 0.5rem 0;
    }
}



 
</style>