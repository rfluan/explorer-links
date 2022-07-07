let changeColor = document.getElementById('elemento')

function blue() {
    changeColor.classList.remove('dark-blue','dark-pink','pink');
    changeColor.classList.add('blue');
}

function darkblue() {
    changeColor.classList.remove('blue', 'dark-pink','pink');
    changeColor.classList.add('dark-blue');
}

function pink() {
    changeColor.classList.remove('blue','dark-blue', 'dark-pink',);
    changeColor.classList.add('pink');
}

function darkpink() {
    changeColor.classList.remove('blue', 'dark-blue', 'pink');
    changeColor.classList.add('dark-pink');
}