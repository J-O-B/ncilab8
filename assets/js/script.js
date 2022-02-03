let player = document.querySelectorAll('button');

for (var i = 0; i < player.length; i++) {
player[i].addEventListener('click', function() {
    const computer = ['Rock', 'Paper', 'Scissors'];
    const computerPick = computer[Math.floor(Math.random() * 3)];

    let playerPick = this.value;
    
    if (playerPick == computerPick) {
        alert(`Draw!\nYou Had: ${playerPick}, Computer Had: ${computerPick}`);
    } else if (playerPick == 'Paper' && computerPick == 'Rock') {
        alert(`You Won!\nYou Had: ${playerPick}, Computer Had: ${computerPick}`);
    } else if (playerPick == 'Scissors' && computerPick == 'Paper') {
        alert(`You Won!\nYou Had: ${playerPick}, Computer Had: ${computerPick}`);
    } else if (playerPick == 'Rock' && computerPick == 'Scissors') {
        alert(`You Won!\nYou Had: ${playerPick}, Computer Had: ${computerPick}`);
    } else {
        alert(`You Lost!\nYou Had: ${playerPick}, Computer Had: ${computerPick}`);
    }
});
}
function display(value){
    document.getElementById('message').textContent = 'Pick ' + value;
}
function reset(){
    document.getElementById('message').textContent = '';
}