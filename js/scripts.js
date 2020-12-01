let pokemonList = [
    {
        name: 'Charmeleon',
        pokedexNumber: 1,
        height: 5,
        weight: 41.9,
        category: 'flame',
        types: ['fire'],
        abilities: ['blaze'],
        weaknesses: ['water', 'ground', 'rock'],
    },
    {
        name: 'Ivysaur',
        pokedexNumber: 2,
        height: 3,
        weight: 28.7,
        category: 'seed',
        types: ['grass', 'poison'],
        abilities: ['overgrow'],
        weaknesses: ['fire', 'psychic', 'flying', 'ice']
    },
    {
        name: 'Wartortle',
        pokedexNumber: 3,
        height: 4,
        weight: 49.6,
        category: 'turtle',
        types: ['water'],
        abilities: ['turrent'],
        weaknesses: ['grass', 'electric'],
    }
]

    (function myLoopFunction(pokemonList) {
        console.log(index + '. ' + pokemonList.name + ' ' + '(height: ' + pokemonList.height + ') ' + '<br>');
    }
pokemonList.forEach(myLoopFunction);
}) ();


let pokemonRepository = (function () {
    let pokemonList = []; // empty array

    return {
        add: function (pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function () {
            return pokemonList;
        }
    };
})();

console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'Pikachu' });
console.log(pokemonRepository.getAll()); // [ { name: 'Pikachu' } ]