import axios from 'axios';

export const PokemonService = {
    getPokemons,
    getPokemonByName
}

function getPokemons() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const data = await axios.get('/')
            resolve(data.data.results)
        } catch (error) {
            reject(new Error(error))
        }
    })
}

function getPokemonByName(pokemonName) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const data = await axios.get(`/${pokemonName}`)
            resolve(data.data)
        } catch (error) {
            reject(new Error(error))
        }
    })
}