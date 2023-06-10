<script lang="ts">
	import { page } from "$app/stores";
	import Logo from "@components/Logo/Logo.svelte";
	import "@css/globals.scss";
	import SEO from "@components/SEO.svelte";
</script>

<SEO title={$page.data.title} />
<div class="layout">
	<Logo />
	<slot />
</div>
