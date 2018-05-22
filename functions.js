/* globals students */

function run() {
    console.log('the function is running');
}


setTimeout(run, 3000);

function reverse(word) {
    return word.split('').reverse().join('');
}

console.log(reverse('banana banana banana'));

const p = document.getElementById('content');
p.textContent = 'I am the content';

console.dir(p);

students.splice(index, 1);

var copy = students.slice();

var pairs = document.querySelectorAll('.pair');