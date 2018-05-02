'use strict';
/* exported ultimateGame, itemGame, invokerGame, movespeedGame, */

function rubickCorrectResponse() {
    const rubickCorrect = [
        'Indeed.',
        'Aha!',
        'Absolutely!',
        'Absolutely.',
        'Yes!',
        'Oh, there it is!',
        'Mhmm.',
        'I agree!',
        'So many mysteries revealed.',
        'Hehehe!',
        'This should come in handy!',
        'Friends, I think we can agree that this one is in the bag!',
        'Very good!',
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
        'I almost feel bad.',
        'You idiot! Ugh.',
        'That was your best?'
    ];
    var x = Math.floor(Math.random() * rubickWrong.length);
    alert(rubickWrong[x]);
}
var invokerWrongText;
function invokerWrongResponse() {
    const invokerWrong = [
        'Lamentable.',
        'Infelicitous.',
        'This magic... disappoints!',
        'Words fail me...',
        'Perturbations!',
        'This spell works nowise.',
        'My concentration... shattered!',
        'Hahahahahahahahahahaha!',
        'Ruinous, ill-fated spell',
        'Short-sighted of you.'
    ];
    var x = Math.floor(Math.random() * invokerWrong.length);
    invokerWrongText = invokerWrong[x];
    //alert(invokerWrong[x]);
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
    itemStars.textContent = '';
    //initializing where the end score goes
    var itemScore = document.getElementById('item-game-score');
    //initializing score at 0
    var score = 0;

    var itemKey = [
        {
            item: 'Force Staff',
            trueComponent: 'Ring of Regen',
            falseComponent: 'Ring of Health'
        },
        {
            item: 'Scythe of Vyse',
            trueComponent: 'Ultimate Orb',
            falseComponent: 'Staff of Wizardry'
        },
        {
            item: 'Veil of Discord',
            trueComponent: 'Circlet',
            falseComponent: 'Chainmail'
        },
        {
            item: 'Orchid Malevolence',
            trueComponent: 'Ring of Regen',
            falseComponent: 'Crystalys'
        },
        {
            item: 'Shiva\'s Guard',
            trueComponent: 'Platemail',
            falseComponent: 'Energy Booster'
        },
    ];
    var itemResponse;
    for(var i = 0; i < itemKey.length; i++) {
        var trueOrFalse = 1 + Math.floor(Math.random());
        console.log(trueOrFalse);
        if(trueOrFalse === 0) {
            itemResponse = prompt('Is ' + itemKey[i].trueComponent + ' a required component of ' + itemKey[i].item + '?');
        }
        else {
            itemResponse = prompt('Is ' + itemKey[i].falseComponent + ' a required component of ' + itemKey[i].item + '?');
        }
        
        if(itemResponse === null) {
            break;
        }
        itemResponse = itemResponse.toLowerCase();
        console.log(itemResponse);
        
        if(trueOrFalse === 0 && itemResponse === 'true') {
            rubickCorrectResponse();
            score++;
            itemStars.textContent += '⭐️';
        }
        else if(trueOrFalse === 1 && itemResponse === 'false') {
            rubickCorrectResponse();
            score++;
            itemStars.textContent += '⭐️';
        }
        else {
            rubickWrongResponse();
            itemStars.textContent += '❌';
        }
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
    var randomSpell = Math.floor(Math.random() * 10);
    //depending on the number, prompt user with a spell.
    var spellKey = [
        {
            spell: 'Coldsnap',
            orbs: ['QQQ'],
            response: ['Quas Frigoris'],
            emoji: '❄️'
        },
        {
            spell: 'Ghost Walk',
            orbs: ['QQW', 'QWQ', 'WQQ'],
            response: ['Geist of Lethargy!'],
            emoji: '👻'
        },
        {
            spell: 'Ice Wall',
            orbs: ['QQE', 'QEQ', 'EQQ'],
            response: ['The harsh white waste beckons!'],
            emoji: '🏔'
        },
        {
            spell: 'EMP',
            orbs: ['WWW'],
            response: ['Extractive Mana Pulse!'],
            emoji: '⚡️'
        },
        {
            spell: 'Tornado',
            orbs: ['WWQ', 'WQW', 'QWW'],
            response: ['Wex Cyclonus!'],
            emoji: '🌪'
        },
        {
            spell: 'Alacrity',
            orbs: ['WWE', 'WEW', 'EWW'],
            response: ['Experience true swiftness!'],
            emoji: '🏃‍'
        },
        {
            spell: 'Sunstrike',
            orbs: ['EEE'],
            response: ['Harlek\'s Incantation of Incineration!'],
            emoji: '☀️'
        },
        {
            spell: 'Forge Spirit',
            orbs: ['EEQ', 'EQE', 'QEE'],
            response: ['Ravagers of Armor and Will!'],
            emoji: '🔥'
        },
        {
            spell: 'Chaos Meteor',
            orbs: ['EEW', 'EWE', 'WEE'],
            response: ['Behold the meatball!'],
            emoji: '☄️'
        },
        {
            spell: 'Deafening Blast',
            orbs: ['QWE', 'QEW', 'WQE', 'WEQ', 'EQW', 'EWQ'],
            response: ['Sonic BOOM!'],
            emoji: '🔊'
        }
    ]
    var orbResponse = prompt(spellKey[randomSpell].spell + '!');
    orbResponse = orbResponse.toUpperCase();
    if(spellKey[randomSpell].orbs.includes(orbResponse) === true) {
        invokerResponse.textContent = spellKey[randomSpell].response;
        invokerEmojis.textContent += spellKey[randomSpell].emoji;
        invokerSpree++;
    }
    else {
        invokerSpree = 0;
        invokerWrongResponse();
        invokerResponse.textContent = invokerWrongText;
        invokerEmojis.textContent = '';
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

