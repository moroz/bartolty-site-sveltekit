<script lang="ts">
	import { page } from "$app/stores";
	import "@css/globals.scss";
	import SEO from "@components/SEO.svelte";
	import Header from "@components/Header.svelte";
</script>

<SEO title={$page.data.title} />
<div class="layout">
	<Header />
	<slot />
</div>
