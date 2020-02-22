<template>
	<header class="header">
		<div class="centered header__centered">
			<nav class="header__nav">
				<ul class="menu header__menu menu_gorizont">
					<li class="menu__item menu__item_line">
						<router-link class="menu__item" :to="{ name: 'home' }">Search</router-link>
					</li>
					<li class="menu__item menu__item_line">
						<router-link class="menu__item" :to="{ name: 'favorites' }">Favourites movies</router-link>
					</li>
					<li class="menu__item menu__item_line">
						<router-link class="menu__item" :to="{ name: 'blackList' }">Black-list</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
<style lang="scss">
	@import './header.scss'
</style>