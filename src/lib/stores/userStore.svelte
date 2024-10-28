<script lang="ts" module>
        
    let userScore = $state(100)
    let userData = $state({
        name: 'Adomas'
    })


    export function updateScore(score: number) {
        userScore += score
        console.log(userScore)
    }

    export function getUserScore() {
        return userScore
    }   

    export function getUserData() {
        return {...userData, score: userScore}
    }

</script>