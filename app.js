'use strict';
/* exported ultimateGame, itemGame, invokerGame, movespeedGame, */

function rubickCorrectResponse() {
    const rubickCorrect = [
        'Indeed.',
        'Aha!',
        'Absolutely!',
        'Yes!',
        'Oh, there it is!',
        'Mhmm.',
        'I agree!',
        'So many mysteries revealed.',
        'Hehehe!',
        'Such skill!'
    ];
    var x = Math.floor(Math.random() * rubickCorrect.length);
    alert(rubickCorrect[x]);
}

function rubickWrongResponse() {
    const rubickWrong = [
        'Ha! That was terrible.',
        'Oh, I hope no one saw that.',
        'Whoops!',
        'Whoops.',
        'Maybe next time.',
        'Hmm, maybe next time!',
        'No!',
        'Memory is an imperfect vessel.',
        'Apply yourself!',
        'I almost feel bad.'
    ];
    var x = Math.floor(Math.random() * rubickWrong.length);
    alert(rubickWrong[x]);
}

function ultimateGame() {
    //initializing where the stars/x's go
    var ultimateStars = document.getElementById('ultimate-game-stars');
    //initializing where the end score goes
    var ultimateScore = document.getElementById('ultimate-game-score');
    //initializing score at 0
    var score = 0;
    var ultimateKey = [
        {
            question: 'Supernova',
            answer: ['phoenix']
        },
        {
            question: 'Epicenter',
            answer: ['sand king', 'sk', 'crixalis', 'sandy claws']
        },
        {
            question: 'Exorcism',
            answer: ['death\'s prophet', 'deaths prophet', 'dp', 'krobelus']
        },
        {
            question: 'Sunder',
            answer: ['terrorblade']
        },
        {
            question: 'Omnislash',
            answer: ['juggernaut', 'jugg', 'yurnero']
        },
        {
            question: 'Eclipse',
            answer: ['luna']
        },
        {
            question: 'Reverse Polarity',
            answer: ['magnus']
        },
        {
            question: 'Mystic Flare',
            answer: ['skywrath mage', 'skywrath', 'dragonus']
        },
        {
            question: 'Fiend\'s Grip',
            answer: ['bane', 'atropos']
        },
        {
            question: 'Static Storm',
            answer: ['disruptor']
        }
    ]
    var ultimateResponse;
    ultimateStars.textContent = '';
    for(var i = 0; i < ultimateKey.length; i++) {
        ultimateResponse = prompt((i + 1) + '. ' + ultimateKey[i].question + '!');
        if(ultimateResponse === null) {
            break;
        }
        ultimateResponse = ultimateResponse.toLowerCase();
        console.log(ultimateResponse);
        
        if(ultimateKey[i].answer.includes(ultimateResponse) === true) {
            rubickCorrectResponse();
            score++;
            ultimateStars.textContent += '⭐️';
        }
        else {
            rubickWrongResponse();
            ultimateStars.textContent += '❌';
        }
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
    var spell;
    if(randomNumber === 0) {
        spell = prompt('Coldsnap!');
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
    var movespeedGuess;
    //create a loop of i+1 guesses
    for(var i = 4; i >= 0; i--) {
        movespeedGuess = prompt('What is my movespeed?');
        console.log(movespeedGuess);
        //continue only if user didn't cancel or enter nothing
        if(movespeedGuess === null) {
            break;
        }
        //check to see if it's the correct answer, "==" because myMovespeed is stored as a number, but input is stored as a string.
        else if(movespeedGuess === myMovespeed) {
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
            alert('I\'m only a bit slower than Anti-Mage. You have ' + i + ' more guesses.');
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

function guess() {
    var colorInput = document.getElementById('color');
    var color = colorInput.value;
    if(color === 'blue') {
        document.getElementById('color-btn').disabled = true;
    }
}

function nameGame() {
    var nameKey = [ 
        {
            question: 'Drow Ranger',
            answer: ['traxex']
        },
        {
            question: 'Tinker',
            answer: ['boush']
        },
        {
            question: 'Weaver',
            answer: ['skitskurr']
        }
    ];
    //console.log(nameKey[0].answer);
    var randomQuestion = Math.floor(Math.random() * nameKey.length);
    var response = prompt(nameKey[randomQuestion].question);
    response = response.toLowerCase();
    console.log(response);
    if(nameKey[randomQuestion].answer.includes(response) === true) {
        alert('CORRECT!');
    }
    else {
        alert('sorry');
    }
}

