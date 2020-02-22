<template>
	<fragment>
		<search></search>  
		<div class="centered">
			<moviesComponent :movies="movies"></moviesComponent>
		</div>
	</fragment>	
</template>
<script>
import moviesComponent from '../components/Movies.vue'
import search from '../components/Search.vue'

export default {
	data () {
		return {
			
		}
	},
	computed: {
		movies() {
			return this.$store.getters.doneMovies;
		},
		test(){
			return this.$store.getters.getTest;
		}
	},
  components: {
    moviesComponent, search
  },
	methods: {
		
	},
	mounted(){
		

	}
}
</script>