let switcher = document.getElementsByClassName('switcher')[0];
let wrapper = document.getElementsByClassName('wrapper')[0];

switcher.addEventListener('click', function() {
    switcher.classList.toggle('active');
    if(switcher.classList.contains('active')) {
        wrapper.classList.add('lightTheme');
        wrapper.classList.remove('darkTheme');
    } else {
        wrapper.classList.add('darkTheme');
        wrapper.classList.remove('lightTheme');
    }
    
})

// switchMode.addEventListener('change', function() {
//     if(switchMode.checked) {
//         wrapper.classList.add('lightTheme');
//         wrapper.classList.remove('darkTheme');

//     } else {
//         wrapper.classList.add('darkTheme');
//         wrapper.classList.remove('lightTheme');
//     }
// })


