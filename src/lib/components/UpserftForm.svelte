<script lang="ts">
	import type { UpsertFormProps } from "$lib/types/Props";


	const { remoteCb, fields, submitText, form }: UpsertFormProps = $props();
</script>

<form {...remoteCb} class="grid max-w-80">
	{#each fields as field}
		<label class="grid">
			{field.text}
			<input {...field.inputAttributes} value={field.value}/>
		</label>
	{/each}

	{@render form?.()}

	<button
		type="submit"
		class="cursor-pointer bg-slate-400 hover:brightness-90"
		aria-busy={!!remoteCb.pending}>{submitText}</button
	>
</form>
