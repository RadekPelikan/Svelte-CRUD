<script lang="ts">
	import { getCarsPaged, getMaxPages } from '$lib/api/cars.remote';
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	const currentPage = $derived(parseInt(page.url.searchParams.get('page') ?? '0'));
	const cars = $derived(await getCarsPaged(currentPage));
	const maxPages = $derived(await getMaxPages());

	const handlePrevious = () => {
		goto(`?page=${currentPage - 1}`);
	};
	const handleNext = () => {
		goto(`?page=${currentPage + 1}`);
	};
</script>

{@render navigationButtons()}

<ul class="grid gap-4">
	{#each cars as car}
		<li class="max-w-60 rounded bg-violet-900 hover:brightness-90">
			<a href={`/car/${car.id}`}>
				<p>
					<span>{TEXTS[DEFAULT_LANG].model.cars.name}</span>
					<span>{car.name}</span>
				</p>
				<p>
					<span>{TEXTS[DEFAULT_LANG].model.cars.brand}</span>
					<span>{car.brand}</span>
				</p>
				<p>
					<span>{TEXTS[DEFAULT_LANG].model.cars.power}</span>
					<span>{car.power}</span>
				</p>
			</a>
		</li>
	{/each}
</ul>

{@render navigationButtons()}

{#snippet navigationButtons()}
<div class="flex justify-between">
	{#if currentPage > 0}
		<button onclick={handlePrevious}>Previous</button>
	{:else}
		<div></div>
	{/if}
	{#if currentPage < maxPages - 1}
		<button onclick={handleNext}>Next</button>
	{/if}
</div>
{/snippet}
