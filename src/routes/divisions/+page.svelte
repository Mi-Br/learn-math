<script lang='ts'>
   import Button from '$lib/components/Button.svelte'
   import {generateNumber} from "$lib/Helpers"
   import { Status } from "$lib/Constants"
   import { generateGrid } from "$lib/Helpers"
   import {updateScore} from '$lib/stores/userStore.svelte'

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
            updateScore(1)
        } else {
            formStatus = Status.Incorrect
            updateScore(-1)
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
    }

    function retryChallenge() {
        formStatus = Status.Solving
        inpH = ''
        inpT = ''
        inpE = ''
        inpR = ''
    }


    </script>


    {#if status === Status.Incorrect }
        <h1 class="error">Incorrect</h1>
        <p class="error">Provide all answers in red</p>
    {/if}

    <div class="section">
        <div class="py-8 px-4 mx-auto max-w-screen-xl">
            <h1 class="challenge-title">Divide {num} by {divby}</h1>
            <p class="challenge-description">Use grid to solve the problem. Once you have the answer, type it in the red box and click Check.</p>
        </div>
        <div class="cta-container">
            {#if formStatus === Status.Solving && formStatus !== Status.MissingInput}
                 <Button on:click={checkAnswer}>Check</Button>
            {/if}

            {#if formStatus === Status.Correct}
            <h1 class="correct">Correct !!!!!!</h1>
            <Button on:click={restartChallenge}>Next</Button>
           {/if}
            {#if formStatus === Status.Incorrect}
            <h1 class="incorrect">Incorrect</h1>
                <Button on:click={retryChallenge}>Retry</Button>
                <Button on:click={restartChallenge}>Next</Button>
            {/if}
        </div>

    </div>

    <!-- Number breakdown -->

    <form class="grid" style="margin-top: 3rem;gap:.5rem;">
            <input class="input text-2xl p-2 w-16" disabled value={divby} style:grid-column=1 style:grid-row=1 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <span  style:grid-column=2 style:grid-row=1 >/</span>
            <input disabled value={numH} class="input text-2xl p-2 w-16" style:grid-column=3 style:grid-row=1  type="number" step="any" />
            <input disabled value={numH} class="input text-2xl p-2 w-16" style:grid-column=3 style:grid-row=1  type="number" step="any" />
            <input disabled value={numT} class="input text-2xl p-2 w-16" style:grid-column=4 style:grid-row=1 type="number" step="any" />
            <input disabled value={numE} class="input text-2xl p-2 w-16" style:grid-column=5 style:grid-row=1  type="number" step="any" />
            <span  style:grid-column=6 style:grid-row=1 >\</span>
            <input class={'input input-bordered  text-2xl p-2 w-16 ' + formStatus} bind:value={inpH}  style:grid-column=7 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input class={'input input-bordered  text-2xl p-2 w-16 ' + formStatus} bind:value={inpT}  style:grid-column=8 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input class={'input input-bordered  text-2xl p-2 w-16 ' + formStatus} bind:value={inpE}  style:grid-column=9 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input class={'input input-bordered bg-secondary text-2xl p-2 w-16 ' + formStatus} bind:value={inpR}  style:grid-column=10 style:grid-row=1 style:margin-left=10px type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            {#each grid as row, i}
                {#each row as cell, j}
                    <input class="input input-bordered input-info text-2xl p-2 w-16" bind:value={grid[i][j]} style:grid-column={3+j} style:grid-row={2+i}  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
                {/each}
            {/each}
    </form>

    <style>
    /* * {outline: 1px solid red;} */

input{
text-align: center;
color: white;
/* width: min-content; */
}
.challenge-title {
    font-size: 2rem;
    font-weight: 600;
}
.cta-container {
    display: flex;
    gap: 1rem;
}
.challenge-description {
    font-size: 1.5rem;
    font-weight: 300;
}
    span {
        margin: 0 10px;
        font-size: 2rem;
    }
    .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .missingInput, .inputError {
        outline: 2px solid   rgba(153, 0, 255, 0.746);
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
     }


     .grid {
            display: grid;
            grid-template-columns: repeat(10, 1fr);
            max-width: min-content;
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
