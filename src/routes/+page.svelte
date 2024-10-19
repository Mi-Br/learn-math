<script lang='ts'>   
   
   import Button from "$lib/components/Button.svelte"
   import {generateNumber} from "$lib/Helpers"
    
    // Main variables     
   let status = $state('solving')
   let divby = generateNumber(1)
   let num =   generateNumber(3)

    // Number breakdown
    let numH = Math.floor(num/100)
    let numT = Math.floor((num - numH * 100)/10)
    let numE = num - numH * 100 - numT *10
    
    // Output variables
    let outH = $state('')
    let outT = $state('')
    let outE = $state('')
    let outR = $state('')

    const Status  = {
        Solving:  'solving',
        InputError : 'inputError',
        MissingInput : 'missingInput',
        Correct : 'correct'
}
    let formStatus = $state(Status.Solving)
    
 $effect(()=>{
    console.log(outH, outT, outE, outR)
    if (!outH || !outT || !outE) {
        formStatus = Status.MissingInput
    } else {
        formStatus = Status.Solving
    }
 })
    
    // Grid for input
    const grid = Array.from({length: 6}, ()=>0)


    </script>
    
<div class="container">
    <h1 class="title">Challenge</h1>
    <!-- <button on:click={checkInput}></button> -->

    {#if status === 'inputError' }
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
            <Button>Check</Button>
        </div>
    {/if}
    </div>
    {/if}

    <!-- Number breakdown -->

    <form class="grid" >
            <input disabled value= {divby} style:grid-column=1 style:grid-row=1 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <span  style:grid-column=2 style:grid-row=1 >/</span>
            <input disabled value={numH} class="inp" style:grid-column=3 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input disabled value={numT} class="inp" style:grid-column=4 style:grid-row=1 type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input disabled value={numE} class="inp" style:grid-column=5 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <span  style:grid-column=6 style:grid-row=1 >\</span>
            <input class={status === 'inputError' ? 'error' : ''} bind:value={outH}  style:grid-column=7 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input class={status === 'inputError' ? 'error' : ''} bind:value={outT}  style:grid-column=8 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
            <input class={status === 'inputError' ? 'error' : ''} bind:value={outE}  style:grid-column=9 style:grid-row=1  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>  
            <input class={status === 'inputError' ? 'error' : ''} bind:value={outR}  style:grid-column=10 style:grid-row=1 style:margin-left=10px type="number" step="any" inputmode="numeric" pattern="\d*" id="outR"/>

    
            {#each grid as cell, i}
                <input class="inp" style:grid-column=3 style:grid-row={i+1+1}  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
                <input class="inp" style:grid-column=4 style:grid-row={i+1+1}  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
                <input class="inp" style:grid-column=5 style:grid-row={i+1+1}  type="number" step="any" inputmode="numeric" pattern="[0-9]"/>
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
    .flex {
        display: flex;
        justify-content: space-between;
    }
    .error {
        color:  red;
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
        input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        /* Remove spinner for Firefox */
        input[type="number"] {
            -moz-appearance: textfield;
        }
         
    </style>
    
    
    
    
    