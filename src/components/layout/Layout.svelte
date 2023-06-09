<script lang="ts">
	import { SITE_TITLE } from '../../config';

	export let title: string | undefined = undefined;

	const pageTitle = [title, SITE_TITLE].filter(Boolean).join(' | ');
</script>

<svelte:head><title>{pageTitle}</title></svelte:head>
<div class="layout">
	<slot />
</div>

<style lang="scss">
	:global(body) {
		padding: 0;
		margin: 0;
	}

	.layout {
		background: salmon;
	}
</style>
