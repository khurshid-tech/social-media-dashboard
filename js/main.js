let switchMode = document.getElementById('switchMode');

switchMode.addEventListener('change', function() {
    if(switchMode.checked) {
        lightTheme();
    } else {
        darkTheme();
    }
})


function lightTheme(){
    document.getElementsByClassName('wrapper')[0].style.backgroundColor='hsl(0, 0%, 100%)';
    document.getElementsByClassName('wrapper')[0].style.color='black';
    let card = document.querySelectorAll('.card');
    card.forEach(function(item) {
        item.style.backgroundColor='hsl(227, 47%, 96%)';
    })
}

function darkTheme(){
    document.getElementsByClassName('wrapper')[0].style.backgroundColor='hsl(230, 17%, 14%)';
    document.getElementsByClassName('wrapper')[0].style.color='white';
    let card = document.querySelectorAll('.card');
    card.forEach(function(item) {
        item.style.backgroundColor='hsl(228, 28%, 20%)';
    })
}