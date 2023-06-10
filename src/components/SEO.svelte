<script lang="ts">
	import { SITE_TITLE } from "@/config";
	export let title: string | undefined = undefined;

	const pageTitle = [title, SITE_TITLE].filter(Boolean).join(" | ");
</script>

<svelte:head><title>{pageTitle}</title></svelte:head>
