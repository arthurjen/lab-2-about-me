'use strict';

function ultimateGame() {
    //initializing where the stars/x's go
    var ultimateStars = document.getElementById('ultimate-game-stars');
    //initializing where the end score goes
    var ultimateScore = document.getElementById('ultimate-game-score');
    //initializing score at 0
    var score = 0;
    
    //the game begins! User is prompted with a spell, and must return the name of the hero that has that spell.
    var name = prompt('Supernova!');
    //if correct, increment score and give them a star. Otherwise, just give them an X.
    if(name.trim().toLowerCase() === 'phoenix') {
        alert('Indeed!');
        score++;
        ultimateStars.textContent = '⭐️';
    }
    else {
        alert('Ha! That was terrible.');
        ultimateStars.textContent = '❌';
    }
    //repeat for all spells. Unsure if reusing variable "name" is kosher or not.
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
    //Display their final score out of 10.
    ultimateScore.textContent = 'You scored ' + score + ' out of 10!';
}

