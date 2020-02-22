<template>
	<fragment>
		<div class="centered">
			<moviesComponent v-if="movies && movies[0]" :movies="movies"></moviesComponent>
			<div v-else>
				You have not added favorite movies yet
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
				console.log(this.$store.getters.doneFavorites);
				return (this.$store.getters.doneFavorites);
			}
		},
		components: {
			moviesComponent
		}
	}
</script>