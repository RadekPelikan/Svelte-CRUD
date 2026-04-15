<script lang="ts">
	import CarListPaged from '$lib/components/model/CarListPaged.svelte';
	import CarTablePaged from '$lib/components/model/CarTablePaged.svelte';
	import { DEFAULT_LANG, TEXTS } from '$lib/lang/texts';

	let value = $state<'list' | 'table'>('list');

	$inspect(value);
</script>

<main>
	<h1>{TEXTS[DEFAULT_LANG].listView.title}</h1>

	<a href="/car/new">{TEXTS[DEFAULT_LANG].listView.createNewLink}</a>

	<div>
		<div>
			<form class="flex mb-4">
				<label class={`selection:outline-2 flex-1 text-center ${value === "list" ? 'bg-violet-500' : 'bg-inherit'}`}>
					{TEXTS[DEFAULT_LANG].listView.listTitle}
					<input class="opacity-0" type="radio" name="tab" value="list" bind:group={value} />
				</label>
				<label class={`selection:outline-2 flex-1 text-center ${value === "table" ? 'bg-violet-500' : 'bg-inherit'}`}>
					{TEXTS[DEFAULT_LANG].listView.tableTitle}
					<input class="opacity-0" type="radio" name="tab" value="table" bind:group={value} />
				</label>
			</form>
		</div>
		{#if value === 'list'}
			<CarListPaged />
		{:else}
			<CarTablePaged />
		{/if}
	</div>
</main>
