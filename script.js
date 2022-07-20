var character = document.getElementById('player')
var enemy = document.getElementById('enemy')
var deathSound = new Audio('./assets/You Died.mp3');
deathSound.volume = .20
var youDied = document.createElement('img')


const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', () =>{
    location.reload()
    console.log('clicked')
})

var score = 0

window.onload = function () {

    setInterval(function () {
        score += 1
        var scoreLabel = document.getElementById('scoring');
        scoreLabel.innerHTML = "Score: " + score;
    },500)



}









function jump() {

    if (character.classList != 'animate') {
        character.classList.add('animate')
    }
    setTimeout(function () {
        character.classList.remove('animate')
    }, 500);
}
var lose = setInterval(function () {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));
    if (enemyLeft < 5 && enemyLeft > 0 && playerTop >= 300) {
        document.getElementById('gameDiv').innerHTML = deathSound.play()
        document.getElementById('gameDiv').innerHTML = '<img width="750" height="350" src="./assets/Dark_Souls_You_Died_Screen_-_Completely_Black_Screen_0-2_screenshot.png">';
    }
})




