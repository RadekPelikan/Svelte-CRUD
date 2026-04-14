<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import { setCarService } from '$lib/Services/CarService.svelte';

	let { children } = $props();

	setCarService();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="min-h-screen bg-linear-to-b from-indigo-900 to-indigo-950 text-white">
	<Header></Header>
	<main class="container mx-auto max-w-280">
		{@render children()}
	</main>
</div>
