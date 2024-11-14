  <script lang="ts">
    import { Status } from "$lib/Constants"
    import Button from "../Button.svelte";

    interface ChallengeControlProps {
        checkAnswer: () => void;
        restartChallenge: () => void;
        retryChallenge: () => void;
        currentStatus: string;
        [key: string]: any; // Spread operator catch-all
    }

    const {checkAnswer, restartChallenge, retryChallenge,currentStatus, ...rest}:ChallengeControlProps = $props()


    $effect(() => {
        console.log('currentStatus', currentStatus)
    })
  </script>
        <div class="IdontKnowTailWind" {...rest}>
            {#if currentStatus === Status.Solving && currentStatus !== Status.MissingInput}
                 <Button on:click={checkAnswer}>Check</Button>
            {/if}

            {#if currentStatus === Status.Correct}
            <h1 class="correct">Correct !!!!!!</h1>
            <Button on:click={restartChallenge}>Next</Button>
           {/if}
            {#if currentStatus === Status.Incorrect}
            <h1 class="incorrect">Incorrect</h1>
                <Button on:click={retryChallenge}>Retry</Button>
                <Button on:click={restartChallenge}>Next</Button>
            {/if}
        </div>
<style>
    .IdontKnowTailWind {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
</style>
