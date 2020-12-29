let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (
            typeof pokemon === "object" && "name" in pokemon // && "detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    function getAll() {
        return pokemonList;
    }

    //This function adds a list item to the list for each pokemon
    function addListItem(pokemon) { //#2.1: Create a function inside your IIFE and name it addListItem(). && #2.2 This function has one parameter—it will represent a single Pokémon. Name the parameter pokemon.
        let pokemonList = document.querySelector('.pokemon-list'); //#1.2: create a variable inside the forEach's loop function block, then assign it the ul element you just added to your “index.html” file.
        let listPokemon = document.createElement('li'); //#1.4 Create an li element (e.g., let listItem = document.createElement('li')).
        let button = document.createElement('button'); //#1.5 Create a button element (e.g., let button = document.createElement('button'))
        pokemonList.appendChild(listPokemon); //#1.8 Finally, append the list item to the unordered list as its child.
        listPokemon.appendChild(button); //#1.7 Now, append the button to the list item as its child.
        button.innerText = pokemon.name; //#1.5 ... and set its innerText to be the Pokémon's name (remember that forEach returns a Pokémon in each iteration).
        button.classList.add('button'); //#1.6 Add a class to the button using the classList.add method (button.classList.add(...)).
        button.addEventListener('click', function (event) { //#3.2.2 In your addListItem() function, add an event listener to the button you created. It should listen to a click. As for its event handler function, call the showDetails function there, passing the pokemon object as a parameter when a Pokémon is clicked. This parameter should be the same parameter as addListItem().
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showModal(item) {
        console.log(item);
        modalContainer.innerHTML = '';
        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        let titleElement = document.createElement('h1');
        titleElement.innerText = item.name;

        let heightElement = document.createElement('p');
        heightElement.innerText = 'Height: ' + item.height;
        heightElement.classList.add('height');

        let imageElement = document.createElement('img');
        imageElement.src = item.imageUrl

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(heightElement);
        modal.appendChild(imageElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    }

    function showDetails(item) { //#3.2.1: Create a new function either above or below addListItem() and call it showDetails(). The function should expect one parameter: pokemon. Inside the function, run a console.log() on the Pokémon object that’s passed as the parameter.
        loadDetails(item).then(function () {
            showModal(item);
        })
    }

    let modalContainer = document.querySelector('#modal-container');
    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });
    modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        // We only want to close if the user clicks directly on the overlay
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
    };
})();

pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

//To Figure Out:
// #2.4 Make sure you use addListItem()’s parameter to set the inner text rather than the parameter you used in your forEach's loop function block. Later on, you’ll be passing the actual Pokémon object returned in each loop iteration once you call addListItem() there. (You don't need to change anything even if they’re both named pokemon.)
// #2.5 Add the addListItem() function to the object you’re returning from the IIFE so that it’s available outside the IIFE (just like you did to add and getAll). Name the key addListItem() (the same as the function's name).

// pokemonRepository.loadList().then(function () {
//     pokemonRepository.getAll().forEach(function (pokemon) { //#2.3 Now, cut the code inside the forEach's loop function (essentially, the code you just added in the previous sequence of steps), then move that piece of code into your new addListItem() function.
//         pokemonRepository.addListItem(pokemon); //#2.6 Inside the forEach's loop function block, call addListItem() (remember to reference the variable holding the IIFE before calling addListItem()) and pass the Pokémon returned in the forEach's loop function block to the addListItem() function call.
//     });
// });
