<script lang="ts">
	import { getMaxPages } from '$lib/api/cars.remote';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';

	const currentPage = $derived.by(() => {
		const KEY = 'page';
		const pageQuery = page.url.searchParams.get('page');

		let pageNumber = parseInt(pageQuery ?? '0') || 0;
		if (browser) {
			const pageLocal = localStorage.getItem(KEY) as string;
			localStorage.setItem(KEY, pageQuery ?? pageLocal);
			pageNumber = parseInt(localStorage.getItem(KEY) as string) ?? 0;
			if (pageQuery !== pageLocal) {
				changePage(pageNumber);
			}
		}
		return pageNumber;
	});

	const maxPages = $derived(await getMaxPages());

	const changePage = (n: number) => {
		goto(`?page=${n}`);
	};
	const handlePrevious = () => {
		changePage(currentPage - 1);
	};
	const handleNext = () => {
		changePage(currentPage + 1);
	};

	const MAX_NUMBERS = 5;

	let pages = $derived.by(
		() =>
			new Set(
				Array(MAX_NUMBERS)
					.keys()
					.map((n) => Math.floor(n + currentPage - MAX_NUMBERS / 2 + 1))
					.filter((page) => page >= 0)
					.filter((page) => page <= maxPages)
			)
	);
</script>

<div class="flex justify-between py-5">
	<button
		class="rounded bg-violet-900 px-2 py-1 hover:scale-105 hover:brightness-110 active:scale-90 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-gray-400 disabled:hover:scale-100 disabled:active:scale-100"
		disabled={!(currentPage > 0)}
		onclick={handlePrevious}>{TEXTS[DEFAULT_LANG].listView.previous}</button
	>
	<div class="text-center text-sm">
		<div class="flex gap-1">
			{#if currentPage > Math.floor(MAX_NUMBERS / 2)}
				{@render pageButton(0)}
				<span> . . . </span>
			{/if}
			{#each pages as page}
				{@render pageButton(page)}
			{/each}
			{#if currentPage < maxPages - Math.floor(MAX_NUMBERS / 2)}
				<span> . . . </span>
				{@render pageButton(maxPages)}
			{/if}
		</div>
		<p>{TEXTS[DEFAULT_LANG].listView.pageTitle}: {currentPage} / {maxPages}</p>
	</div>
	<button
		class="rounded bg-violet-900 px-2 py-1 hover:scale-105 hover:brightness-110 active:scale-90 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-gray-400 disabled:hover:scale-100 disabled:active:scale-100"
		disabled={!(currentPage < maxPages)}
		onclick={handleNext}>{TEXTS[DEFAULT_LANG].listView.next}</button
	>
</div>

{#snippet pageButton(page: number)}
	<button
		onclick={() => changePage(page)}
		class={`${currentPage == page ? 'font-bold text-amber-200' : 'text-white'} min-w-6 cursor-pointer`}
		>{page}</button
	>
{/snippet}
