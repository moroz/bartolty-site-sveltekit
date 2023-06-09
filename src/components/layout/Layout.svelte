<script lang="ts">
	import { SITE_TITLE } from "../../config";
	import Logo from "../Logo/Logo.svelte";
	import "@css/globals.scss";

	export let title: string | undefined = undefined;

	const pageTitle = [title, SITE_TITLE].filter(Boolean).join(" | ");
</script>

<svelte:head><title>{pageTitle}</title></svelte:head>
<div class="layout">
	<Logo />
	<slot />
</div>

<style lang="scss">
	.layout {
		background: salmon;
	}
</style>
