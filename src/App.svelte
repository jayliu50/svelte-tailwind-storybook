<script>
	export let name;
	import "./Tailwindcss.svelte"
</script>

<main>
	<h1>Hello {name}!</h1>
	<p><a href="https://tailwindcss.com/docs">Tailwind</a> <span class="text-green-600 font-bold">Enabled</span></p>
	<p><a href="https://storybook.js.org/docs/react/writing-docs/introduction">Storybook</a> <span class="text-green-600 font-bold">Enabled</span></p>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>