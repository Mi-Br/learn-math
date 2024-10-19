<script lang='ts'>   
   
   import Button from "$lib/components/Button.svelte"
   import {generateNumber} from "$lib/Helpers"
   import { createEventDispatcher } from "svelte"; 
   import { Status } from "$lib/Constants"
   import { generateGrid } from "$lib/Helpers"

   let dispatch = createEventDispatcher()
   
   // Main variables     
   let status = $state('solving')
   let divby = $state(generateNumber(1))
   let num =   $state(generateNumber(3))

    // Number breakdown
    let numH = $derived(Math.floor(num/100))
    let numT = $derived(Math.floor((num - numH * 100)/10))
    let numE = $derived(num - numH * 100 - numT *10)
    
    // Output variables
    let inpH = $state('')
    let inpT = $state('')
    let inpE = $state('')
    let inpR = $state('')

    let formStatus = $state(Status.Solving)

    // Grid for drafting 
    let grid  = $state(generateGrid(6, 3))
    
    $effect(()=>{
        if (typeof(inpH) !== 'number' || typeof(inpT) !== 'number' || typeof(inpE) !== 'number' || typeof(inpR) !== 'number'    ) {
        formStatus = Status.MissingInput
    } else {
            formStatus = Status.Solving
        }
    })
    


    function checkAnswer() {
        if (formStatus !== Status.Solving) return
        if ((inpH * 100 + inpT * 10 + inpE ) * divby + inpR === num) {
            formStatus = Status.Correct
            dispatch('correct')
        } else {
            formStatus = Status.Incorrect
            dispatch('incorrect')
        }
    }
    
    function restartChallenge() {
        formStatus = Status.Solving
        divby = generateNumber(1)
        num =  generateNumber(3)
        grid = generateGrid(6, 3)
     
        inpH = ''
        inpT = ''
        inpE = ''
        inpR = ''
        dispatch('restart')
    }
    

    </script>
    
<div class="container">
    <h1 class="title">Challenge</h1>

    {#if status === Status.Incorrect }
        <h1 class="error">Incorrect</h1> 
        <p class="error">Provide all answers in red</p>
    {/if}

    {#if status === Status.Solving }
    <div class="flex">
        <div style:width=500px>
            <h1 >Divide {num} by {divby}</h1> 
            <p >Use grid to solve the problem. Once you have the answer, type it in the red box and click Check.</p>
        </div>
        {#if formStatus === Status.Solving}
        <div>
            <Button on:click={checkAnswer}>Check</Button>
        </div>
    {/if}
    </div>
    {/if}

    {#if formStatus === Status.Correct}
        <h1 class="correct">Correct !!!!!!</h1>
    {/if}
    {#if formStatus === Status.Incorrect}
        <h1 class="incorrect">Incorrect</h1>
        <Button on:click={restartChallenge}>Retry</Button>
    {/if}
    <!-- Number breakdown -->

    <form class="grid" >
            <input disabled value= {divby} style:grid-column=1 style:grid-row=1 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <span  style:grid-column=2 style:grid-row=1 >/</span>
            <input disabled value={numH} class="inp" style:grid-column=3 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input disabled value={numT} class="inp" style:grid-column=4 style:grid-row=1 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input disabled value={numE} class="inp" style:grid-column=5 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <span  style:grid-column=6 style:grid-row=1 >\</span>
            <input class={formStatus} bind:value={inpH}  style:grid-column=7 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input class={formStatus} bind:value={inpT}  style:grid-column=8 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input class={formStatus} bind:value={inpE}  style:grid-column=9 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>  
            <input class={'remainder ' + formStatus} bind:value={inpR}  style:grid-column=10 style:grid-row=1 style:margin-left=10px type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            {#each grid as row, i}           
                {#each row as cell, j}
                    <input class="inp" bind:value={grid[i][j]} style:grid-column={3+j} style:grid-row={2+i}  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
                {/each}
            {/each}
      
        
    </form>
</div>
   
       
    <style>

    :root  {
            --background-clr: #212121;
            --accent-clr : mediumspringgreen;
            --text-clr: #fff;
            background-color: var(--background-clr);
            color: var(--text-clr);
    }
    span {
        margin: 0 10px;
        font-size: 2rem;
    }
    .flex {
        display: flex;
        justify-content: space-between;
    }
    .missingInput, .inputError {
        outline: 2px solid   red;
    }
    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    form {
        margin: 0 auto;
    }

     .remainder{
        margin-left: 40px;
        background-color: aqua;   
     }
      
     
     .grid {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            max-width: min-content;
        }
        
        * {
            font-size: x-large;
        }
    
        .title {
            color:var(--accent-clr);
            font-size: 5rem;
            text-align: center;
        }
    
        input {
            width: 1ch;
            padding: 1em;
        }
    
        /* remove default increment bar */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-inpEr-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        /* Remove spinner for Firefox */
        input[type="number"] {
            -moz-appearance: textfield;
        }
         
    </style>
    
    
    
    
    