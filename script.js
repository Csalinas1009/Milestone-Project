var character = document.getElementById('player')

function jump() {

    if (character.classList != 'animate') {
        character.classList.add('animate')
    } 
    setTimeout(function () {
        character.classList.remove('animate')

    }, 500);


}

var enemy = document.getElementById('enemy')

var lose = setInterval(function () {
    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue('left'));
    if(enemyLeft<5 && enemyLeft>0 && playerTop>=300 ){
        enemy.style.animation = "none";
        enemy.style.display = "none";
        alert("you died")
    }
    
})