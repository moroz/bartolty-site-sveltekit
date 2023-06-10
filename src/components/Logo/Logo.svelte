<script lang="ts">
	import clsx from "clsx";
	import LogoText from "./logo-text.svg";

	export let className: string | undefined = undefined;
</script>

<a href="/" class={clsx("logo", className)} title="Buddyzm Diamentowej Drogi. Linia Karma Kagyu">
	<LogoText />
	<img class="logoText" src="/favicon.svg" alt="Logo Buddyjskiego Związku Diamentowej Drogi" />
</a>

<style lang="scss">
	@import "@css/variables";

	:global(svg) {
		transform: scale(85%);
	}

	.logo {
		display: flex;
		align-items: center;
		position: relative;
		color: var(--primary);

		img {
			margin-left: -0.5rem;
		}

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
