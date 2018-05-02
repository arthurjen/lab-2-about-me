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
        alert('This should come in handy!');
        score++;
        itemStars.textContent = '⭐️';
    }
    else {
        alert('Whoops.');
        itemStars.textContent = '❌';
    }

    item = prompt('2. Does a Scythe of Vyse require a Staff of Wizardry?');
    if(item.trim().toLowerCase() === 'n' || item.trim().toLowerCase() === 'no') {
        alert('I agree.');
        score++;
        itemStars.textContent += '⭐️';
    }
    else {
        alert('Bah, how forgetful of me.');
        itemStars.textContent += '❌';
    }
    item = prompt('3. Does a Veil of Discord require a Circlet?');
    if(item.trim().toLowerCase() === 'y' || item.trim().toLowerCase() === 'yes') {
        alert('Absolutely.');
        score++;
        itemStars.textContent += '⭐️';
    }
    else {
        alert('You idiot. Ugh.');
        itemStars.textContent += '❌';
    }
    item = prompt('4. Does an Orchid Malevolence require a Quarterstaff?');
    if(item.trim().toLowerCase() === 'y' || item.trim().toLowerCase() === 'yes') {
        alert('Very good!');
        score++;
        itemStars.textContent += '⭐️';
    }
    else {
        alert('That was your best?');
        itemStars.textContent += '❌';
    }
    item = prompt('5. Does a Shiva\'s Guard require a Helm of Iron Will?');
    if(item.trim().toLowerCase() === 'n' || item.trim().toLowerCase() === 'no') {
        alert('Friends! I think we can agree that this one is in the bag!');
        score++;
        itemStars.textContent += '⭐️';
    }
    else {
        alert('Maybe next time.');
        itemStars.textContent += '❌';
    }

    //Display final score
    itemScore.textContent = 'You scored ' + score + ' out of 5!';
}


// initialize game score outside of function so it can keep count over multiple function calls
var invokerSpree = 0;
function invokerGame() {
    //initializing where Invoker's response goes
    var invokerResponse = document.getElementById('invoker-response');
    //initializing where the emojis go
    var invokerEmojis = document.getElementById('invoker-game-emojis');
    //initializing where the end score goes
    var invokerScore = document.getElementById('invoker-game-score');

    //first generate a random number between 1-10
    var randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    //depending on the number, prompt user with a spell.
    if(randomNumber === 0) {
        var spell = prompt('Coldsnap!');
        if(spell.toUpperCase() === 'QQQ') {
            invokerResponse.textContent = 'Quas Frigoris!';
            invokerSpree++;
            invokerEmojis.textContent += '❄️';
        }
        else {
            invokerResponse.textContent = 'Words fail me...';
            invokerSpree = 0;
            invokerEmojis.textContent = '';
        }
    }
    else if(randomNumber === 1) {
        spell = prompt('Ghost Walk!');
        if(spell.toUpperCase() === 'QQW' || spell.toUpperCase() === 'QWQ' || spell.toUpperCase() === 'WQQ') {
            invokerResponse.textContent = 'Geist of Lethargy!';
            invokerSpree++;
            invokerEmojis.textContent += '👻';
        }
        else {
            invokerResponse.textContent = 'Infelicitous.';
            invokerSpree = 0;
            invokerEmojis.textContent = '';
        }
    }
    else if(randomNumber === 2) {
        spell = prompt('Ice Wall!');
        if(spell.toUpperCase() === 'QQE' || spell.toUpperCase() === 'QEQ' || spell.toUpperCase() === 'EQQ') {
            invokerResponse.textContent = 'The harsh white waste beckons!';
            invokerSpree++;
            invokerEmojis.textContent += '🏔';
        }
        else {
            invokerResponse.textContent = 'Lamentable.';
            invokerSpree = 0;
            invokerEmojis.textContent = '';
        }
    }
    else if(randomNumber === 3) {
        spell = prompt('EMP!');
        if(spell.toUpperCase() === 'WWW') {
            invokerResponse.textContent = 'Extractive Mana Pulse!';
            invokerSpree++;
            invokerEmojis.textContent += '⚡️';
        }
        else {
            invokerResponse.textContent = 'This magic... disappoints.';
            invokerSpree = 0;
            invokerEmojis.textContent = '';
        }
    }
    else if(randomNumber === 4) {
        spell = prompt('Tornado!');
        if(spell.toUpperCase() === 'WWQ' || spell.toUpperCase() === 'WQW' || spell.toUpperCase() === 'QWW') {
            invokerResponse.textContent = 'Wex cyclonus!';
            invokerSpree++;
            invokerEmojis.textContent += '🌪';
        }
        else {
            invokerResponse.textContent = 'This spell works nowise!';
            invokerSpree = 0;
            invokerEmojis.textContent = '';
        }
    }
    else if(randomNumber === 5) {
        spell = prompt('Alacrity!');
        if(spell.toUpperCase() === 'WWE' || spell.toUpperCase() === 'WEW' || spell.toUpperCase() === 'EWW') {
            invokerResponse.textContent = 'Experience true swiftness!';
            invokerSpree++;
            invokerEmojis.textContent += '🏃‍';
        }
        else {
            invokerResponse.textContent = 'Perturbations!';
            invokerSpree = 0;
            invokerEmojis.textContent = '';
        }
    }
    else if(randomNumber === 6) {
        spell = prompt('Sun Strike!');
        if(spell.toUpperCase() === 'EEE') {
            invokerResponse.textContent = 'Harlek\'s Incantation of Incineration!';
            invokerSpree++;
            invokerEmojis.textContent += '☀️';
        }
        else {
            invokerResponse.textContent = 'Short-sighted of you.';
            invokerSpree = 0;
            invokerEmojis.textContent = '';
        }
    }
    else if(randomNumber === 7) {
        spell = prompt('Forge Spirit!');
        if(spell.toUpperCase() === 'EEQ' || spell.toUpperCase() === 'EQE' || spell.toUpperCase() === 'QEE') {
            invokerResponse.textContent = 'Ravagers of Armor and Will!';
            invokerSpree++;
            invokerEmojis.textContent += '🔥';
        }
        else {
            invokerResponse.textContent = 'Ruinous, ill-fated spell.';
            invokerSpree = 0;
            invokerEmojis.textContent = '';
        }
    }
    else if(randomNumber === 8) {
        spell = prompt('Chaos Meteor!');
        if(spell.toUpperCase() === 'EEW' || spell.toUpperCase() === 'EWE' || spell.toUpperCase() === 'WEE') {
            invokerResponse.textContent = 'Behold the meatball!';
            invokerSpree++;
            invokerEmojis.textContent += '☄️';
        }
        else {
            invokerResponse.textContent = 'My concentration... shattered!';
            invokerSpree = 0;
            invokerEmojis.textContent = '';
        }
    }
    else if(randomNumber === 9) {
        spell = prompt('Deafening Blast!');
        if(spell.toUpperCase() === 'QWE' || spell.toUpperCase() === 'QEW' || spell.toUpperCase() === 'WQE' || spell.toUpperCase() === 'WEQ' || spell.toUpperCase() === 'EQW' || spell.toUpperCase() === 'EWQ') {
            invokerResponse.textContent = 'Sonic BOOM!';
            invokerSpree++;
            invokerEmojis.textContent += '🔊';
        }
        else {
            invokerResponse.textContent = 'Hahahahahahahahahahahaha.';
            invokerSpree = 0;
            invokerEmojis.textContent = '';
        }
    }
    //Display invoking spree
    invokerScore.textContent = 'You\'ve invoked ' + invokerSpree + ' spells in a row!';
}

