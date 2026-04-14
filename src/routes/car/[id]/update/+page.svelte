<script lang="ts">
	import UpserftForm from '$lib/components/UpserftForm.svelte';
	import { getCarService } from '$lib/Services/CarService.svelte';
	import type { UUID } from 'crypto';

	const { params } = $props();

	let carService = getCarService();
	$inspect(carService)

	let createFormProps = $derived(await carService.GetUpdateForm(params.id as UUID));
</script>

<UpserftForm {...createFormProps}>
	{#snippet form()}
		<label class="hidden">
			<input {...createFormProps.remoteCb.fields.id.as('text')} value={params.id} />
		</label>
	{/snippet}
</UpserftForm>
