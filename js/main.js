let switchMode = document.getElementById('switchMode');
let wrapper = document.getElementsByClassName('wrapper')[0];

switchMode.addEventListener('change', function() {
    if(switchMode.checked) {
        wrapper.classList.add('lightTheme');
        wrapper.classList.remove('darkTheme');

    } else {
        wrapper.classList.add('darkTheme');
        wrapper.classList.remove('lightTheme');
    }
})
