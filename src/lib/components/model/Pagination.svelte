<script lang="ts">
	import { getMaxPages } from '$lib/api/cars.remote';
	import { PaginationService } from '$lib/Services/PaginationService.svelte';
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';
	import { getCarService } from '$lib/Services/CarService.svelte';

	const pagination = await PaginationService.initAsync(getCarService())
	// const pagination = PaginationService.init()

	// const MAX_NUMBERS = 5
	// let pages = $derived.by(
	// 	() =>
	// 		new Set(
	// 			Array(MAX_NUMBERS)
	// 				.keys()
	// 				.map((n) => Math.floor(n + pagination.current - MAX_NUMBERS / 2 + 1))
	// 				.filter((page) => page >= 0)
	// 				.filter((page) => page <= pagination.maxPages)
	// 		)
	// );
</script>

<div class="flex justify-between py-5">
	<button
		class="rounded bg-violet-900 px-2 py-1 hover:scale-105 hover:brightness-110 active:scale-90 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-gray-400 disabled:hover:scale-100 disabled:active:scale-100"
		disabled={!(pagination.current > 0)}
		onclick={() => pagination.handlePrevious()}>{TEXTS[DEFAULT_LANG].listView.previous}</button
	>
	<div class="text-center text-sm">
		<div class="flex gap-1">
			{#each pagination.pageNumbers.start as page}
				{@render pageButton(page)}
			{/each}

			{#if pagination.pageNumbers.isStart}
				<span> . . . </span>
			{/if}

			{#each pagination.pageNumbers.middle as page}
				{@render pageButton(page)}
			{/each}

			{#if pagination.pageNumbers.isEnd}
				<span> . . . </span>
			{/if}

			{#each pagination.pageNumbers.end as page}
				{@render pageButton(page)}
			{/each}
			
		</div>
		<p>
			{TEXTS[DEFAULT_LANG].listView.pageTitle}: {pagination.current} / {pagination.maxPages}
		</p>
	</div>
	<button
		class="rounded bg-violet-900 px-2 py-1 hover:scale-105 hover:brightness-110 active:scale-90 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-gray-400 disabled:hover:scale-100 disabled:active:scale-100"
		disabled={!(pagination.current < pagination.maxPages)}
		onclick={() => pagination.handleNext()}>{TEXTS[DEFAULT_LANG].listView.next}</button
	>
</div>

{#snippet pageButton(page: number)}
	<button
		onclick={() => pagination.changePage(page)}
		class={`${pagination.current == page ? 'font-bold text-amber-200' : 'text-white'} min-w-6 cursor-pointer`}
		>{page}</button
	>
{/snippet}
