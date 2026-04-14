<script lang="ts">
	import CreateForm from '$lib/components/UpserftForm.svelte';
	import { getCarService } from '$lib/Services/CarService.svelte';

	var carService = getCarService();

	var createFormProps = carService.GetCreateForm();
</script>

<CreateForm {...createFormProps} />
