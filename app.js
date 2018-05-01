'use strict';

function ultimateGame() {
    var ultimateStars = document.getElementById('ultimate-game-stars');
    var ultimateScore = document.getElementById('ultimate-game-score');
    var score = 0;
    var name = prompt('Supernova!');
    if(name.trim().toLowerCase() === 'phoenix') {
        alert('Indeed!');
        score++;
        ultimateStars.textContent = '⭐️';
    }
    else {
        alert('Ha! That was terrible.');
        ultimateStars.textContent = '❌';
    }
   
    name = prompt('Epicenter!');
    if(name.trim().toLowerCase() === 'earth shaker') {
        alert('Aha!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Oh, I hope no one saw that.');
        ultimateStars.textContent += '❌';
    }

    name = prompt('Exorcism!');
    if(name.trim().toLowerCase() === 'death\'s prophet' || name.trim().toLowerCase() === 'deaths prophet') {
        alert('Absolutely!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Whoops!');
        ultimateStars.textContent += '❌';
    }

    name = prompt('Sunder!');
    if(name.trim().toLowerCase() === 'terrorblade') {
        alert('Such skill!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Maybe next time.');
        ultimateStars.textContent += '❌';
    }

    name = prompt('Omnislash!');
    if(name.trim().toLowerCase() === 'juggernaut') {
        alert('Yes!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('No!');
        ultimateStars.textContent += '❌';
    }

    name = prompt('Eclipse!');
    if(name.trim().toLowerCase() === 'luna') {
        alert('Oh, there it is!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Your attempt was pathetic!');
        ultimateStars.textContent += '❌';
    }

    name = prompt('Reverse Polarity!');
    if(name.trim().toLowerCase() === 'magnus') {
        alert('Hehehe!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Whoops!');
        ultimateStars.textContent += '❌';
    }

    name = prompt('Mystic Flare!');
    if(name.trim().toLowerCase() === 'skywrath' || name.trim().toLowerCase() === 'skywrath mage' || name.trim().toLowerCase() === 'dragonus') {
        alert('So many mysteries revealed.');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('I almost feel bad.');
        ultimateStars.textContent += '❌';
    }

    name = prompt('Fiend\'s Grip!');
    if(name.trim().toLowerCase() === 'bane') {
        alert('Mhmm.');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Apply yourself!');
        ultimateStars.textContent += '❌';
    }

    name = prompt('Static Storm!');
    if(name.trim().toLowerCase() === 'disruptor') {
        alert('I agree!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Memory is an imperfect vessel.');
        ultimateStars.textContent += '❌';
    }

    ultimateScore.textContent = 'You scored ' + score + ' out of 10!';
}