<template>
	<div class="movies-list">
	
		<div v-if="$route.params.page == undefined" v-for="movie in resultArrays[0]" class="movie-item">
			<div class="row">
				<div :id="movie['imdbID']" class="movie-item__poster" :style="{ backgroundImage: `url(${movie['Poster']})` }">
					
				</div>
				<div class="movie-item__info">
					<div class="movie-item__title">
						{{movie['Title']}}
					</div>
					<div class="movie-item__year">
						{{movie['Year']}}
					</div>
					<div class="movie-item__more-info-link-wrapper">
						<button @click="showMore" :data-id="movie['imdbID']" class="movie-item__more-info-link"">More</button>
						<!-- <router-link :to="'/movie/' + movie['imdbID']" class="movie-item__more-info-link">More</router-link> -->
					</div>
				</div>
				<div class="movie-item__nav">
						<button v-if="$route.name == 'home'" :data-id="movie['imdbID']"  class="button button_sm button_like" @click="like" :class="{button_like_active: movie.favoriteFlag && movie.favoriteFlag == true}"></button>
					<button v-if="$route.name == 'home'" :data-id="movie['imdbID']" class="button button_sm button_dislike" @click="dislike">
						
					</button>
					<button v-if="$route.name != 'home'" :data-id="movie['imdbID']" class="button button_sm button_delete" @click="del">del</button>	
				</div>
			</div>
		</div>
		
		 <div v-if="$route.params.page" v-for="movie in resultArrays[$route.params.page-1]" class="movie-item">
			<div class="row">
				<div :id="movie['imdbID']" class="movie-item__poster" :style="{ backgroundImage: `url(${movie['Poster']})` }">
					
				</div>
				<div class="movie-item__info">
					<div class="movie-item__title">
						{{movie['Title']}}
					</div>
					<div class="movie-item__year">
						{{movie['Year']}}
					</div>
					<div class="movie-item__more-info-link-wrapper">
						<button @click="showMore" :data-id="movie['imdbID']" class="movie-item__more-info-link"">More</button>
					</div>
				</div>
				<div class="movie-item__nav">
					<button v-if="$route.name == 'home'" :data-id="movie['imdbID']"  class="button button_sm button_like" @click="like" :class="{button_like_active: movie.favoriteFlag && movie.favoriteFlag == true}"></button>
					<button v-if="$route.name == 'home'" :data-id="movie['imdbID']" class="button button_sm button_dislike" @click="dislike"></button>
					<button v-if="$route.name != 'home'" :data-id="movie['imdbID']" class="button button_sm button_delete" @click="del">del</button>		
				</div>
			</div>
		</div>

		<div v-if="resultArrays == false">
			Enter a movie name to get a list</div>
		<div v-if="resultArrays != false" class="paginator movies-list__paginator">
				<router-link  v-for="page,key in resultArrays" class="paginator__link" :to="{name: $route.name, params: {page: (key+1)}}"><span>{{key+1}}</span></router-link>
			
		</div>
	</div>
</template>
<style lang="scss">
	@import './movies.scss';
</style>
<script>
	export default{
		props: ['movies'],
		computed: {
			resultArrays(){
				let result = [];
				if(this.movies && this.movies[0]){
					let arrayMovies = this.movies;
					arrayMovies.sort((a,b) => {
						let aY = a.Year;
						let bY = b.Year;
						if((aY).trim().length > 4){
							aY = (aY.split('–'))[0];
							console.log(aY)
						}
						if((bY).trim().length > 4){
							bY = (bY.split('–'))[0];
						}
						return bY - aY
					});
					result = this.paginator(arrayMovies, 3);
					console.log(result);
				}
				return result;
				
			}

		},
		mounted(){
		
		},
		methods:{
			isEmpty(object) {

				return JSON.stringify(object) == "{}";

			},
			showMore(ctx){
				let id = ctx.target.dataset.id;
				this.$router.push("/movie/" + id)
			},
			del(ctx){
				if((this.$route.name == 'favorites')){
					let id = ctx.target.dataset.id;
				
					if((this.$store.getters.doneFavorites != false)){
						let movie = this.$store.getters.doneMovies.find((element, index, array) => {return element.imdbID == id});
						this.$store.commit('deleteFromFavorites', movie)
						movie.favoriteFlag = false;
						this.$store.commit('changeMovieProps', movie)
					}
				}
				if((this.$route.name == 'blackList')){
					let id = ctx.target.dataset.id;
					let movie = this.$store.getters.doneBlackFilms.find((element, index, array) => {return element.imdbID == id});
					if((this.$store.getters.doneBlackFilms != false)){
						this.$store.commit('deleteFromBlackFilms', movie)
					}
				}
			},
			like(ctx){
				
				if((this.$route.name != 'favorites') && (this.$route.name != 'black-list')){
					let id = ctx.target.dataset.id;
					if((this.$store.getters.doneMovies != false)){
						let movie = this.$store.getters.doneMovies.find((element, index, array) => {return element.imdbID == id});
						this.$store.commit('addToFavorites', movie)
						movie.favoriteFlag = true;
						this.$store.commit('changeMovieProps', movie)
					}
				}		
			},
			dislike(ctx){
				if((this.$route.name != 'favorites') && (this.$route.name != 'black-list')){
					let id = ctx.target.dataset.id;
					console.log(ctx.target);
					if((this.$store.getters.doneMovies != false)){
						let movie = this.$store.getters.doneMovies.find((element, index, array) => {return element.imdbID == id});
						this.$store.commit('addToBlackFilms', movie);
						this.$store.commit('deleteFromMovies', movie);


					}
				}
			},
			paginator(array, size){
				let res = [];
				let pages = Math.ceil(array.length / size);
				let start = 0, end = size;
				for (var i = 0; i < pages; i++) {
					res[i] = array.slice(start, end);
					start += size;
					end += size;
				}
				return res;
			}
		}
	}
</script>