<script lang="ts">

import {ChallengeControl} from '$lib/components'
import { Status } from "$lib/Constants"
import {generateNumber, generateRandomNumberBetween} from "$lib/Helpers"
import {updateScore} from '$lib/stores/userStore.svelte'

const checkAnswer = () => {
    if (formStatus !== Status.Solving) return

    if(num*numby ===  res) {
        formStatus = Status.Correct
        updateScore(1)
    } else {
        formStatus = Status.Incorrect
        updateScore(-1)
    }
}
const restartChallenge = () => {
    num = generateNumber(2)
    numby = generateNumber(1)
    res = 0
}
const retryChallenge = () => {
    res = 0
}
let formStatus = $state(Status.Solving)

let randomLen:number = $state(generateRandomNumberBetween(2, 4))
let num:number =   $state(generateNumber(randomLen))
let numby:number = $state(generateNumber(1))
let res:number =$state(0)


 $effect(()=>{
    if (res == 0 || !res) {
            formStatus = Status.MissingInput
    } else {
            formStatus = Status.Solving
        }
    })


</script>
  <div class="section">
        <div class="py-8 px-4 mx-auto max-w-screen-xl">
            <h1 class="challenge-title">Multiply and provide answer in the box</h1>
        </div>

        <ChallengeControl
                checkAnswer={checkAnswer}
                restartChallenge={restartChallenge}
                retryChallenge={retryChallenge}
                currentStatus={formStatus}>
        </ChallengeControl>

        <div class="container mx-auto my-4">
          
                <div class="card bg-base-300 w-40 h-40 shadow-xl text-5xl text-center card-normal">{num}</div>
                <div class="card bg-base-100 w-40 h-40 shadow-s text-5xl text-center">X</div>
                <div class="card bg-base-300 w-40 h-40 shadow-xl text-5xl text-center ">{numby}</div>
                <div class="card bg-base-100 w-40 h-40 shadow-s text-5xl text-center">=</div>
                <input bind:value={res} class="card bg-base-300 w-40 h-40 shadow-xl text-5xl text-center "/>
           
        </div>

  </div>


  <style>
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        display: flex;
        gap: .1rem;
        width: max-content;
    }
   
.challenge-title {
    font-size: 2rem;
    font-weight: 600;
}
  </style>
