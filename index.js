const card = document.getElementById("card");

const fetchData = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/${
    document.getElementById("submitted-name").value
  }`;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return new Error("There was a problem.");
      }
    })
    .then((result) => {
      console.log(result);
      const pokemon = {
        photo: result.sprites["front_default"],
        id: result.id,
        name: result.name,
        type: result.types.map((type) => {
          return type.type.name;
        }),
      };
      displayPokemon(pokemon);
    })
    .catch((e) => {
      console.log(e);
    });
  return false;
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = `
  <img class="photo card-img-top" src=${pokemon.photo} alt="Portrait of the pokemon submitted." />
  <div class="card-body">
    <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
    <h3 class="card-text">Type: ${pokemon.type}</h3>
  </div>
  `;
  card.innerHTML = pokemonHTMLString;
};
