import { actionTypes } from './actionTypes'
import apiService from '../../services/apiService'

const actions = {
    searchTypeName: (event) => ({
        type: actionTypes.SEARCH_TYPE_NAME,
        payload: event
    }),
    searchTypeSkills: (event) => ({
        type: actionTypes.SEARCH_TYPE_SKILLS,
        payload: event
    }),
    inputValue: (event) => ({
        type: actionTypes.INPUT_VALUE, 
        payload: event
    }),  
    // POKEMON
    fetchPokemonRequest: () => ({
        type: actionTypes.FETCH_POKEMON_REQUEST
    }),
    fetchPokemonSuccess: (pokemon) => ({
        type: actionTypes.FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }),
    fetchPokemonFailure: (error) => ({
        type: actionTypes.FETCH_POKEMON_FAILURE,
        payload: error
    }),
    fetchPokemon: (inputValue) => {
        return (dispatch) => {
            dispatch(actions.fetchPokemonRequest)
            apiService.ListPokemons(inputValue)
                .then(res => {
                    const pokemon = res
                    dispatch(actions.fetchPokemonSuccess(pokemon))
                })
                .catch(err => {
                    const errorMsg = err.message
                    dispatch(actions.fetchPokemonFailure(errorMsg))
                })
        }
    },
    // ABILITY
    fetchAbilityRequest: () => ({
        type: actionTypes.FETCH_ABILITY_REQUEST
    }),
    fetchAbilitySuccess: (ability) => ({
        type: actionTypes.FETCH_ABILITY_SUCCESS,
        payload: ability
    }),
    fetchAbilityFailure: (error) => ({
        type: actionTypes.FETCH_ABILITY_FAILURE,
        payload: error
    }),
    fetchAbility: (inputValue) => {
        return (dispatch) => {
            dispatch(actions.fetchAbilityRequest)
            apiService.ListAbility(inputValue)
                .then(res => {
                    const ability = res
                    dispatch(actions.fetchAbilitySuccess(ability))
                })
                .catch(err => {
                    const errorMsg = err.message
                    dispatch(actions.fetchAbilityFailure(errorMsg))
                })
        }
    }
}

export { actions }