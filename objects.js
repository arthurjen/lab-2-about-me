var squirtle = {
    name: 'Squirtle',
    type: 'water',
    attack: 30,
    defense: 10,
    evolved: false,
    play: function() {
        return 'I like play';
    }
}

console.log(squirtle.name, squirtle.type);

squirtle.name = 'Super Squirtle';
squirtle.evolved = true;
squirtle.evolution = 'Wartortle';
squirtle['type'] = 'wet sand';

console.log(squirtle.play);
console.log(squirtle.play());

var types = [
    'Water',
    'Earth',
    'Fire'
]

