<template>
	<div class="search">
		<div class="centered search__centered">
			<form class="search__form">
				<div class="">
					<label class="search__label">
						<span class="search__title">
							Enter movie title
						</span>
						<input class="search__input" @input="getMovies" type="text" name="" v-model.trim="title">
					</label>
					<button class="search__button" type="submit">Search</button>
				</div>
			</form>
		</div>
	</div>
</template>
<style lang="scss">
	@import './search.scss'
</style>
<script>
	import axios from 'axios'
	export default {
		data(){
			return {
				title: '',
				movies: []
			}
		},
		methods:{
			setMoviesData () {
				
			},
			getMovies(){
				 axios
      				.get('http://www.omdbapi.com/?apikey=c05eca02&s=' + this.title)
					.then((res) => {
						if (res.statusText == "OK"){
						  
							this.$store.dispatch('incrementAsync',res.data.Search)
							
					}})
			}
		}
	}
</script>