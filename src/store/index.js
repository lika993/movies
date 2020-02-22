import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
   state: {
       movies: [

       ],
       test: 3,
       favorites: [],
       blackFilms: []
   },
	mutations: {
		changeMovies (state, data) {
			 state.movies = data;
		},
		changeMovieProps (state, item) {
			 let indexOfFavoritesMovies = state.movies.findIndex(el => el.imdbID == item.imdbID);
			 if(indexOfFavoritesMovies != -1){
			 	Vue.set(state.movies, indexOfFavoritesMovies, item)
			 }
			 state.movies;
		},
		addToData (state, data) {
			  state.movies.push(data);
		},
		addToFavorites (state, item) {
			 let setFavorites = new Set(state.favorites);
			 setFavorites.add(item);
			 state.favorites = Array.from(setFavorites);
		},
		addToBlackFilms (state, item) {
			 let blackFilms = new Set(state.blackFilms);
			 blackFilms.add(item);
			 state.blackFilms = Array.from(blackFilms);
			 let indexOfFavoritesMovies = state.favorites.findIndex(c => c.imdbID == item.imdbID);
			 if(indexOfFavoritesMovies != -1){
			 	Vue.delete(state.favorites, indexOfFavoritesMovies);
			 }
		},
		deleteFromFavorites (state, item) {
			let index = state.favorites.findIndex(c => c.imdbID == item.imdbID);
			if(index != (-1)){
				Vue.delete(state.favorites, index);
			}
		},
		deleteFromBlackFilms (state, item) {
			var index = state.blackFilms.findIndex(c => c.imdbID == item.imdbID);
			if(index != (-1)){
				Vue.delete(state.blackFilms, index);
			}
			var indexOfMovie = state.movies.findIndex(c => c.imdbID == item.imdbID);
			if(indexOfMovie == (-1)){
				state.movies.push(item);
			}
		},
		deleteFromMovies (state, item) {
			var index = state.movies.findIndex(c => c.imdbID == item.imdbID);
			if(index != (-1)){
				Vue.delete(state.movies, index);
			}
		}
	},
   getters: {
       doneMovies: state => {
       	
           return state.movies;
       },
       doneFavorites: state => {
       		
           return state.favorites;
       },
       getTest: state => {
           return state.test;
       },
		doneBlackFilms: state => {
           return state.blackFilms;
       }
   },
	actions: {
		incrementAsync (context, payload) {

			 context.commit('changeMovies', payload)
		},
		addToFavorites (context, payload) {

			 context.commit('addToFavorites', payload)
		}
	}
});

export default store;