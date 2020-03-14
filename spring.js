let changeYellow = document.querySelectorAll('.one');

changeYellow = addEventListener('click', function() {
    let newColor = document.body.style.color;
    if (newColor === 'yellow') {
        document.body.style.backgroundColor = "orange";
    }
    else {
        document.body.style.backgroundColor = "yellow";
    }
});


let changeGreen = document.querySelectorAll('.two')


changeGreen = addEventListener('click', function(){
    let newGreen = document.body.style.color;
    if (newGreen === 'pink') {
        document.body.style.backgroundColor = "green";
    }
    else {
        document.body.style.backgroundColor = "pink";
    }
})


// document.querySelectorAll('.one').addeventListener('click', changeColor);

// function changeColor (){
//     this.style.backgroundColor = "orange";
//     return false;

// }