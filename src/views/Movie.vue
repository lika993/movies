<template>
	<div class="centered">
		<div class="movie-item movie-page">
			<div class="row">
				<div class="movie-item__left-bar">
					<div class="movie-item__title movie-page__title">
						{{this.movieInfo.Title}}
					</div>
					<div class="movie-item__poster movie-item__poster_big" :style="{ backgroundImage: `url(${movieInfo['Poster']})` }">
						
					</div>
					<!-- <div class="movie-item__nav_bottom">
						<button class="button button_sm">+</button>
						<button class="button button_sm">-</button>	
					
					</div> -->
				</div>
				<div class="movie-item__info">
					<div class="row">
						<div class="row__head">
							<div class="movie-item__rating">
								Year
							</div>
						</div>
						<div class="row__value">
							{{this.movieInfo.Year}}
						</div>
					</div>
					<div class="row">
						<div class="row__head">
							<div class="movie-item__rating">
								Genre
							</div>
						</div>
						<div class="row__value">
							{{this.movieInfo.Genre}}
						</div>
					</div>
					<div class="row">
						<div class="row__head">
							<div class="movie-item__rating">
								Producer
							</div>
						</div>
						<div class="row__value">
							{{this.movieInfo.Director}}
						</div>
					</div>
					<div class="row">
						<div class="row__head">
							<div class="movie-item__rating">
								Released
							</div>
						</div>
						<div class="row__value">
							{{this.movieInfo.Released}}
						</div>
					</div>
					<div class="row">
						<div class="row__head">
							<div class="movie-item__rating">
								Rating
							</div>
						</div>
						<div class="row__value">
							{{this.movieInfo.imdbRating}}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	@import '../components/movies.scss';
</style>
<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				movieInfo: {}
			}
		},
		methods:{
			getMovieInfo(){
				axios
				.get('http://www.omdbapi.com/?apikey=c05eca02&i=' + this.$route.params.id)
				.then((res) => {
					if (res.statusText == "OK"){
						this.movieInfo = res.data;
						console.log(this.movieInfo);
					}
				})
			}
		},
			mounted(){
				this.getMovieInfo()
			}
	}
</script>