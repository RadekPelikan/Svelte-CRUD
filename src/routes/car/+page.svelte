<script lang="ts">
	import CarList from '$lib/components/model/CarList.svelte';
	import CarListPaged from '$lib/components/model/CarListPaged.svelte';
	import CarTable from '$lib/components/model/CarTable.svelte';
	import CarTablePaged from '$lib/components/model/CarTablePaged.svelte';

	let value = $state<'list' | 'table'>('list');

	$inspect(value);
</script>

<main>
	<h1>All cars</h1>

	<a href="/car/new">Create new</a>

	<div>
		<div>
			<form class="flex mb-4">
				<label class={`selection:outline-2 flex-1 text-center ${value === "list" ? 'bg-violet-500' : 'bg-inherit'}`}>
					List
					<input class="opacity-0" type="radio" name="tab" value="list" bind:group={value} />
				</label>
				<label class={`selection:outline-2 flex-1 text-center ${value === "table" ? 'bg-violet-500' : 'bg-inherit'}`}>
					Table
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
