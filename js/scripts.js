let pokemonRepository = (function () {
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

    return {
        add: function (pokemon) {
            pokemonList.push(pokemon);
        },

        getAll: function () {
            return pokemonList;
        }
    }
})();

pokemonRepository.add({ name: 'Pikachu' });
pokemonRepository.getAll().forEach(
    function addListItem(pokemon) {
        function (pokemon) {
            let ul = document.querySelector('ul');
            let listItem = document.createElement('li');
            let button = document.createElement('button');
            button;
            document.querySelector('button').innerText(pokemon);
            button.classList.add('button');
            document.ul.appendChild('li');
            document.body.appendChild('ul');
        }

        function showDetails(pokemon) {
            button.addEventListner('click', () => {

            })
        }

    }

)





appendChild()
