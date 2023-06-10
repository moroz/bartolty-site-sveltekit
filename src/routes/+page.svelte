<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h2>{data.title}</h2>
<main>
	{@html data.md}
</main>
