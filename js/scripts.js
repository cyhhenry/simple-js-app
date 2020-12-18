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

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function showDetails(pokemon) { //#3.2.1: Create a new function either above or below addListItem() and call it showDetails(). The function should expect one parameter: pokemon. Inside the function, run a console.log() on the Pokémon object that’s passed as the parameter.
        console.log(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon) { //#2.1: Create a function inside your IIFE and name it addListItem(). && #2.2 This function has one parameter—it will represent a single Pokémon. Name the parameter pokemon.
        let pokelist = document.querySelector('.pokemon-list'); //#1.2: create a variable inside the forEach's loop function block, then assign it the ul element you just added to your “index.html” file.
        let listItem = document.createElement('li'); //#1.4 Create an li element (e.g., let listItem = document.createElement('li')).
        let button = document.createElement('button'); //#1.5 Create a button element (e.g., let button = document.createElement('button'))
        pokelist.appendChild(listItem); //#1.8 Finally, append the list item to the unordered list as its child.
        listItem.appendChild(button); //#1.7 Now, append the button to the list item as its child.
        button.innerText = pokemon.name; //#1.5 ... and set its innerText to be the Pokémon's name (remember that forEach returns a Pokémon in each iteration).
        button.classList.add('button'); //#1.6 Add a class to the button using the classList.add method (button.classList.add(...)).

        button.addEventListener('click', function () { //#3.2.2 In your addListItem() function, add an event listener to the button you created. It should listen to a click. As for its event handler function, call the showDetails function there, passing the pokemon object as a parameter when a Pokémon is clicked. This parameter should be the same parameter as addListItem().
            showDetails(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        showDetails: showDetails,
        addListItem: addListItem,
    }
})();

pokemonRepository.add({ name: 'Pikachu' });
pokemonRepository.getAll().forEach(function (pokemon) { //#2.3 Now, cut the code inside the forEach's loop function (essentially, the code you just added in the previous sequence of steps), then move that piece of code into your new addListItem() function.
    pokemonRepository.addListItem(pokemon); //#2.6 Inside the forEach's loop function block, call addListItem() (remember to reference the variable holding the IIFE before calling addListItem()) and pass the Pokémon returned in the forEach's loop function block to the addListItem() function call.
});


//To Figure Out:
// #2.4 Make sure you use addListItem()’s parameter to set the inner text rather than the parameter you used in your forEach's loop function block. Later on, you’ll be passing the actual Pokémon object returned in each loop iteration once you call addListItem() there. (You don't need to change anything even if they’re both named pokemon.)
// #2.5 Add the addListItem() function to the object you’re returning from the IIFE so that it’s available outside the IIFE (just like you did to add and getAll). Name the key addListItem() (the same as the function's name).