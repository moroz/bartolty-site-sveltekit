<script lang="ts">
	import LogoText from "./logo-text.svg";
</script>

<a href="/" class="logo" title="Buddyzm Diamentowej Drogi. Linia Karma Kagyu">
	<LogoText />
	<img class="logo" src="/favicon.svg" alt="Logo Buddyjskiego Związku Diamentowej Drogi" />
</a>

<style lang="scss">
	@import "@css/variables";

	.logo {
		display: flex;
		align-items: center;
		position: relative;
		color: var(--primary);
		gap: 0.75rem;

		:global(svg) {
			transform: translateY(65%);
		}

		:global(img) {
			transform: translateY(30%);
		}

		@include not-mobile {
			&::before,
			&::after {
				content: "";
				position: absolute;
				display: block;
				width: 100vw;
				background-color: var(--primary);
				height: 1px;
				bottom: 0;
			}

			&::before {
				left: 10rem;
				transform: translateX(-100%);
			}

			&::after {
				right: -0.5rem;
				transform: translateX(100%);
			}
		}
	}

	.logoText {
		@include mobile {
			display: none;
		}
	}
</style>
