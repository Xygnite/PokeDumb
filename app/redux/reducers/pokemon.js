const initialState = {
    pokemonData: [],
    pokemonDetail: {}
};

export default (pokemons = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_DATA":
            return {
                ...state,
                pokemonData: action.payload
            };

        default:
            return state;
    }
});
