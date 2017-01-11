<template>
	<div id="raw-editor">
		<textarea
			:value="rawHtml"
			@input="renderHtml"
			class="form-control">
		</textarea>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	
	export default {
		computed: mapGetters({
			rawHtml: 'getRawHtml'
		}),
		methods: mapActions([
			'renderHtml'
		])
	}
</script>

<style>
    #raw-editor {
        float:left;
        width:50%;
        height:100%;
    }

    textarea{
        width: 100%;
        height:100%;
        border: 0;
        border-radius: 0;
        font-size: 1rem;
        padding: 1rem;
    }
</style>