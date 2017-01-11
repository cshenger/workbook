<template>
	<div id="main">
		<raw-editor></raw-editor>
		<render-editor></render-editor>
	</div>
</template>

<script>
	import rawEditor from './rawEditor'
	import renderEditor from './renderEditor'

	export default {
		name: 'App',
		components: {
			rawEditor,
			renderEditor
		}
	}
</script>

<style>
	*{
		box-sizing: border-box;
	}

	html{
		font-size: 10px;
	}
	
	body{
		margin: 0;
		padding: 0;
	}

	#main{
		width: 100%;
		height: 100%;
	}
</style>