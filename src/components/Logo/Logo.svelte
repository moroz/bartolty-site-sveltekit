<script lang="ts">
	import clsx from "clsx";
	import LogoText from "./logo-text.svg";

	export let className: string | undefined = undefined;
</script>

<a href="/" class={clsx("logo", className)} title="Buddyzm Diamentowej Drogi. Linia Karma Kagyu">
	<LogoText />
	<img src="/favicon.svg" alt="Logo Buddyjskiego Związku Diamentowej Drogi" />
</a>

<style lang="scss">
	@import "@css/variables";

	.logo {
		display: flex;
		align-items: center;
		gap: 1rem;
		position: relative;
		color: var(--primary);

		@include not-mobile {
			&::before,
			&::after {
				content: "";
				position: absolute;
				bottom: 0;
			}
		}
	}

	.logoText {
		@include mobile {
			display: none;
		}
	}
</style>
