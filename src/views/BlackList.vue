<template>
	<fragment>
		<div class="centered">
			<moviesComponent v-if="movies && movies[0]" :movies="movies"></moviesComponent>
			<div v-else>
				You have not added movies to black-list yet
			</div>
		</div>
	</fragment>	
</template>
<script>
	import moviesComponent from '../components/Movies.vue'
	export default {
		data () {
			return {
				
			}
		},
		computed: {
			movies() {
				return Array.from(this.$store.getters.doneBlackFilms);
			}
		},
		components: {
			moviesComponent
		}
	}
</script>