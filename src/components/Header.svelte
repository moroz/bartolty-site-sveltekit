<script>
	import Logo from "@components/Logo/Logo.svelte";
</script>

<header>
	<section class="title-part">
		<h1>
			Bartołty Wielkie
			<br />
			Buddyjski Ośrodek Odosobnieniowy
		</h1>
	</section>
	<Logo />
</header>

<style lang="scss">
	@import "@css/variables";

	header {
		display: flex;
		justify-content: space-between;
		margin: 0 10rem;
		height: $header-height;
	}

	h1 {
		font-size: 1.125rem;
		color: var(--primary);
	}
</style>
