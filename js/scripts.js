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

//list all pokemon's pokedex number, name and height
for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].pokedexNumber + '. ' + pokemonList[i].name + ' ' + '(height: ' + pokemonList[i].height + ') ');
//creates conditional that if a pokemon is a certain height a phrase will be added on
 if (pokemonList[i].height >= 5) {
    document.write('- Wow that\'s big!<br>')
}
else if (pokemonList[i].height < 5)
    document.write(' <br>')
}

