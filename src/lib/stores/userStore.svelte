<script lang="ts" context="module">
    
let userScore = $state(100)
let userData = $state({
    name: 'Adomas'
})

const userDataWithScore = $derived({...userData, score: userScore})

 export function updateScore(score: number) {
    userScore += score
    console.log(userScore)
}

 export function getUserScore() {
    return userScore
}   

export function getUserData() {
    return userDataWithScore
}
</script>