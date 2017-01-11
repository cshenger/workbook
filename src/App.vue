<template>
	<div id="app">
		<transition name="bounce">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			}
		}
	}
</script>

<style>
	.bounce-enter-active {
	  animation: bounce-in .5s;
	}
	.bounce-leave-active {
	  animation: bounce-out .5s;
	}
	@keyframes bounce-in {
	  0% {
	    transform: scale(0) translateX(-100%);
	  }
	  50% {
	    transform: scale(1.5) translateX(100%);
	  }
	  100% {
	    transform: scale(1) translateX(0%);
	  }
	}
	@keyframes bounce-out {
	  0% {
	    transform: scale(1) translateX(0%);
	  }
	  50% {
	    transform: scale(1.5) translateX(100%);
	  }
	  100% {
	    transform: scale(0) translateX(-100%);
	  }
	}
</style>