//declare the movespeed target outside of function
var myMovespeed = 290;
function movespeedGame() {
    //initializing where the end response
    var movespeedScore = document.getElementById('movespeed-game-score');

    //create a loop of i+1 guesses
    for(var i = 4; i >= 0; i--) {
        var movespeedGuess = prompt('What is my movespeed?');
        console.log(movespeedGuess);
        //continue only if user didn't cancel or enter nothing
        if(movespeedGuess === null) {
            break;
        }
        //check to see if it's the correct answer
        else if(movespeedGuess == myMovespeed) {
            alert('The journey was worth it!');
            movespeedScore.textContent = 'You guessed my movespeed! Well done.';
            break;
        }
        //next check if the user has any more guesses
        else if(i === 0) {
            alert('You lost!');
            movespeedScore.textContent = 'You didn\'t guess my movespeed.';
            break;
        }
        //condition if it's the final guess
        else if(i === 1) {
            alert('For your last guess, I\'ll give you a hint. Lion and I are the same speed.');
        }
        //otherwise, give a hint and notify how many guesses remain
        else if(movespeedGuess > 522) {
            alert('You are much too kind. But, now you have ' + i + ' more guesses.');
        }
        else if(movespeedGuess > 340) {
            alert('Not as fast as nature\'s grace, Enchantress. You have ' + i + ' more guesses.');
        }
        else if(movespeedGuess > 310) {
            alert('I\'m only a bit slower than Anti-mage. You have ' + i + ' more guesses.');
        }
        else if(movespeedGuess > 290) {
            alert('So close! You have ' + i + ' more guesses.');
        }
        else if(movespeedGuess < 290) {
            alert('I\'m faster than that. Try ' + i + ' more times.');
        }
        else if(movespeedGuess < 0){
            alert('What did you hope to gain from that? You have ' + i + ' more chances.');
        }
        else {
            alert('Nope, guess again! You have ' + i + ' more tries.');
        }
        
    }
}