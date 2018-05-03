'use strict';
/* exported ultimateGame, itemGame, invokerGame, movespeedGame, heroGame */

//this function generates random response from Rubick indicating a correct answer
function rubickCorrectResponse() {
    const rubickCorrect = [
        'Indeed.',
        'Indeed!',
        'Aha!',
        'Absolutely!',
        'Absolutely.',
        'Yes!',
        'Yes.',
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

//this function generates a random response from Rubick indicating an incorrect answer
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
        'Too bad.',
        'Too bad!',
        'You\'re wasting talent!',
        'Pity.',
        'That was your best?'
    ];
    var x = Math.floor(Math.random() * rubickWrong.length);
    alert(rubickWrong[x]);
}

//this function generates a random response from Invoker indicating an incorrect answer
//initializing placeholder variable for inserting into textContent later
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
    //set the placeholder variable outside this function to be retrieved later
    invokerWrongText = invokerWrong[x];
}

function shuffleArray(array) {
    for(var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function ultimateGame() {
    //initializing where the stars/x's go, and clears it
    var ultimateStars = document.getElementById('ultimate-game-stars');
    ultimateStars.textContent = '';

    //initializing where the end score goes, and clears it
    var ultimateScore = document.getElementById('ultimate-game-score');
    ultimateScore.textContent = '';
    //initializing score at 0
    var score = 0;

    //array of objects, each with the name of the spell and an array of acceptable answers
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
            answer: ['terrorblade', 'tb']
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
    ];

    //shuffle ultimateKey so that the questions are in random order
    shuffleArray(ultimateKey);

    //iterate over each object in ultimateKey array
    var ultimateResponse;
    for(var i = 0; i < ultimateKey.length; i++) {
        ultimateResponse = prompt((i + 1) + '. ' + ultimateKey[i].question + '!');
        //if Cancel is pressed, quit the game
        if(ultimateResponse === null) {
            break;
        }
        //otherwise, change input to all lowercase
        ultimateResponse = ultimateResponse.toLowerCase();
        console.log(ultimateResponse);
        //if the answer array contains the given input, execute rubick's correct response, increment score, and add a star emoji
        if(ultimateKey[i].answer.includes(ultimateResponse) === true) {
            rubickCorrectResponse();
            score++;
            ultimateStars.textContent += '⭐️';
        }
        //otherwise wrong response and an X emoji
        else {
            rubickWrongResponse();
            ultimateStars.textContent += '❌';
        }
    }
    //Display their final score
    ultimateScore.textContent = 'You scored ' + score + ' out of ' + ultimateKey.length + '!';
}

function itemGame() {
    //initializing where the stars/x's go
    var itemStars = document.getElementById('item-game-stars');
    itemStars.textContent = '';
    //initializing where the end score goes
    var itemScore = document.getElementById('item-game-score');
    itemScore.textContent = '';
    //initializing score at 0
    var score = 0;

    //array of objects containing the item name, a true answer and a false answer
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
            trueComponent: 'Quarterstaff',
            falseComponent: 'Crystalys'
        },
        {
            item: 'Shiva\'s Guard',
            trueComponent: 'Platemail',
            falseComponent: 'Energy Booster'
        },
    ];
    var acceptableTrue = ['true', 't', 'y', 'yes'];
    var acceptableFalse = ['false', 'f', 'n', 'no'];

    //ask user a true or false statement
    var itemResponse;
    for(var i = 0; i < itemKey.length; i++) {
        //randomly produce either a 0 or a 1, 0 for a statement where false is the correct answer, and 1 for true
        var trueOrFalse = Math.floor(Math.random() * 2);
        console.log(trueOrFalse);
        if(trueOrFalse === 0) {
            itemResponse = prompt('Is ' + itemKey[i].falseComponent + ' a required component of ' + itemKey[i].item + '?');
        }
        else {
            itemResponse = prompt('Is ' + itemKey[i].trueComponent + ' a required component of ' + itemKey[i].item + '?');
        }
        //if user presses Cancel, quit the game
        if(itemResponse === null) {
            break;
        }
        //otherwise, lower case the response
        itemResponse = itemResponse.toLowerCase();
        console.log(itemResponse);

        //if the "false" question was asked, and the response is in the object of acceptable false responses, give correct response
        if(trueOrFalse === 0 && acceptableFalse.includes(itemResponse)) {
            rubickCorrectResponse();
            score++;
            itemStars.textContent += '⭐️';
        }
        //do the same but for "true" statements
        else if(trueOrFalse === 1 && acceptableTrue.includes(itemResponse)) {
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
    //depending on the number, prompt user with a spell based on array of spells below
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
    ];

    //prompt user with a spell, store as orbResponse
    var orbResponse = prompt(spellKey[randomSpell].spell + '!');

    //quit if user presses Cancel
    if(orbResponse === null) {
        invokerSpree = 0;
        invokerEmojis.textContent = '';
    }

    orbResponse = orbResponse.toUpperCase();
    //if the input is one of the answers in the orbs array, give a corresponding response, add an emoji, and increase the spree
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


var numGuesses = 3;
var hintNumber = numGuesses - 1;
var anyHero = [ 
    {
        answer: ['drow ranger', 'drow'],
        hint: [
            'is an agility hero',
            'is a humanoid',
            'goes by the name, Traxex'
        ] 
    },
    {
        answer: ['weaver'],
        hint: [
            'is an agility hero',
            'is a nonhumanoid',
            'goes by the name, Skitskurr'
        ]
    },
    {
        answer: ['lich'],
        hint: [
            'is an intelligence hero',
            'is undead',
            'goes by the name, Ethreain'
        ] 
    },
    {
        answer: ['witch doctor', 'wd'],
        hint: [
            'is an intelligence hero',
            'is a humanoid',
            'goes by the name, Zharvakko'
        ] 
    },
    {
        answer: ['queen of pain', 'qop'],
        hint: [
            'is an intelligence hero',
            'is a humanoid',
            'goes by the name, Akasha'
        ] 
    },
    {
        answer: ['dragon knight', 'dk'],
        hint: [
            'is a strength hero',
            'is a humanoid',
            'goes by the name, Davion'
        ] 
    },
    {
        answer: ['clockwerk'],
        hint: [
            'is a strength hero',
            'is a heenfolk',
            'goes by the name, Rattletrap'
        ] 
    },
    {
        answer: ['beastmaster', 'bm', 'beast master'],
        hint: [
            'is a strength hero',
            'is a humanoid',
            'goes by the name, Karroch'
        ] 
    },
    {
        answer: ['shadow fiend', 'sf'],
        hint: [
            'is an agility hero',
            'is a demon',
            'goes by the name, Nevermore'
        ]
    }
];

var randomHero = Math.floor(Math.random() * anyHero.length);
console.log(anyHero[randomHero].answer[0]);

function heroGame() {
    console.log(randomHero);
    //initializing where hints go
    var heroHint = document.getElementById('hero-game-hint');
    //initializing where the end response goes
    var heroScore = document.getElementById('hero-game-score');

    var heroInput = document.getElementById('hero-name');
    var hero = heroInput.value;
    hero = hero.toLowerCase();

    if(anyHero[randomHero].answer.includes(hero) === true) {
        heroScore.textContent = 'Correct! Refresh to play again.';
        heroHint.textContent = '';
        document.getElementById('hero-btn').disabled = true;
    }
    else if(numGuesses === 0) {
        heroScore.textContent = 'You lost! Refresh to play again.';
        heroHint.textContent = '';
        document.getElementById('hero-btn').disabled = true;
    }
    else {
        numGuesses--;
        heroHint.textContent = 'Sorry, that is incorrect. Here\'s a hint: the hero ' + anyHero[randomHero].hint[hintNumber - numGuesses] + '. You have ' + numGuesses + ' guesses remaining.';
    }
}

