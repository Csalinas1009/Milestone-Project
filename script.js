//define player
var character = document.getElementById('player')

//define enemy npc
var enemy = document.getElementById('enemy')


//define audio on death and audio while playing
var deathSound = new Audio('./assets/You Died.mp3');
deathSound.volume = .90


//reset button when game ends
const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () => {
    location.reload()
})


//score counter
var score = 0

window.onload = function () {

    setInterval(function () {
        score += 1
        var scoreLabel = document.getElementById('scoring');
        scoreLabel.innerHTML = "Score " + score;
    }, 75)
}
//jump function for player
function jump() {

    if (character.classList != 'animate') {
        character.classList.add('animate')
    }
    setTimeout(function () {
        character.classList.remove('animate')
    }, 500);
}

//lose conditions
var lose = setInterval(function () {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));
    if (enemyLeft < 5 && enemyLeft > 0 && playerTop >= 300) {
        alert('Your score is ' + score + '!')
        document.getElementById('scoring')
        scoring.remove()
        document.getElementById('gameDiv').innerHTML = deathSound.play()
        document.getElementById('gameDiv').innerHTML = '<img width="750" height="350" src="./assets/Dark_Souls_You_Died_Screen_-_Completely_Black_Screen_0-2_screenshot.png">';
    }
})




