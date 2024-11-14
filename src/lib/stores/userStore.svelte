<script lang="ts" module>

    let userScore = $state(10)
    let userData = $state({
        name: 'Benas'
    })


    export function updateScore(score: number) {
        userScore += score
    }

    export function getUserScore() {
        return userScore
    }

    export function getUserData() {
        return {...userData, score: userScore}
    }

</script>
