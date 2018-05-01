'use strict';

function ultimateGame() {
    //initializing where the stars/x's go
    var ultimateStars = document.getElementById('ultimate-game-stars');
    //initializing where the end score goes
    var ultimateScore = document.getElementById('ultimate-game-score');
    //initializing score at 0
    var score = 0;

    //the game begins! User is prompted with a spell, and must return the name of the hero that has that spell.
    var name = prompt('1. Supernova!');
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
    name = prompt('2. Epicenter!');
    if(name.trim().toLowerCase() === 'earth shaker') {
        alert('Aha!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Oh, I hope no one saw that.');
        ultimateStars.textContent += '❌';
    }

    name = prompt('3. Exorcism!');
    if(name.trim().toLowerCase() === 'death\'s prophet' || name.trim().toLowerCase() === 'deaths prophet') {
        alert('Absolutely!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Whoops!');
        ultimateStars.textContent += '❌';
    }

    name = prompt('4. Sunder!');
    if(name.trim().toLowerCase() === 'terrorblade') {
        alert('Such skill!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Maybe next time.');
        ultimateStars.textContent += '❌';
    }

    name = prompt('5. Omnislash!');
    if(name.trim().toLowerCase() === 'juggernaut') {
        alert('Yes!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('No!');
        ultimateStars.textContent += '❌';
    }

    name = prompt('6. Eclipse!');
    if(name.trim().toLowerCase() === 'luna') {
        alert('Oh, there it is!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Your attempt was pathetic!');
        ultimateStars.textContent += '❌';
    }

    name = prompt('7. Reverse Polarity!');
    if(name.trim().toLowerCase() === 'magnus') {
        alert('Hehehe!');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Whoops!');
        ultimateStars.textContent += '❌';
    }

    name = prompt('8. Mystic Flare!');
    if(name.trim().toLowerCase() === 'skywrath' || name.trim().toLowerCase() === 'skywrath mage' || name.trim().toLowerCase() === 'dragonus') {
        alert('So many mysteries revealed.');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('I almost feel bad.');
        ultimateStars.textContent += '❌';
    }

    name = prompt('9. Fiend\'s Grip!');
    if(name.trim().toLowerCase() === 'bane') {
        alert('Mhmm.');
        score++;
        ultimateStars.textContent += '⭐️';
    }
    else {
        alert('Apply yourself!');
        ultimateStars.textContent += '❌';
    }

    name = prompt('10. Static Storm!');
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

function itemGame() {
    //initializing where the stars/x's go
    var itemStars = document.getElementById('item-game-stars');
    //initializing where the end score goes
    var itemScore = document.getElementById('item-game-score');
    //initializing score at 0
    var score = 0;

    var item = prompt('1. Does a Force Staff require a Ring of Regen?');
    if(item.trim().toLowerCase() === 'y' || item.trim().toLowerCase() === 'yes') {
        alert('Correct!');
        score++;
        itemStars.textContent = '⭐️';
    }
    else {
        alert('Memory is an imperfect vessel.');
        itemStars.textContent = '❌';
    }

    item = prompt('2. Does a Scythe of Vyse require a Staff of Wizardry?');
    if(item.trim().toLowerCase() === 'n' || item.trim().toLowerCase() === 'no') {
        alert('Correct!');
        score++;
        itemStars.textContent += '⭐️';
    }
    else {
        alert('Memory is an imperfect vessel.');
        itemStars.textContent += '❌';
    }
    item = prompt('3. Does a Veil of Discord require a Circlet?');
    if(item.trim().toLowerCase() === 'y' || item.trim().toLowerCase() === 'yes') {
        alert('Correct!');
        score++;
        itemStars.textContent += '⭐️';
    }
    else {
        alert('Memory is an imperfect vessel.');
        itemStars.textContent += '❌';
    }
    item = prompt('4. Does an Orchid Malevolence require a Quarterstaff?');
    if(item.trim().toLowerCase() === 'y' || item.trim().toLowerCase() === 'yes') {
        alert('Correct!');
        score++;
        itemStars.textContent += '⭐️';
    }
    else {
        alert('Memory is an imperfect vessel.');
        itemStars.textContent += '❌';
    }
    item = prompt('5. Does a Shiva\'s Guard require a Helm of Iron Will?');
    if(item.trim().toLowerCase() === 'n' || item.trim().toLowerCase() === 'no') {
        alert('Correct!');
        score++;
        itemStars.textContent += '⭐️';
    }
    else {
        alert('Memory is an imperfect vessel.');
        itemStars.textContent += '❌';
    }

    //Display final score
    itemScore.textContent = 'You scored ' + score + ' out of 5!';
}

